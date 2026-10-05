# SVB Solutions — AI-Powered Automation for Small & Medium Businesses

> **“Affordable AI automation that saves time, cuts costs, and boosts small business efficiency.”**

---

## 🚀 Overview

**SVB Solutions** is a modern, affordable AI-powered automation platform engineered specifically for small and medium-sized businesses. It simplifies business operations, automates repetitive clerical work, analyzes scattered data, reduces operational expenses, and empowers teams to make faster, smarter decisions.

---

## ✨ Features & Architecture

* **AI-Powered Automation**: Automates repetitive workflows, document ingestion, and invoice processing.
* **Intelligent Data Analysis**: Consolidates business performance and sales trends into executive digests.
* **Workflow Routing**: Eliminates cross-department handoff bottlenecks.
* **Interactive SMB Savings Calculator**: Live client-side time & cost savings estimator.
* **Interactive Workflow Sandbox**: Industry-specific automation simulator for Retail, Professional Services, Healthcare, and Logistics.
* **Luxury Obsidian & Brushed Gold UI**: Custom-tailored design system matching the official SVB Solutions logo.
* **Mobile-First & Fully Responsive**: Optimized for smartphones, tablets, laptops, and ultra-wide displays.
* **Fast & Lightweight**: Built with standard vanilla HTML5, CSS3, and JavaScript with zero heavy framework bloat.

---

## 📁 Repository Structure

```
├── index.html                  # Main SaaS landing page & sections
├── css/
│   └── styles.css              # Obsidian & Gold design system, animations & responsive grid
├── js/
│   └── main.js                 # Interactive workflows, calculator, modals, and validation
└── assets/
    └── images/
        ├── favicon.png         # Browser tab icon
        ├── svb_icon.png        # Official gold monogram emblem
        ├── svb_logo_card.png   # High-resolution brand logo card
        └── platform_mockup.jpg # AI automation command dashboard
```

---

## 🌐 Deploying to Vercel

### Option 1: Deploy via Vercel Web Dashboard (Recommended & Easiest)
1. Push your repository to **GitHub** or **GitLab** / **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your **`svb-solutions`** repository.
5. Keep **Framework Preset** as *Other* (Root Directory `./`).
6. Click **Deploy**. Your site will be live instantly with global CDN & SSL!

### Option 2: Deploy via Vercel CLI
Run the following in your terminal:
```bash
npx vercel
```
Follow the interactive prompts:
* `Set up and deploy?` **y**
* `Which scope?` Select your account
* `Link to existing project?` **N**
* `What's your project's name?` **svb-solutions**
* `In which directory is your code located?` **./**

To deploy directly to production:
```bash
npx vercel --prod
```

---

## 🌐 Deploying to GitHub Pages (Alternative)

1. Create a new repository on GitHub (e.g. `svb-solutions`).
2. Push this repository:
   ```bash
   git remote add origin https://github.com/246m1a4225-lab/svb-solutions.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   * Go to **Settings** > **Pages**
   * Under **Branch**, select `main` and folder `/ (root)`
   * Click **Save**
4. Your live website URL will be:
   `https://246m1a4225-lab.github.io/svb-solutions/`

---

## 💻 Local Development

Run with Python's built-in server:
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

---

© 2026 SVB Solutions. All rights reserved.
