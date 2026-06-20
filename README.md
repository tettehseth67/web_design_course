# Seventh-Day Theocratic World Congregation Portal (SDTWC)

A high-performance, responsive, pure static multi-page architecture engineered using **Eleventy (11ty)**, **Nunjucks template layouts**, and **Bootstrap 5 utility tokens**. This platform maps out congregational directorates, administrative control suites, and treasury tracking models while remaining entirely free of client-side JavaScript or inline CSS style rules.

---

## 📂 Project Architecture Blueprint

```text
├── .gitignore                  # Explicit Git tracking blocks (wipes node_modules & public)
├── netlify.toml                # Serverless deployment configuration and publish paths
├── package.json                # Production dependencies, npx binaries, and compilation pipelines
├── README.md                   # Core system layout manual documentation
└── src/                        # Main development compilation workspace source
    ├── 404.html                # Broken URL system redirect fault handler node
    ├── connect.html            # Communications registry and central messaging overview
    ├── education.html          # Academic complex overview and school structure gateways
    ├── index.html              # Worship Center home node & Sabbath calculated countdown anchor
    ├── robots.njk              # Real-time search engine spider crawl-exclusion schema definitions
    ├── sitemap.njk             # Dynamic Nunjucks collection loop compiling sitemap xml paths
    ├── admin/                  # STANDALONE ISOLATED ADMINISTRATION SUITE
    │   ├── activity-logs.html  # Security audit ledger tracking system chronological events
    │   ├── broadcast-registry.html # Media directorate repository tracking liturgy script paths
    │   ├── create-user.html    # System provisioning form wizard for adding records manually
    │   ├── financial-entry.html # Manual treasury logging form for tithes and contributions
    │   ├── financial-registry.html # Treasury ledger metrics showing contribution tracking matrices
    │   ├── groups-detail.html  # Detailed division permissions view for active departments
    │   ├── groups.html         # Active functional subdivisions table and modal dialog box triggers
    │   ├── index.html          # Master console directory board featuring assembly registries
    │   ├── login.html          # App-style clean gateway wall (No navigation headers/footers)
    │   └── access-denied.html  # Code 403 authorization fault static warning buffer screen
    ├── assets/                 # PRODUCTION ASSET STORAGE ARRAYS
    │   ├── docs/               # Downloadable manuscript PDFs and theological charters
    │   └── images/             # Graphic assets, congregation logos, and favicon suites
    ├── connect/                # MEMBER PORTAL SUB-DIRECTORY NODES
    │   ├── dashboard.html      # Static member dashboard workspace panel
    │   ├── index.html          # Public connect hub overview
    │   ├── login.html          # Member authentication form layout
    │   └── profile.html        # Registry data verification sheet mapping alignments
    ├── css/                    # CORE STYLE SHEETS (PASSTHROUGH MAPS)
    │   ├── bootstrap.min.css   # Compiled Bootstrap 5 framework minified library
    │   └── custom.css          # Design token definitions, transitions, and app card animations
    ├── education/              # EDUCATIONAL DIRECTORATE SUB-DIRECTORY NODES
    │   ├── admissions-policy.html # Intake criteria rules registry with download assets
    │   ├── basic-school.html   # Primary curriculum metrics and daily schedule grid table
    │   ├── faculty.html        # Academic leadership profiles and instructor directory cards
    │   └── term-schedule.html  # 2026 terminal calendar matrix and festival closure windows
    ├── global-mission/         # GLOBAL MISSION DIRECTORATE SUB-DIRECTORY NODES
    │   ├── doctrine.html       # Manuscript research library mapping downloadable pdf resources
    │   ├── hospital-intake.html # Clinical registration checklists and inpatient triage models
    │   ├── hospital.html       # Sufficient Grace Hospital clinical operations overview
    │   ├── index.html          # Missionary operations blueprint core
    │   ├── lunar-registry.html # 2026 calculated new moon matrix sunset transition windows
    │   ├── liturgy.html        # Sabbath chronological order of service and scriptural readings
    │   ├── outreach.html       # Mobile medical camp timelines and dietary health frameworks
    │   └── youth-women.html    # Demographic wings fellowship weekly assembly tracking logs
    └── _includes/              # MASTER LAYOUT PARTIAL TEMPLATE MODULES
        ├── admin-base.html     # Isolated dark administrative wrapper shell (No public footers)
        ├── admin-login-base.html # Ultra-minimal layout sheet hosting login forms exclusively
        ├── base.html           # Universal global framework master baseline template
        ├── footer.html         # Clean corporate metadata registry layout footer partial
        └── navigation.html     # Premium left-aligned navbar utilizing conditional active highlights
```

---

## 🚀 Local Development Operations Manual

### 1. Installation Requirements

Clone your verified repository footprint down to your local developer workstation and configure node dependencies natively via npm binaries:

```bash
npm install
```

### 2. Run Local Development Server

Execute the active Nunjucks watchers and initialize the live-reload development stream:

```bash
npm start
```

Your local server environment will mount instantly inside your browser tab at: **`http://localhost:8080`**.

### 3. Production Compilation Evaluation

Simulate exactly how cloud networks process your file system pathways by running a standalone compilation pass locally:

```bash
npm run build
```

---

## 🌐 Production Cloud Deployment Protocols

This system uses a fully integrated, zero-overhead continuous deployment workflow linked with **Netlify**.

### 🏗️ 1. Automatic GitHub Deployment Engine

Every single code adjustment committed to your repository automatically triggers compilation images on Netlify via the default parameters mapped inside your root **`netlify.toml`** file:

* **Build Execution Target Command**: `npm run build`
* **Publish Deliverable Directory Folder**: `public`

```bash
git add .
git commit -m "docs: implement comprehensive system manual readme file"
git push origin main
```

### 🔒 2. Enterprise SEO and Security Exclusion Parameters

* **Sitemap Matrix Loop (`sitemap.xml`)**: Automatically parses all public-facing clean permalinks at build-time to optimize global indexing.
* **Crawler Access Blocking Rules (`robots.txt`)**: Explicitly blocks indexing spiders from crawling internal administration view nodes (`/admin/*`) or private user account dashboards (`/connect/*`) to protect membership profiling data logs.

---

## ⚡ Core System Performance Features

* **Zero Client Scripting Footprint**: Fully interactive actions—including the **Create Group**, **Delete Member**, and **Log Stream** dialog windows—run purely on **Bootstrap 5 data attributes** with no custom JavaScript logic overhead.
* **Separation of Style Concerns**: Inline styling attributes are fully stripped from your markups. Layout metrics, cubic-bezier transition curves, and dark console cards are handled explicitly within `src/css/custom.css`.
* **Instant Media Performance**: Built-in native `loading="lazy"` attributes and fluid-image-frame background styles protect mobile device networks from data lag during layout shifts.
