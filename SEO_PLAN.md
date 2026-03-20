# OptiStockAI — SEO Strategy & Implementation Plan
**For: nicolasbermudez1992/optistockai-website | Created: 2026-03-20**

---

## 🎯 SEO Strategy Overview

**Goal:** Make OptiStockAI the #1 result for "Alegra inventario" and related queries in Colombia + Mexico

**Target Keywords (Priority Order):**
| Priority | Keyword | Intent | Volume Estimate |
|----------|---------|--------|----------------|
| 🔴 P0 | "alternativa a Alegra" | Competitor switch | High |
| 🔴 P0 | "Alegra inventario" | Problem/solution | High |
| 🔴 P0 | "software inventario Alegra" | Product search | High |
| 🟡 P1 | "planeación demanda Colombia" | Product search | Medium |
| 🟡 P1 | "pronóstico ventas ML México" | Product search | Medium |
| 🟡 P1 | "optimizar inventario retail" | Educational | Medium |
| 🟢 P2 | "inventario 30 dias retail" | Educational | Low |
| 🟢 P2 | "demanda forecasting LATAM" | Product search | Low |

---

## 📋 Implementation Phases

### Phase 1: Quick Wins (This Week) — No new pages needed
**Effort:** Low | **Impact:** High | **Files:** `index.html`, `src/app/components/Home.tsx`

#### 1.1 Add FAQ Schema Markup
Add to `index.html` or create `src/app/components/FAQSchema.tsx`:
- "¿Cómo funciona OptiStockAI con Alegra?"
- "¿Puedo migrar mis datos de Alegra?"
- "¿Cuánto cuesta OptiStockAI vs un consultor?"
- "¿Qué pasa si ya uso Siigo en lugar de Alegra?"
- "¿Necesito conocimientos técnicos?"

#### 1.2 Add "Cansado de Alegra?" Section
New section in `Home.tsx` targeting frustrated Alegra users:
```
"¿Cansado de limitaciones en Alegra?"
- "Alegra no fue diseñado para planificación de demanda"
- "Sin visibilidad real de qué se va a vender"
- "Tomas decisiones con reportes, no con datos"
→ CTA: "Ver cómo OptiStockAI resuelve esto"
```

#### 1.3 Improve Internal Linking
- Add links from Home to `/product#integracion-alegra`
- Add breadcrumb links
- Ensure `/pricing` is linked from CTAs

#### 1.4 Strengthen Location Signals
Add mentions of specific cities in Colombia + Mexico:
- "Empresas en Bogotá, Medellín, Cali"
- "Tiendas en CDMX, Guadalajara, Monterrey"
- Schema: LocalBusiness markup

---

### Phase 2: New Pages (Week 2) — High Impact
**Effort:** Medium | **Impact:** High

#### 2.1 Create: `/alternativa-alegra` Page
**Purpose:** Rank #1 for "alternativa a Alegra" + "cansado de Alegra"

**Content Structure:**
1. Hero: "¿Cansado de Alegra? Hay una mejor manera"
2. Problem section: What Alegra does well, where it falls short
3. Comparison table: OptiStockAI vs Alegra (inventory features)
4. Migration guide: "Switching from Alegra to OptiStockAI in 3 steps"
5. Testimonial (from Ciclico once available)
6. CTA: Free trial

**Target Keywords:**
- alternativa a alegra
- mejor que alegra
- migar de alegra
- alegra limitaciones

**Schema:** ComparisonPage + FAQ

#### 2.2 Create: `/blog/5-erros-inventario-alegra.md` (or BlogPost component)
**Purpose:** Long-tail SEO, capture frustrated Alegra users searching for solutions

**Content:**
- Title: "5 Errores de Inventario que Alegra No Te Ayuda a Evitar"
- Target: retail/SME owners in Colombia + Mexico
- Keywords: errores inventario, control inventario, alegra
- Format: Educational, Spanish, actionable advice

#### 2.3 Create: `/precios` Page (if not already) — Already exists as `/pricing`

---

### Phase 3: Content Engine (Ongoing)
**Effort:** High | **Impact:** Medium (6-12 month payoff)

#### Blog Article Ideas (1/week):
1. "Cómo reducir inventario parado en 30 días" (Colombia/Mexico)
2. "Pronóstico de demanda para retail: Guía 2026"
3. "Alegra vs OptiStockAI: ¿Cuál es mejor para mi tienda?"
4. "Caso de estudio: Cómo Ciclico redujo inventario un 30%"
5. "Optimización de capital de trabajo para PYMEs en LATAM"

#### Location Pages:
- `/colombia` — Colombian pricing, testimonials, local SEO
- `/mexico` — Mexican pricing, testimonials, local SEO

---

## 🔧 Technical SEO Checklist

### Already Done ✓
- [x] Title tags with keywords
- [x] Meta descriptions
- [x] Open Graph + Twitter cards
- [x] Canonical URLs
- [x] hreflang (Spanish)
- [x] robots meta
- [x] Semantic HTML (React Router)
- [x] Mobile responsive (Tailwind)
- [x] Fast loading (Vite)
- [x] SoftwareSchema structured data

### Needs Fixing ❌
- [ ] No structured data for FAQ (Phase 1)
- [ ] No LocalBusiness schema
- [ ] No BreadcrumbList schema
- [ ] No HowTo schema
- [ ] Missing alt tags on some images (check all `<img>` tags)
- [ ] No hreflang for `x-default` pointing to `/es/`

### Improvements 🔧
- [ ] Add `lang="es"` to `<html>` tag in `index.html`
- [ ] Add `href="/blog"` to sitemap if missing
- [ ] Check `robots.txt` allows crawling of all pages
- [ ] Add `lastmod` dates to sitemap

---

## 📊 KPI Targets (30/60/90 Days)

| Metric | 30 Days | 60 Days | 90 Days |
|--------|---------|---------|---------|
| Organic traffic | +20% | +50% | +100% |
| "Alegra" keyword rank | Top 20 | Top 10 | Top 5 |
| Inbound leads from SEO | 2-3 | 5-8 | 10-15 |
| Indexed pages | 8 | 12 | 15 |

---

## 🚀 Immediate Actions (Today)

1. **Add FAQ schema** to `index.html` or create `FAQSchema.tsx`
2. **Add "Cansado de Alegra?" section** to `Home.tsx`
3. **Add location mentions** (Bogotá, Medellín, CDMX, GDL) throughout Home
4. **Commit + push** → Vercel auto-deploys
5. **Monitor** Google Search Console for indexing

---

## 📁 Files to Modify

| File | Changes |
|------|---------|
| `index.html` | FAQ schema, lang="es", LocalBusiness schema |
| `src/app/components/Home.tsx` | Add "Cansado de Alegra" section, location keywords |
| `src/app/components/SEO.tsx` | Add new schema types (FAQ, Breadcrumb, HowTo) |
| `src/app/routes.tsx` | Add `/alternativa-alegra` route |
| `src/app/components/AlternativaAlegra.tsx` | **NEW** — Competitor landing page |

---

## ⏱️ Time Estimate

- Phase 1 (quick wins): 2-3 hours
- Phase 2 (new pages): 4-6 hours  
- Phase 3 (content): Ongoing, 2-3 hours/week

**Total this week:** ~6-8 hours

---

## ❓ Questions Before I Start

1. Do you have a Google Search Console account linked to optistockai.site?
2. Is there any existing blog content in the `/articles` section?
3. Do you have testimonials from Ciclico or any current users?
4. Should I prioritize the "Alternativa a Alegra" page first, or the quick wins?

---

*Review this plan and tell me what to start with. I'll implement phase by phase.*
