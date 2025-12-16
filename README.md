Persona Studio: AI-Driven Eco-Sourcing Agent

**Persona Studio** is a hybrid **Multimodal + Generative AI system** designed to modernize sustainable procurement workflows. Powered by **Gemini 1.5 Flash**, the platform enables users to dynamically switch between expert personas—such as a **Visual Analyst** and a **Generative Consultant**—to extract sustainability intelligence from both **images and text**.

The result is an intelligent, role-aware sourcing assistant that bridges the gap between design intent and responsible procurement.

---

## 🚨 Problem Statement

Sustainable sourcing decisions are frequently delayed by a **knowledge and tooling gap**. Architects and procurement teams must manually interpret fragmented sustainability data across formats, vendors, and stakeholder expectations.

### Key Challenges

* **Data Fragmentation:** Sustainability signals exist across images, PDFs, product sheets, and unstructured text.
* **Persona Bias:** Different stakeholders (architects, marketers, procurement managers) require distinct insights from the same product.
* **Resource Inefficiency:** Repetitive API calls and manual analysis increase latency and cost.

---

## 💡 The Solution

**Persona Studio** introduces a persona-driven AI “studio” that acts as an intelligent thought partner for sustainable decision-making.

### Core Capabilities

* **Hybrid Intelligence:** Combines visual understanding and text-based reasoning to generate holistic sustainability assessments.
* **Role-Based Reasoning:** Adapts depth, tone, and analytical focus based on the selected expert persona.
* **Resilient Architecture:** Includes a smart fallback (mock inference engine) to ensure uninterrupted operation during API throttling or high-traffic usage.

---

## 🛠️ Technical Approach

### 1. Multimodal Foundation

Leverages **Gemini’s vision capabilities** to infer materials, finishes, and construction methods from raw furniture images.

### 2. Persona Mapping Layer

A configurable instruction system that primes the model to reason as:

* Eco-Architect
* Procurement Manager
* Marketing & Sustainability Strategist

### 3. Efficiency & Reliability Layer

* Content-hashing cache to avoid redundant requests
* Automatic fallback to mock data when API limits are reached
  This aligns directly with the **Resource-Efficient Agent** design philosophy.

### 4. Glassmorphism UI

A clean, modern dashboard built for professional design studios, emphasizing clarity, focus, and visual hierarchy.

---

## 📂 Project Structure

```text
eco-architect-agent/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main Studio Dashboard (UI Logic)
│   │   ├── App.css          # Glassmorphism Styling
│   │   └── api.js           # Backend Communication Layer
│   └── index.html           # Entry Point
├── backend/
│   ├── data/
│   │   ├── inventory.json   # Mock Sustainable Inventory
│   │   └── mockResults.json # Fallback Generative Content
│   ├── config/
│   │   └── personas.js      # Persona System Instructions
│   ├── services/
│   │   └── geminiService.js # Gemini API & Logic Branching
│   ├── server.js            # Express API Server
│   └── .env                 # API Configuration
└── README.md
```

---

## 🔮 Future Scope

* **Live Inventory Sync**
  Real-time integration with supplier APIs (e.g., IKEA, West Elm) for pricing, availability, and sustainability scoring.

* **PDF Report Generation**
  Export persona-specific sustainability narratives into client-ready PDF reports.

* **Collective Reasoning Mode**
  An “Agent Roundtable” where all personas debate and evaluate a single product collaboratively.

* **Certification Scanner**
  OCR-based verification of sustainability certifications (FSC, Cradle to Cradle) cross-checked against visual product data.

---

## 🚀 Getting Started

### 1. Prerequisites

* Node.js (v18+)
* Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

---

### 2. Installation

#### Backend

```bash
cd backend
npm install
# Create a .env file and add:
# GEMINI_API_KEY=your_key_here
node server.js
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 🌍 Why Persona Studio?

Persona Studio demonstrates how **multimodal AI + persona-aware reasoning** can transform sustainability from a compliance task into a strategic design advantage—making eco-conscious decisions faster, clearer, and more accessible.

---

Just say the word 👌
