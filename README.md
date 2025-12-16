---

# Persona Studio: AI-Driven Eco-Sourcing Agent**Persona Studio** is a hybrid Multimodal and Generative AI agent built to revolutionize sustainable procurement. By utilizing **Gemini 1.5 Flash**, the platform allows users to switch between a **Visual Analyst** (identifying eco-traits in furniture assets) and a **Generative Consultant** (creating strategic sustainability frameworks via text).

---

## Problem StatementSustainable sourcing is often slowed down by a "knowledge gap." Architects and procurement managers must manually research material lifecycles, supplier ESG ratings, and circularity risks.

* **Fragmentation:** Data on sustainability is scattered across various formats (images, PDFs, text).
* **Persona Bias:** Different stakeholders (Architects vs. Marketers) need different insights from the same asset.
* **Resource Inefficiency:** Constant API calls for repetitive sourcing tasks are costly and slow.

##💡 The SolutionA persona-driven "Studio" that acts as an intelligent thought partner.

* **Hybrid Intelligence:** Processes both visual assets and text constraints to generate persona-specific reports.
* **Role-Based Reasoning:** Adapts its tone, depth, and focus based on the selected expert persona.
* **Resilient Architecture:** Implements a fallback mock engine to ensure 100% uptime during high-traffic procurement sessions.

##🛠️ Our Approach1. **Multimodal Foundation:** Using Gemini’s vision capabilities to identify materials and joinery from raw images.
2. **Persona Mapping:** A specialized configuration layer that "primes" the LLM to think like an Eco-Architect, Procurement Manager, or Marketing Expert.
3. **Efficiency Layer:** Built with a content-hashing cache and an automatic fallback system to manage API quotas effectively—aligning with the **Resource-Efficient Agent** theme.
4. **Glassmorphism UI:** A professional-grade dashboard designed for high-end design studios.

---

##📂 Project Structure```text
eco-architect-agent/
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main Studio Dashboard (UI Logic)
│   │   ├── App.css        # Glassmorphism Styling
│   │   └── api.js         # Backend Communication Layer
│   └── index.html         # Entry Point
├── backend/
│   ├── data/
│   │   ├── inventory.json # Mock Sustainable Inventory
│   │   └── mockResults.json # Fallback Generative Content
│   ├── config/
│   │   └── personas.js    # Persona System Instructions
│   ├── services/
│   │   └── geminiService.js # Gemini API & Logic Branching
│   ├── server.js          # Express API Server
│   └── .env               # API Configuration
└── README.md

```

---

## Future Scope* **Live Inventory Sync:** Connecting the agent directly to supplier APIs (e.g., IKEA, West Elm) for real-time stock and price analysis.
* **PDF Report Generation:** Allowing users to export the "Strategic Narrative" into a professional PDF for client presentations.
* **Collective Reasoning:** An "Agent Roundtable" mode where all three personas debate the sustainability of a single product.
* **Certification Scanner:** Using Gemini to verify OCR data from sustainability certificates (FSC, Cradle to Cradle) against the visual product.

---

## Getting Started###1. Prerequisites* Node.js (v18 or higher)
* A Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

###2. Installation**Backend:**

```bash
cd backend
npm install
# Create .env and add GEMINI_API_KEY=your_key_here
node server.js

```

**Frontend:**

```bash
cd frontend
npm install
npm run dev

```
