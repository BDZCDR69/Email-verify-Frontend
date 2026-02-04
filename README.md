🛡️ DMARC Sentinel – Frontend

A lightweight React frontend for a real-world DMARC verification tool.
Built to analyze email domain security and help identify misconfigured or missing DMARC policies.

⚡ What this tool does

Enter an email address →
the frontend sends it to a backend API →
the backend performs a live DNS lookup on the domain →
and returns:

whether DMARC is present

the raw DMARC record

the active policy (none, quarantine, reject)

Results are shown instantly in a clean report panel.

🔍 Why this matters

DMARC is a core defense against:

domain spoofing

phishing campaigns

email impersonation attacks

This tool is built as a learning and analysis utility for email security and defensive tooling.

🧠 Frontend highlights

React (Create React App)

Hooks-based state management

API integration with a Go backend

Real-time result rendering

Minimal, tool-style UI

🔌 Backend API

The frontend connects to:

POST http://localhost:8081/verify


Payload:

{ "email": "user@example.com" }

<B>👤 Authors</b>

Frontend – Prince Rajpurohit
