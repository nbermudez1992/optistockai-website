# OptiStockAI — LinkedIn & Email Outreach Templates
**Generated: 2026-03-19**

---

## 🎯 ICP Recap
- Retailers (apparel/fashion) in Mexico + Colombia
- 10-50 employees → likely 2+ stores
- Uses Alegra or Siigo (to verify during outreach)
- Pain: 30-90 day inventory cycles, cash trapped in stock

---

## 💬 LinkedIn Message Templates

### V1 — Cold Outreach (Initial Contact)
```
Hola [First Name],

Vi que [Company] está en el sector retail en [City]. 
¿Sabías que la mayoría de las tiendas en LATAM pierden ventas por no tener el inventario correcto en el momento justo?

Estamos construyendo OptiStockAI — planificación de demanda con IA para tiendas que usan Alegra/Siigo. Sin consultoría cara, sin cambiar tu sistema.

¿Te suena útil? Puedo explicarte en 10 min.

Saludos,
Nicolas
```

### V2 — For Companies with Clear Product/Cycle Context
```
Hola [First Name],

[Reference: producto o marca específica del perfil si hay, ej: "Me encantó la colección [X] de [Company]"].

Estamos trabajando con tiendas similares para resolver un problema común: inventario parado que ocupa capital sin generar ventas.

Con IA analizamos tu histórico de ventas y predecimos qué y cuánto stock necesitas — conectado a tu Alegra o Siigo actual.

¿Hay 15 min esta semana para contarte cómo funciona?

Nicolas
```

### V3 — Follow-Up (3-5 days after no response)
```
Hola [First Name],

Solo quería seguir mi mensaje anterior sobre OptiStockAI.

Si ya no es relevante para [Company], sin problema — solo quería asegurarme de que lovieras.

Si te interesa explorar cómo reducir inventario parado y mejorar el flujo de caja, con gusto te cuento más.

Nicolas
```

### V4 — For Warmer Leads (they responded)
```
Hola [First Name],

¡Gracias por responder!

Te cuento: conectamos OptiStockAI con tu Alegra/Siigo y la herramienta aprende tu patrón de ventas para predecir qué productos se van a vender y cuándo reponer.

¿Hay un momento esta semana para una llamada de 15 min? Te muestro un ejemplo con datos reales.

Nicolas
```

---

## 📧 Email Templates

### Email V1 — Cold Outreach
**Subject:** [Company] + planificación de demanda con IA

```
Hola [First Name],

Espero que estés bien. Me llamo Nicolas y estoy construyendo OptiStockAI — una herramienta de planificación de demanda para retail en LATAM.

Trabajo con tiendas como [similar company] para resolver un problema que veo constantemente: exceso de inventario en temporada baja y faltantes en temporada alta.

Nuestra solución:
✓ Conecta con tu Alegra o Siigo (sin cambio de sistema)
✓ Predice demanda basado en tu histórico de ventas
✓ Recomienda cuánto y cuándo comprar
✓ Desde $99/mes

¿Tiene sentido para [Company]? Me encantaría mostrarte cómo funciona.

¿Disponibilidad para una llamada esta semana?

Saludos,
Nicolas Bermudez
```

### Email V2 — Follow-Up
**Subject:** Re: [Company] + planificación de demanda

```
Hola [First Name],

Te escribo seguimiento a mi mensaje anterior sobre OptiStockAI.

Si no es el momento adecuado, lo entiendo — solo quería asegurarme de que la oportunidad llegara a tus manos.

Si te interesa ver cómo funciona o tienes 5 min para una llamada rápida, con gusto me adapto a tu horario.

Saludos,
Nicolas
```

---

## 📊 Outreach Tracking

Use `leads_optistock.csv` — columns:
- `LinkedIn_Sent`: Date sent
- `Email_Sent`: Date sent  
- `Response`: Yes/No/Pending
- `Status`: New → Contacted → Interested → Demo → Pilot → Client
- `Notes`: Personal context from research

---

## 🚫 Don't Do This

- Don't send same generic template to everyone — personalize at least 1 detail
- Don't message about OpenClaw if it's OptiStockAI outreach (keep brands separate)
- Don't pitch unless they respond to initial message
- Don't spam — max 10-15 messages/day across both channels

---

## 📅 2-Day Sprint Plan

### Day 1 (Tomorrow — Mar 20)
**Goal: 10 outreach sends**

1. Pick top 5 from `leads_optistock.csv` (score ≥ 6)
2. Personalize message for each (reference something specific from their profile/company)
3. Send 5 LinkedIn + 5 email
4. Log in CSV immediately after each send
5. Update status: New → Contacted

**Top 5 for tomorrow (score 7, prioritize):**
1. WELTON & SONS — Mexico City — 20 employees — Apparel
2. Batista — Colombia — 26 employees — Apparel
3. Pink Revolver — Guadalajara — 10 employees — Jewelry/Accessories
4. Alexa Corporacion — Guadalajara — 48 employees — Fashion retail
5. ZEPHIR — Bogotá — 12 employees — Sustainable fashion

### Day 2 (Mar 21)
**Goal: 10 more outreach sends**

1. Next 5 from score ≥ 6
2. Also check Day 1 responses — reply to any interested leads immediately
3. If no response from Day 1 by afternoon, send V3 follow-up

**Day 2 targets (score 6):**
6. kanaus — Mexico City Metro — 23 employees — Medical scrubs
7. Almacor de Colombia — Bogotá — 35 employees — Fajas/Body shapers
8. Articur Ltda — Antioquia — 17 employees — Leather goods
9. Martin Pescador — Bogotá — 32 employees — Resortwear
10. Armatura — Bogotá — 37 employees — Sustainable apparel

---

## 🔍 goplaces — 200 Searches/Day Max

**Strategy:** Find additional retailers NEAR known retail clusters in Mexico/Colombia

**Daily budget:** 200 searches/day = ~1,000/week = ~4,000/month

**Search plan:**
- Bogota: "tienda ropa [barrio]" searches (Chapinero, El Retiro, Zona Rosa, etc.)
- CDMX: "boutique CDMX", "tienda ropa Condesa", "tienda ropa Polanco"
- Guadalajara: "tienda ropa GDL", "boutique GDL"
- Medellín: "tienda ropa Medellín", "fashion store Medellín"

**For each result:**
- Note: Store name, address, if multi-location
- Flag for manual outreach (can't determine ERP from Places data)

**Priority:** Only add companies to outreach list if they're clearly retailers with 2+ stores AND appear to match ICP (apparel, accessories, footwear)

**Log all searches in:** `goplaces_search_log.md`
