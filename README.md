# Web-Dev-
# Passo in Italia — Italian-French Patisserie

A responsive, multi-page website built for **Passo in Italia** (formerly Hero Bakery), an authentic Italian-French patisserie located in Sea Point, Cape Town.

---

##  Project Overview

**Passo in Italia** ("a step in Italy") brings authentic cornetti, Sicilian cannoli, traditional sfogliatelle, tiramisu, and custom celebration cakes to South Africa. Founded by a South African pastry chef trained in Italy, the business blends classic Italian technique with traditional French patisserie using high-quality, locally sourced ingredients.

This project was developed as part of a Web Development assessment over a 4-week timeline, fulfilling all requirements for layout structure, asset management, styling, client-side interactivity, form validation, and SEO best practices.

---

##  Project Structure & Tech Stack

### Tech Stack
* **HTML5:** Semantic markup structured for accessibility and search engine optimization.
* **CSS3:** Custom responsive layout (`css/style.css`) using CSS Grid, Flexbox, media queries, and a cohesive warm color palette.
* **JavaScript (Vanilla JS):** Modular client-side interactivity (`js/script.js`), including mobile navigation drawer toggles and form validation feedback.

### Directory Structure
```text
Passo-in-italia/
│
├── index.html          # Homepage with hero section & brand introduction
├── about.html          # Our Story, founder background, mission & vision
├── products.html       # Product gallery (Cornetti, Cannoli, Tiramisu, etc.)
├── enquiry.html        # Custom cake and event enquiry form
├── contact.html        # Location details (Sea Point & Kloof Street) & map embed
│
├── css/
│   └── style.css       # Main stylesheet containing all custom styling
│
├── js/
│   └── script.js      # Client-side JavaScript functionality
│
├── images/             # Standardized image asset directory
│   ├── passo-in-italia.jpg
│   ├── founder-400.jpg
│   ├── cornetti-400.jpg
│   ├── cannoli-400.jpg
│   ├── tiramisu.jpg
│   ├── sfogliatelle-375.jpg
│   └── custom-cake-400.jpg
│
└── README.md           # Project documentation
```

---

##  Key Features & Functionality

1. **Multi-Page Responsive Navigation:**
   * Clean navigation bar linking all pages with responsive CSS layout adapting seamlessly across mobile, tablet, and desktop screens.

2. **SEO Optimization & Meta Tagging:**
   * Open Graph (`og:title`, `og:description`, `og:type`) tags included in all HTML heads.
   * Descriptive meta tags (`description`, `keywords`, `viewport`) configured across all pages.

3. **Interactive Form Validation (JavaScript):**
   * Client-side validation handling on the Enquiry and Contact forms to give immediate user feedback upon submission.

4. **Asset & Case-Sensitivity Standards:**
   * Organized asset management using standardized relative path names (`images/...`) with hyphens to ensure cross-platform compatibility on Linux/cloud production servers.

---

##  How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anam-roid/Web-Dev-part-1.git
   ```
2. **Navigate into the folder:**
   ```bash
   cd Web-Dev-part-1
   ```
3. **Open with Live Server:**
   * Right-click `index.html` in VS Code and select **Open with Live Server**, or simply double-click `index.html` to open it in your browser.

---

## License & References

* **Developer:** Anam
* **Repository:** [GitHub Repository](https://github.com/Anam-roid/Web-Dev-part-1/blob/main/README.md)
* **Images:** Sourced for educational presentation purposes.
* &copy; 2026 Passo in Italia. All rights reserved.
