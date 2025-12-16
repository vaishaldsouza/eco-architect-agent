 Persona Studio: AI-Driven Eco-Sourcing Agent

**Persona Studio** is a hybrid **multimodal and reasoning-driven AI agent** that streamlines sustainable procurement decisions. Powered by **Gemini 1.5 Flash**, the system analyzes product images and contextual constraints, then generates **persona-specific sustainability insights** for architects, procurement managers, and marketing teams.

By combining **visual understanding**, **function-backed data retrieval**, and **persistent persona reasoning**, Persona Studio bridges the gap between design intent and responsible sourcing—efficiently and at scale.

---

## 🚨 Problem Statement

Sustainable sourcing is slowed by a persistent **knowledge and tooling gap**. Decision-makers must manually interpret fragmented sustainability data while balancing the differing priorities of multiple stakeholders.

### Key Challenges

* **Fragmentation:** Sustainability information exists across images, PDFs, and unstructured text.
* **Persona Bias:** Different roles require different insights from the same product.
* **Resource Inefficiency:** Repetitive analysis and API calls increase latency and cost.

Existing tools treat sustainability as static data, not as a **contextual, role-dependent reasoning problem**.

---

## 💡 The Solution

Persona Studio introduces a **persona-driven AI “studio”** that acts as an intelligent thought partner for sustainable procurement.

### Core Capabilities

* **Hybrid Multimodal Intelligence**
  Uses Gemini’s vision and reasoning capabilities to extract eco-signals directly from product images and text inputs.

* **Persona-Aware Reasoning**
  Adapts tone, depth, and analytical focus based on a selected expert persona:

  * Eco-Architect
  * Procurement Manager
  * Sustainability Marketer

* **Resource-Efficient Architecture**
  Implements content hashing, local caching, and a fallback mock engine to ensure reliable operation within free-tier API limits.

---

## 🛠️ Technical Approach

### 1. Multimodal Analysis (Gemini Core Feature)

Gemini analyzes raw furniture images to infer:

* Material composition
* Construction methods and joinery
* Visual indicators of durability and sustainability

This multimodal reasoning is essential and cannot be achieved with traditional rule-based systems.

---

### 2. Persona Mapping Layer

A persistent configuration layer primes Gemini to reason as different domain experts, ensuring **consistent, high-quality outputs with minimal back-and-forth**—aligned with the *Maximized Context* theme.

---

### 3. Function Calling & Automation

Based on the analysis, Gemini triggers a **mock function call** to query a structured sustainability inventory:

* Eco-ratings
* Lifecycle data
* Circularity risks

The system returns a **single structured action plan**, aligning with the *Resource-Efficient Agent* theme.

---

### 4. Efficiency & Reliability Layer

* Content-hashing cache prevents duplicate API calls
* Automatic fallback to mock inference ensures uninterrupted demos and testing
  This design prioritizes **logic over load**, as recommended for the free tier.

---

### 5. Professional Studio UI

A glassmorphism-based dashboard designed for design studios and procurement teams, emphasizing clarity and usability.

---

## 📂 Project Structure

```text
eco-architect-agent/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Studio Dashboard Logic
│   │   ├── App.css          # Glassmorphism UI
│   │   └── api.js           # Backend Interface
│   └── index.html           # Entry Point
├── backend/
│   ├── data/
│   │   ├── inventory.json   # Mock Sustainable Inventory
│   │   └── mockResults.json # Fallback Outputs
│   ├── config/
│   │   └── personas.js      # Persona System Prompts
│   ├── services/
│   │   └── geminiService.js # Gemini API & Function Logic
│   ├── server.js            # Express Server
│   └── .env                 # API Configuration
└── README.md
```

---

## 🔮 Future Scope

* **Live Inventory Sync**
  Real-time integration with supplier APIs for pricing, availability, and sustainability metrics.

* **PDF Report Generation**
  Export persona-specific sustainability narratives for client presentations.

* **Collective Reasoning Mode**
  A multi-persona “Agent Roundtable” where all roles debate a product’s sustainability.

* **Certification Scanner**
  OCR-based verification of sustainability certificates (FSC, Cradle to Cradle) cross-checked against visual product analysis.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation

**Backend**

```bash
cd backend
npm install
# Create a .env file with:
# GEMINI_API_KEY=your_key_here
node server.js
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 🏁 Why Persona Studio?

Persona Studio demonstrates how **multimodal AI, persona-driven reasoning, and function calling** can transform sustainability from a manual research task into an **intelligent, efficient decision-making workflow**—fully aligned with the Gemini API’s strengths.

---
