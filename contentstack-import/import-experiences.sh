#!/bin/bash

# Auto-load .env.local from the project root (one level above this script)
if [ -f "../.env.local" ]; then
    source ../.env.local
    echo "🔐 Loaded CONTENTSTACK_MANAGEMENT_TOKEN=${CONTENTSTACK_MANAGEMENT_TOKEN:0:10}..."
  else
    echo "⚠️  .env.local not found two levels up from script"
  fi

# Expecting environment variables CONTENTSTACK_API_KEY and CONTENTSTACK_MANAGEMENT_TOKEN to be set
# Hardcoded for now
API_KEY="blt4e4bab83e0d9bcf1"
MGMT_TOKEN="cs63ca679de7990b275889c72b"
CONTENT_TYPE="experience"

# 15 tied to destinations (names suggest a link, but no reference field used yet)
TIED_EXPERIENCES=(
  "Cliffside Hike in Amalfi"
  "Geisha Dinner in Kyoto"
  "Safari Sunset in South Africa"
  "Cenote Swim in Tulum"
  "Jetboat Thrill in Queenstown"
  "Pastry Tour of Paris"
  "Souk Shopping in Marrakech"
  "Tango Night in Buenos Aires"
  "Volcanic Beach Sail in Santorini"
  "Balinese Temple Blessing"
  "Island Hop in Cartagena"
  "Blue Lagoon Soak"
  "Underwater Villa Morning in Maldives"
  "Designer Stroll in St. Barts"
  "Canoe Ride on Lake Louise"
)

# 10 general experiences
GENERAL_EXPERIENCES=(
  "Private Yacht Day"
  "Street Food Crawl"
  "Winery Bike Tour"
  "Desert Glamping"
  "Artisanal Chocolate Making"
  "Hot Air Balloon Ride"
  "Historical Walking Tour"
  "Luxury Train Journey"
  "Night Market Shopping"
  "Cooking Class with a Local Chef"
)

# Helper to slugify titles
slugify() {
	echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g'
}

# Generate gallery JSON
generate_gallery() {
    local base="$1"
    local out="\"gallery\": ["

    out+="{\"image_with_caption\": {\"image\": \"blt2fbbd9a7ced0ea9d\", \"caption\": \"Scene from $1\"}}"

    # Add 1–2 more photos with the same image UID
    if (( RANDOM % 2 )); then
      out+=", {\"image_with_caption\": {\"image\": \"blt2fbbd9a7ced0ea9d\", \"caption\": \"Another view of $1\"}}"
    fi
    if (( RANDOM % 3 == 0 )); then
      out+=", {\"image_with_caption\": {\"image\": \"blt2fbbd9a7ced0ea9d\", \"caption\": \"Final shot of $1\"}}"
    fi

    out+="]"
    echo "$out"
}

import_experiences() {
	local label="$1"
	shift
	local list=("$@")

	for title in "${list[@]}"; do
		slug=$(slugify "$title")
		description="This is a sample description of the experience titled '$title'."
		gallery=$(generate_gallery "$slug")

		echo "Importing: $title (slug: $slug)"

		curl -s -X POST "https://api.contentstack.io/v3/content_types/$CONTENT_TYPE/entries" \
			-H "api_key: $API_KEY" \
			-H "authorization: $MGMT_TOKEN" \
			-H "Content-Type: application/json" \
			-d "{
				\"entry\": {
					\"title\": \"$title\",
					\"slug\": \"$slug\",
					\"description\": \"$description\",
					$gallery,
					\"published\": true
				}
			}" | jq .
	done
}

echo "🔗 Importing 15 destination-tied experiences..."
import_experiences "Tied" "${TIED_EXPERIENCES[@]}"

echo "🌐 Importing 10 general experiences..."
import_experiences "General" "${GENERAL_EXPERIENCES[@]}"