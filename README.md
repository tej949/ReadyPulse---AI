# ReadyPulse 
### Making Change Human

> *"AI that scaffolds human judgment. Not replaces it."*

Built for the **LOVE x AI Bengaluru Innovation Challenge** — powered by the **Love as a Strategy® Framework by Softway**.

---

## What is ReadyPulse?

When a company makes a big change — new tools, new processes, restructuring — employees often feel scared or confused but **never say it out loud**.

ReadyPulse is an internal AI tool that quietly asks employees how they're feeling through a simple, anonymous chat interface, and shows managers **who needs support before things go wrong**.

The twist:
- 🔒 **Employees own their data** — they can delete it anytime
- 👤 **Anonymity by design** — managers never see individual names
- 💬 **Every AI output pushes toward a human conversation** — never away from one
- 🛡️ **HR oversight** — flags manager misuse automatically

---

## The Problem

70% of organizational change initiatives fail. The #1 reason? Employee resistance that leadership **never saw coming**.

Traditional surveys are too formal. Anonymous forms get ignored. And nobody walks into their manager's office to say *"I'm scared about this."*

So change happens **to** people — not **with** them.

---

## How It Works

```
Manager describes a change
        ↓
AI generates empathetic pulse questions
        ↓
Employees respond via anonymous chat (Gemini AI)
        ↓
Dashboard unlocks after 5/6 employees respond
        ↓
Manager sees readiness patterns — not names
        ↓
Every insight nudges the manager toward a human conversation
```

---

## Features

### 👤 Role-Based Login
| Role | Access |
|------|--------|
| Employee (×6) | Private anonymous AI chat |
| Manager (×1) | Readiness dashboard — gated at 5/6 responses |
| HR (×1) | Misuse flags + team trends — no individual data ever |

### 💬 Employee Chat
- Live conversation with **Google Gemini AI**
- Each AI response tagged with one of the **Six Pillars** (Empathy, Trust, Vulnerability, etc.)
- Scenario quick-fill buttons for fast demo
- **Delete My Data** button — employees control their own responses at all times
- Anonymity indicator always visible

### 📊 Manager Dashboard
- Unlocks only when **≥ 5 of 6 employees** have responded (anonymity threshold)
- Shows: Confident / Uncertain / Needs Support counts
- Key themes extracted from responses
- Filter cards by sentiment
- Each card has a **"Start a human conversation"** nudge with a reflective question
- Ethics notice on every view — no names, ever

### 🏢 HR Oversight
- **Misuse Flags tab** — auto-detected anomalies (dashboard accessed too early, individual queries attempted, etc.) with resolve buttons
- **Team Trends tab** — aggregate readiness % per team, change vs last pulse
- No individual employee data accessible at any level

### 🧠 Six Pillars — Live in the UI
Every AI response is tagged with the active Love as a Strategy® pillar:

| Pillar | How AI applies it |
|--------|-------------------|
| 🔵 Inclusion | Listens to every voice without judgment |
| 🩷 Empathy | Asks why before suggesting how |
| 🟣 Vulnerability | Creates safe space to express real feelings |
| 🟢 Trust | Data stays anonymous — employees control it |
| 🟡 Empowerment | Surfaces insights so leaders can act |
| 🟠 Forgiveness | No judgment on past responses, only forward focus |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Styling | Pure CSS-in-JS (no Tailwind dependency) |
| AI | Google Gemini 1.5 Flash API |
| Storage | Browser localStorage |
| Fonts | Syne · DM Sans · JetBrains Mono (Google Fonts) |

**No backend required.** Fully client-side. Single file deployment.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Create a new Vite + React project
npm create vite@latest readypulse -- --template react
cd readypulse
npm install

# 2. Replace src/App.jsx with the ReadyPulse code
# (copy contents of App.jsx from this repo)

# 3. Update src/main.jsx — remove the index.css import
```

Your `src/main.jsx` should look like this:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

```bash
# 4. Delete unused default files
# src/App.css
# src/index.css
# src/assets/

# 5. Run the app
npm run dev
```

Open **http://localhost:5173**

---

## Demo Credentials

| Role | ID | Password |
|------|----|----------|
| Employee 1 | `emp001` | `pass001` |
| Employee 2 | `emp002` | `pass002` |
| Employee 3 | `emp003` | `pass003` |
| Employee 4 | `emp004` | `pass004` |
| Employee 5 | `emp005` | `pass005` |
| Employee 6 | `emp006` | `pass006` |
| Manager | `mgr001` | `mgrpass` |
| HR | `hr001` | `hrpass` |

---

## Demo Scenario (Pitch Day)

Type this into the Manager page to see the full dashboard:

> *"We are moving from WhatsApp to Slack for all team communication starting Monday."*

This will surface a full readiness dashboard with confident, uncertain, and resistant responses — along with key themes and suggested actions.

---

## Ethics by Design

ReadyPulse was built with a specific ethical architecture:

- **Minimum threshold** — Dashboard requires 5/6 employees to respond before unlocking. You cannot infer individual identities from a group of 5+.
- **Employee-first data control** — Employees can delete all their responses at any time. The deletion is immediate and permanent.
- **No individual exposure** — Managers see anonymised concern summaries, never quotes, never names.
- **HR misuse detection** — If a manager tries to access data before threshold, or attempts individual-level queries, the system flags it and HR sees it.
- **AI never decides** — Every Gemini response ends with a reflective question. The AI is a thinking partner, not an answer machine.

---

## The Framework: Love as a Strategy®

ReadyPulse is built on Softway's **Love as a Strategy®** framework — specifically the **Six Change Principles**:

1. **Embrace Discomfort** — Growth happens outside comfort zones
2. **Prioritize Relationships** — Results follow relationships
3. **Practice Empathetic Curiosity** — Ask why before you judge
4. **Experiment** — Safe iteration enables innovation
5. **Wield Your Influence** — Use power to clear paths, not block them
6. **Be Effective** — Focus on outcomes over optics

And the **HumAIn First™** principle:
> *People first. Process second. Technology third.*

---

## Project Structure

```
src/
└── App.jsx          # Complete application — all components in one file
```

All logic, styles, components, and data are contained in a single `App.jsx` for simplicity and portability. No routing library, no CSS framework, no external component library required.

---

## Built For

**LOVE x AI — Bengaluru Innovation Challenge**
📅 February 28, 2026
🏆 Prize: ₹1,00,000

Judging criteria:
- ✅ Strategic Logic & Alignment
- ✅ Execution & PoC Quality
- ✅ Human Intent & Culture (Six Pillars)

---

## License

This project was built for the LOVE x AI hackathon. The Love as a Strategy® framework is owned by **Softway**. ReadyPulse is a proof-of-concept prototype.

---

*ReadyPulse — Making Change Human* 🫀
