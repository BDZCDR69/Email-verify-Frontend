DMARC Verification Frontend

A React-based frontend for a DMARC verification tool.

This application allows a user to enter an email address and sends it to a backend API to check whether the domain has a valid DMARC record and which policy is configured.

Features

Email input with basic validation

Integration with a Go backend API

Displays DMARC record, presence status and policy type

Clean UI with a separate result panel and footer links

Backend API

This frontend expects a backend endpoint:

POST http://localhost:8081/verify


Request body:

{
  "email": "user@example.com"
}

Tech Stack

React (Create React App)

JavaScript (Hooks: useState, useEffect)

Custom CSS

Authors

Frontend: Prince
