#!/usr/bin/env python3
import csv
import json
import os
import sys

SPREADSHEET_ID = "1HZrolcPJyII8pWYVEJT3ZQjhSVJhpFyN"
STATE_FILE = os.path.expanduser("~/Documents/OptiStockAI/linkedin_messaging_state.json")
LOG_FILE = os.path.expanduser("~/Documents/OptiStockAI/linkedin_messaging_log.txt")
NEXT_CONTACT_FILE = os.path.expanduser("~/Documents/OptiStockAI/next_contact.json")

from urllib.request import urlopen

def log(message):
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(LOG_FILE, "a") as f:
        f.write(f"{timestamp} - {message}\n")

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, "r") as f:
            return json.load(f)
    return {"last_messaged_index": -1, "messaged_emails": []}

def save_state(state):
    with open(STATE_FILE, "w") as f:
        json.dump(state, f)

def fetch_contacts():
    url = f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Contactos"
    response = urlopen(url)
    import io
    csv_data = response.read().decode('utf-8')
    reader = csv.DictReader(io.StringIO(csv_data))
    return list(reader)

def main():
    log("Script triggered - fetching next contact")
    
    # Load state
    state = load_state()
    last_index = state.get("last_messaged_index", -1)
    messaged_emails = state.get("messaged_emails", [])
    
    # Fetch contacts
    try:
        contacts = fetch_contacts()
    except Exception as e:
        log(f"ERROR: Failed to fetch contacts: {e}")
        sys.exit(1)
    
    # Find next contact to message
    for i, contact in enumerate(contacts):
        if i <= last_index:
            continue
        if contact.get("Email", "").strip() in messaged_emails:
            continue
        
        # Build the message with the additional review layer
        original_message = contact.get("Opening message", "").strip()
        review_layer = " He estado trabajando en proyectos de este estilo con varias compañías y estoy tratando de montar una herramienta que pueda ayudarte a ti y tu compañía a muy bajo costo. Si te interesa, ¡estoy seguro de que podemos hablar!"
        full_message = original_message + review_layer
        
        next_contact = {
            "index": i,
            "first_name": contact.get("First Name", "").strip(),
            "last_name": contact.get("Last Name", "").strip(),
            "title": contact.get("Title", "").strip(),
            "company": contact.get("Company Name", "").strip(),
            "email": contact.get("Email", "").strip(),
            "linkedin": contact.get("Person Linkedin Url", "").strip(),
            "message": full_message
        }
        
        # Save next contact
        with open(NEXT_CONTACT_FILE, "w") as f:
            json.dump(next_contact, f, indent=2)
        
        log(f"Prepared contact #{i}: {next_contact['first_name']} {next_contact['last_name']} ({next_contact['email']})")
        print(f"NEXT_CONTACT_READY=true")
        return
    
    log("No more contacts to message")

if __name__ == "__main__":
    main()
