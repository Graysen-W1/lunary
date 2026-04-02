# Lunary 🌙 — Capstone Proposal

Hey! Welcome to Lunary (lunar + diary). If you haven't been here before, Lunary is a daily journaling app. You get ONE entry per day, so make it count. You can always look back at your past entries for reflection, or maybe to revisit an idea you had at 2am.

The whole point of Lunary is mental well-being. Life gets busy, but slowing down and writing something, literally anything, can make a difference. You don't need to write a novel. Just something.

Oh, and while you're journaling, you'll see the current moon phase. The moon is calming. That's the vibe.

If you're curious, here's what my original sketch looked like:

<img width="550" height="550" alt="app_inspo!" src="https://github.com/user-attachments/assets/4016faaa-1482-4d7c-9828-dc2c727e9674" />

---

## Repo Setup

- [X] Instructor (`barrycumbie`) added as collaborator

## App Idea

Lunary is a daily journal web app. One entry per day. You can reflect on past entries and see the moon's current phase while you write. The focus is simplicity and mental well-being, no pressure, just a calm space to write.

### Target Users
---

- Anyone looking for a simple, low-pressure journaling habit
- Students, professionals, or anyone who wants a moment to reflect
- People who like the moon (hey, it's a thing)

### Features
---

**Current Features:**
- One journal entry per day (CRUD)
- View past entries
- Live moon phase display (FreeAstroAPI)
- Deployed on GCP (production) and Render (dev)
- CI/CD with GitHub Actions

*...new features coming soon... described below...*

### Tech Stack
---

| Layer | Tech |
|-------|------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | Firebase (Google) |
| Auth | JWT (JSON Web Tokens) |
| Frontend | Bootstrap 5, jQuery, normalize.css |
| API | FreeAstroAPI (Moon Phase) |
| CI/CD | GitHub Actions |
| Production | Google Cloud Platform |
| Development | Render |
| Process Manager | PM2 |
| Reverse Proxy | Nginx |

---

## Product Backlog

### Selected Capability Boxes (Pathway 1: Clean Upgrade)

> 7 boxes × 10 pts = 70 pts (Capability) + 40 pts (Core) = **110 pts**

| # | Box | Points |
|---|-----|--------|
| 1 | Advanced Architecture | 10 |
| 2 | Authentication Upgrade | 10 |
| 3 | Database Upgrade | 10 |
| 4 | UI / UX Design Improvement | 10 |
| 5 | Deployment Guide / DevOps Write-Up | 10 |
| 6 | Debug Case Study | 10 |
| 7 | Search Feature | 10 |

### Issues (Epics & Tasks)

#### 🏗️ Epic 1: Advanced Architecture
- [ ] Refactor project into `/routes`, `/controllers`, `/models`, `/middleware` and update `app.mjs` to use modular structure
- [ ] Set up middleware for auth checks and error handling

#### 🔐 Epic 2: Authentication Upgrade
- [ ] Build registration and login system (endpoints + UI)
- [ ] Implement JWT tokens, auth middleware, and bcrypt password hashing

#### 🗄️ Epic 3: Database Upgrade (Firebase)
- [ ] Set up Firebase project, configure credentials, and create Firestore collections
- [ ] Migrate existing data calls to Firebase SDK and tie entries to authenticated users

#### 🎨 Epic 4: UI / UX Design Improvement
- [ ] Redesign layout and navigation with Bootstrap 5 (responsive, clean hierarchy)
- [ ] Style auth pages, forms, and journal views consistently

#### 📘 Epic 5: Deployment Guide / DevOps Write-Up
- [ ] Document full deployment process (GCP setup, Nginx, PM2, env variables)
- [ ] Document GitHub Actions CI/CD pipeline

#### 🐛 Epic 6: Debug Case Study
- [ ] Write up a real bug: what broke, why, how it was fixed (with evidence)

#### 🔍 Epic 7: Search Feature
- [ ] Add search bar UI and backend search endpoint
- [ ] Handle filtering, display, and edge cases

---

## Milestones

| Milestone | Target Date | What's Included |
|-----------|-------------|-----------------|
| 📌 **Proposal Submitted** | April 2 | README proposal, repo setup, backlog created, instructor added |
| 🏗️ **Architecture Refactor** | April 8 | Modern Node structure (`/routes`, `/controllers`, `/models`, `/middleware`) |
| 🗄️ **Firebase Integration** | April 12 | Firebase setup, Firestore collections, CRUD working against Firebase |
| 🔐 **Auth System Live** | April 14 | Registration, login, JWT, protected routes, bcrypt |
| 🎨 **UI/UX Overhaul** | April 17 | Bootstrap redesign, responsive layout, polished forms and nav |
| 🔍 **Search Feature** | April 20 | Search bar, backend query, filtered results |
| 📘 **Docs & Debug Write-Up** | April 22 | Deployment guide, debug case study, developer notebook entries |
| 🎤 **Mini-Presentation Ready** | April 23 | Everything deployed, documented, and ready to present |

---

## Access

- [X] Collaborator repo access: `barrycumbie` added
- [ ] GCP SSH access: `student-key` — configuring shortly

---

## Deployment

- **Production:** https://lunary.barrycumbie.com/
- **Development:** https://dev-refactored-enigma-devops.onrender.com/

---

### Thanks for stopping by, Lunary is about to get a whole lot better. 🌙
