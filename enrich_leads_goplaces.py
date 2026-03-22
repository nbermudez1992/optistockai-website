#!/usr/bin/env python3
"""
OptiStockAI — Daily Lead Enrichment via goplaces
Downloads retail/fashion companies from goplaces and adds to master_leads.csv
Cities rotate to build geographic coverage over time.
"""
import subprocess
import csv
import os
import json
from datetime import datetime

CSV_PATH = os.path.join(os.path.dirname(__file__), 'master_leads.csv')
STATE_FILE = os.path.join(os.path.dirname(__file__), 'gplaces_enrichment_state.json')

# Cities to search — rotate through these
CITY_QUERIES = [
    ("Colombia", "Bogotá", "boutique moda ropa Bogota"),
    ("Colombia", "Medellín", "boutique moda ropa Medellin"),
    ("Colombia", "Cartagena", "boutique moda ropa Cartagena"),
    ("Mexico", "Mexico City", "moda ropa boutique Ciudad de Mexico"),
    ("Mexico", "Guadalajara", "boutique ropa moda Guadalajara"),
    ("Mexico", "Monterrey", "tienda ropa moda Monterrey"),
]

def get_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE) as f:
            return json.load(f)
    return {"city_index": 0, "added_today": 0}

def save_state(state):
    with open(STATE_FILE, 'w') as f:
        json.dump(state, f)

def search_goplaces(query, country, city):
    try:
        result = subprocess.run(
            ['goplaces', 'search', query, '--json'],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode != 0:
            return []
        try:
            data = json.loads(result.stdout)
            places = data if isinstance(data, list) else data.get('results', [])
            return [(p.get('name', ''), '', country, city, '1+', 'Retail') for p in places[:8]]
        except:
            return []
    except Exception as e:
        print(f"Error searching goplaces for {city}: {e}")
        return []

def deduplicate(new_companies, csv_path):
    existing = set()
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if row:
                existing.add(row[0].strip().lower())
    
    unique = []
    for company in new_companies:
        if company[0].lower() not in existing:
            unique.append(company)
            existing.add(company[0].lower())
    return unique

def append_to_csv(companies, csv_path):
    count = 0
    with open(csv_path, 'a', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        for company in companies:
            writer.writerow([company[0], company[1], company[2], company[3], company[4], company[5], '', '', '', 'gplaces_enrichment', 'New', '', '', ''])
            count += 1
    return count

def main():
    state = get_state()
    city_index = state.get('city_index', 0)
    total_added = 0
    
    today = datetime.now().strftime('%Y-%m-%d')
    print(f"[{today}] Starting goplaces enrichment — city index: {city_index}")
    
    # Search across all 6 cities, 8 results each = ~48 companies per run
    for i in range(len(CITY_QUERIES)):
        idx = (city_index + i) % len(CITY_QUERIES)
        country, city, query = CITY_QUERIES[idx]
        print(f"  Searching {city}, {country}...")
        companies = search_goplaces(query, country, city)
        unique = deduplicate(companies, CSV_PATH)
        if unique:
            added = append_to_csv(unique, CSV_PATH)
            total_added += added
            print(f"  Added {added} companies from {city}")
    
    # Update state
    new_city_index = (city_index + len(CITY_QUERIES)) % len(CITY_QUERIES)
    save_state({"city_index": new_city_index, "last_run": today, "added_today": total_added})
    
    print(f"[{today}] Enrichment complete. Added {total_added} companies.")

if __name__ == '__main__':
    main()
