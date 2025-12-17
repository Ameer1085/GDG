#!/bin/bash

# create folders
mkdir -p src/components/shared
mkdir -p src/layouts
mkdir -p src/pages
mkdir -p src/router

# create layout files
touch src/layouts/DashboardLayout.jsx
touch src/layouts/PublicLayout.jsx

# dashboard pages
touch src/pages/dashboard/Overview.jsx
touch src/pages/dashboard/Members.jsx
touch src/pages/dashboard/Events.jsx
touch src/pages/dashboard/Attendees.jsx
touch src/pages/dashboard/Tickets.jsx
touch src/pages/dashboard/Sponsors.jsx
touch src/pages/dashboard/Website.jsx

# sidebar pages
touch src/pages/sidebar/Analytics.jsx
touch src/pages/sidebar/Events.jsx
touch src/pages/sidebar/Emails.jsx
touch src/pages/sidebar/Settings.jsx
touch src/pages/sidebar/Sponsors.jsx

# router
touch src/router/index.jsx

# main files
touch src/main.jsx
touch src/App.jsx
touch src/App.css
touch index.css
