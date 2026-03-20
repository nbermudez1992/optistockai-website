#!/bin/bash
# OptiStockAI - Email Response Monitor
# Runs every 30 minutes to check for replies to outreach emails
# Sends alert to Nicolas via Telegram if there's a response

ACCOUNT="nicolasbermudezpedraza@gmail.com"

# Search for responses to our OptiStockAI outreach emails
RESPONSES=$(gog gmail messages search "from:(hello@molgoa.com OR info@petuniaropa.com OR notificaciones@mattelsa.net OR contacto@linkamoda.com OR gabriel@ukw.com.mx OR paola@alturasiete.com OR maria@bemonocromo.com OR andrea@camellet.com OR seusse@articur.com OR santiagoguerrero@batista.com.co OR marte@desserto.com.mx OR cbalas@grupobaltex.com OR juan.david@silidubai.com) newer_than:6h" --max 5 --account "$ACCOUNT" --json 2>/dev/null)

COUNT=$(echo "$RESPONSES" | python3 -c "import json,sys; print(len(json.load(sys.stdin).get('messages', [])))" 2>/dev/null)

if [ "$COUNT" -gt 0 ] 2>/dev/null; then
    echo "[$(date)] FOUND $COUNT responses!"
    echo "$RESPONSES" | python3 -c "
import json,sys
msgs = json.load(sys.stdin).get('messages', [])
for m in msgs[:5]:
    print(f'Subject: {m.get(\"subject\",\"?\")}')
    print(f'From: {m.get(\"from\",\"?\")}')
    print('---')
" 2>/dev/null
    # Alert Nicolas
    openclaw cron alert --message "📬 OptiStockAI email response detected! $COUNT new reply(ies). Check Gmail."
else
    echo "[$(date)] No new email responses"
fi
