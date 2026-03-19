# OptiStockAI — Lead Enrichment Pipeline
**For when list is ready for deep research | Created: 2026-03-19**

---

## 🎯 Goal
For each company in our list, find:
1. **Founder/Owner name** → for LinkedIn outreach
2. **Estimated revenue** → to validate ICP fit ($200K-$10M target)
3. **Current ERP** → Alegra, Siigo, SAP, other?
4. **Website** → to assess digital maturity
5. **LinkedIn company page** → for outreach
6. **Physical stores** → confirm 2-5 stores
7. **Industry sub-segment** → apparel, accessories, footwear, etc.

---

## 🔧 Tools & Sources Per Data Point

| Data | Source | Cost |
|------|--------|------|
| Founder/Owner | LinkedIn, Google search, company website | Free |
| Estimated revenue | LinkedIn Sales Navigator hints,Crunchbase,Siete Bronos,opencorporates.com | Free |
| Current ERP | LinkedIn posts, job postings, reviews, website | Free |
| Website | Google search, goplaces | Free |
| Stores | Google Maps, website "/tiendas", social posts | Free |
| Industry | Company description, LinkedIn, website | Free |

---

## 📊 Enrichment Process (Manual + Automated)

### Step 1: Seed the List
Already done — `leads_verified_multistore.csv` + `gplaces_master.csv` + `leads_alegra_frustrated.csv`

### Step 2: Quick Enrichment (30 min/company)
For each company, do in parallel:
```
1. Google: "[Company Name] founder" → get owner name
2. Google: "[Company Name] LinkedIn" → get company page URL
3. Google: "[Company Name] Alegra OR Siigo OR SAP" → confirm ERP
4. Check: website.com/tiendas or /sucursales → count stores
5. Check: company LinkedIn "About" → estimated employees/revenue
```

### Step 3: Prioritization
After enrichment, score each lead:
- **High Priority (A):** 2-5 stores confirmed + ERP confirmed + founder found
- **Medium Priority (B):** Stores suspected + ERP likely
- **Low Priority (C):** Unconfirmed, needs more research

### Step 4: Outreach Prep
For each A-tier lead:
1. Find founder/decision-maker on LinkedIn
2. Personalize message with something specific
3. Send

---

## 🤖 Automation Possibilities

### Google Search (Free)
- Batch process: 10 companies → 10 searches = ~5 min
- Can use web_search API to automate

### goplaces Details
- For each place_id in gplaces_master.json → run `goplaces details [place_id]`
- Returns: address, reviews, photos, opening hours, website if available
- ⚠️ Each details call costs API quota — use sparingly

### LinkedIn Scraping
- Not recommended (against ToS)
- Better: manual search + connection requests

### Website Triage
- Fetch homepage → check for "/tiendas" or "/sucursales" link
- Estimate store count from locations listed

---

## 📋 Current Lists Status

| File | # Companies | Enrichment Status |
|------|-------------|-------------------|
| leads_verified_multistore.csv | 6 | Partially enriched (stores confirmed) |
| gplaces_master.csv | 110 | Raw — needs enrichment |
| leads_needs_verification.csv | 9 | Partially enriched |
| leads_alegra_frustrated.csv | 7 | Seed — needs company names |
| leads_optistock.csv | 46 | Has contact names + companies |

---

## ⚡ Quick Wins This Week

1. **Enrich the 6 verified leads** (Molgoa, Mattelsa, Zonafria, Pink Rose, Petunia, Linka) → find founders + LinkedIn + ERP
2. **Search LinkedIn** for: "companyname" + "uses Alegra" or "companyname" + "Alegra"
3. **Check each company's LinkedIn page** for employee count as revenue proxy

---

## 🔍 Research Queries to Run

### Per Company:
```
"[Company Name]" founder OR dueño OR propietario OR CEO
"[Company Name]" Alegra OR Siigo OR ERP OR "sistema de inventarios"
"[Company Name]" empleados OR trabajadores OR facturación
"[Company Name]" tiendas OR sucursales OR direcciones
```

### For Alegra complaints specifically:
```
site:linkedin.com "Alegra" "problema" OR "frustrado"  
site:twitter.com "AlegraColombia" OR "@AlegraColombia" complaint
site:facebook.com "Alegra" "no funciona" 2025 OR 2026
```

---

## 📊 Enrichment Tracking

Add these columns to your spreadsheet:
```
| Founder_Name | Founder_LinkedIn | Est_Revenue | Current_ERP | Store_Count | ICP_Tier | Outreach_Status |
```

ICP Tier:
- A = Best fit (2-5 stores, retail, confirmed Alegra/Siigo)
- B = Good fit (suspected multi-store, likely ERP user)
- C = Potential (single store or unknown)
