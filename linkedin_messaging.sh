#!/bin/bash

# LinkedIn Messaging Automation Script
# Reads Google Sheet and prepares next contact for messaging

SPREADSHEET_ID="1HZrolcPJyII8pWYVEJT3ZQjhSVJhpFyN"
STATE_FILE="$HOME/Documents/OptiStockAI/linkedin_messaging_state.json"
LOG_FILE="$HOME/Documents/OptiStockAI/linkedin_messaging_log.txt"
CSV_FILE="/tmp/contacts.csv"

# Get current timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# Check if state file exists, if not create it
if [ ! -f "$STATE_FILE" ]; then
    echo '{"last_messaged_index": -1, "messaged_emails": []}' > "$STATE_FILE"
fi

# Read the Google Sheet as CSV
curl -s "https://docs.google.com/spreadsheets/d/$SPREADSHEET_ID/gviz/tq?tqx=out:csv&sheet=Contactos" -o "$CSV_FILE"

if [ $? -ne 0 ]; then
    echo "$TIMESTAMP - ERROR: Failed to fetch Google Sheet" >> "$LOG_FILE"
    exit 1
fi

# Get the last messaged index
LAST_INDEX=$(jq -r '.last_messaged_index' "$STATE_FILE")
NEXT_INDEX=$((LAST_INDEX + 1))

# Get the next contact (row number in CSV, accounting for header)
# CSV columns: First Name (A), Last Name (B), Email (E), LinkedIn Url (L), Opening message (W)
CONTACT=$(sed -n "$((NEXT_INDEX + 2))p" "$CSV_FILE" 2>/dev/null)

if [ -z "$CONTACT" ]; then
    echo "$TIMESTAMP - No more contacts to message" >> "$LOG_FILE"
    exit 0
fi

# Parse the contact info
FIRST_NAME=$(echo "$CONTACT" | cut -d',' -f1 | tr -d '"')
LAST_NAME=$(echo "$CONTACT" | cut -d',' -f2 | tr -d '"')
EMAIL=$(echo "$CONTACT" | cut -d',' -f5 | tr -d '"')
LINKEDIN=$(echo "$CONTACT" | cut -d',' -f12 | tr -d '"')
MESSAGE=$(echo "$CONTACT" | cut -d',' -f23 | tr -d '"')

# Check if already messaged
MESSAGED_EMAILS=$(jq -r '.messaged_emails[]' "$STATE_FILE")
if echo "$MESSAGED_EMAILS" | grep -q "$EMAIL"; then
    echo "$TIMESTAMP - Skipping $EMAIL (already messaged)" >> "$LOG_FILE"
    exit 0
fi

# Save next contact to a file for the agent to pick up
cat > "$HOME/Documents/OptiStockAI/next_contact.json" << EOF
{
    "index": $NEXT_INDEX,
    "first_name": "$FIRST_NAME",
    "last_name": "$LAST_NAME",
    "email": "$EMAIL",
    "linkedin": "$LINKEDIN",
    "message": "$MESSAGE"
}
EOF

echo "$TIMESTAMP - Prepared contact #$NEXT_INDEX: $FIRST_NAME $LAST_NAME ($EMAIL)" >> "$LOG_FILE"
echo "NEXT_CONTACT_READY=true" > "$HOME/Documents/OptiStockAI/.trigger"
