#!/bin/bash
# LinkedIn Messaging Automation Runner
# Runs linkedin_messaging.py at random intervals between 1-2 hours

SCRIPT_DIR="$HOME/Documents/OptiStockAI"
PYTHON_SCRIPT="$SCRIPT_DIR/linkedin_messaging.py"
LOG_FILE="$SCRIPT_DIR/automation_log.txt"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

log "Automation started"

while true; do
    # Random sleep between 60 and 120 minutes (3600-7200 seconds)
    SLEEP_TIME=$((3600 + RANDOM % 3600))
    log "Sleeping for $((SLEEP_TIME/60)) minutes until next run"
    
    sleep $SLEEP_TIME
    
    log "Running linkedin_messaging.py..."
    python3 "$PYTHON_SCRIPT" >> "$LOG_FILE" 2>&1
    
    if [ $? -eq 0 ]; then
        log "Script completed successfully"
        
        # Check if there's a next_contact.json
        if [ -f "$SCRIPT_DIR/next_contact.json" ]; then
            CONTACT_NAME=$(python3 -c "import json; print(json.load(open('$SCRIPT_DIR/next_contact.json'))['first_name'] + ' ' + json.load(open('$SCRIPT_DIR/next_contact.json'))['last_name'])" 2>/dev/null)
            
            # Send Telegram notification to Nicolas
            log "Sending Telegram notification for $CONTACT_NAME"
            curl -s -X POST "https://api.telegram.org/bot$(cat $HOME/.openclaw/config.json | python3 -c 'import json,sys; print(json.load(sys.stdin)[\"channels\"][\"telegram\"][\"botToken\"])' 2>/dev/null)/sendMessage" \
                -d "chat_id=8207652521" \
                -d "text=🤖 *LinkedIn Automation*: New contact ready to message: $CONTACT_NAME. Processing now..." \
                -d "parse_mode=Markdown" >> "$LOG_FILE" 2>&1
            
            log "Notification sent - processing contact"
        fi
    else
        log "Script failed with error"
    fi
done
