#!/bin/bash

API_KEY="blt4e4bab83e0d9bcf1"
MGMT_TOKEN="cs4c5fc4a52040d679572c522f"
CONTENT_TYPE="advisor_specialty"

declare -a SPECIALTIES=(
  '{"title":"Romance Travel","description":"Curated getaways for couples, honeymoons, anniversaries, or just a dreamy escape together."}'
  '{"title":"Adventure Travel","description":"For thrill-seekers and nature lovers — hiking, diving, safaris, and the road less traveled."}'
  '{"title":"Family Trips","description":"Stress-free planning for the whole crew. Kid-friendly hotels, multi-gen itineraries, and fun for all."}'
  '{"title":"Food & Wine","description":"For travelers who book dinner before hotels — think vineyard tastings and food tours."}'
  '{"title":"Luxury Hotels","description":"The best of the best. Impeccable service, beautiful design, and a concierge who knows your name."}'
)

for specialty in "${SPECIALTIES[@]}"
do
  echo "Importing: $(echo $specialty | jq .title)"
  curl -s -X POST "https://api.contentstack.io/v3/content_types/$CONTENT_TYPE/entries" \
    -H "api_key: $API_KEY" \
    -H "authorization: $MGMT_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"entry\": $specialty}" \
    | jq .
done