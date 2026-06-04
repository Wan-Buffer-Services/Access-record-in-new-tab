# Access Record in New Tab — Odoo Module

> **Author:** Wan Buffer Services  
> **Versions:** 17.0.1.0.0 | 18.0.1.0.0 | 19.0.1.0.0  
> **Category:** Productivity  
> **License:** OPL-1  
> **Website:** [https://wanbuffer.com](https://wanbuffer.com)  
> **Support:** support@wanbuffer.com | 📞 +91 9638442270

---

## 📖 Overview

**Access Record in New Tab** adds a smart **right-click context menu** to Odoo's List and Kanban views. Users can open any record in a new browser tab or instantly copy its direct URL — all without leaving the current view.

Compatible with **Odoo 17, 18, and 19**.

---

## ✨ Features

- 🖱️ **Right-click context menu** on any List or Kanban record
- 🚀 **Open in New Tab** — opens the selected record in a separate browser tab
- 🔗 **Copy Record Link** — copies the direct URL of the record to clipboard
- 📌 **Non-disruptive** — the original List/Kanban view stays open
- ⌨️ **Hold Shift + Right-Click** to access the browser's native context menu anytime
- ⚡ **Frontend-only** — no Python backend changes, zero performance impact

---

## 🛠️ Technical Details

| Field        | Value                                 |
|--------------|---------------------------------------|
| Module Name  | `wb_access_record_in_new_tab`         |
| Odoo Versions | 17.0 / 18.0 / 19.0                  |
| Type         | Frontend (JS/SCSS only)               |
| Depends      | `web`                                 |
| Application  | No                                    |
| License      | OPL-1                                 |

### Assets Loaded

```
static/src/scss/context_menu.scss
static/src/js/context_menu.js
static/src/js/list_renderer_patch.js
static/src/js/kanban_renderer_patch.js
```

---

## 🔄 Compatibility

| Odoo Version | Branch / Tag    | Status     |
|---|---|---|
| 19.0         | `19.0`          | ✅ Supported |
| 18.0         | `18.0`          | ✅ Supported |
| 17.0         | `17.0`          | ✅ Supported |

> ⚠️ Use the correct branch for your Odoo version. Each branch has the correct version number set in `__manifest__.py`.

---

## 📦 Installation

### Step 1 — Clone the correct branch

**For Odoo 19:**
```bash
git clone -b 19.0 https://github.com/your-org/wb_access_record_in_new_tab.git
```

**For Odoo 18:**
```bash
git clone -b 18.0 https://github.com/your-org/wb_access_record_in_new_tab.git
```

**For Odoo 17:**
```bash
git clone -b 17.0 https://github.com/your-org/wb_access_record_in_new_tab.git
```

### Step 2 — Add to Odoo

1. Copy the `wb_access_record_in_new_tab` folder to your Odoo `custom_addons` directory.
2. Restart the Odoo server:
   ```bash
   sudo systemctl restart odoo
   # or
   python odoo-bin -c odoo.conf
   ```
3. Go to **Settings → Apps** → Enable **Developer Mode**.
4. Click **Update App List**.
5. Search for **"Access Record in New Tab"** and click **Install**.

---

## 🔧 Version-Specific Manifest

Each version branch has its own `__manifest__.py` with the correct version number:

**Odoo 17 (`17.0` branch):**
```python
'version': '17.0.1.0.0',
```

**Odoo 18 (`18.0` branch):**
```python
'version': '18.0.1.0.0',
```

**Odoo 19 (`19.0` branch):**
```python
'version': '19.0.1.0.0',
```

---

## 🚀 Usage

After installation:

1. Navigate to any **List view** (e.g., Contacts, Sales Orders, etc.) or **Kanban view**.
2. **Right-click** on any record row or card.
3. A context menu will appear with two options:
   - **Open in New Tab** — opens the record in a new browser tab.
   - **Copy Link** — copies the record URL to your clipboard.

> 💡 **Tip:** Press **Shift + Right-Click** to access the browser's default context menu.

---

## 📁 Module Structure

```
wb_access_record_in_new_tab/
├── __init__.py
├── __manifest__.py
├── README.md
└── static/
    ├── description/
    │   ├── index.html
    │   ├── icon.png
    │   └── background.png
    └── src/
        ├── js/
        │   ├── context_menu.js
        │   ├── list_renderer_patch.js
        │   └── kanban_renderer_patch.js
        └── scss/
            └── context_menu.scss
```

---

## 📝 Changelog

### v19.0.1.0.0 / v18.0.1.0.0 / v17.0.1.0.0 (Initial Release)
- ✅ Added right-click context menu for List view
- ✅ Added right-click context menu for Kanban view
- ✅ Open record in new tab functionality
- ✅ Copy record URL to clipboard functionality
- ✅ Shift + Right-Click to bypass custom menu
- ✅ Compatible with Odoo 17, 18, and 19

---

## 🤝 Support

For any issues or feature requests, please contact:

- 📧 **Email:** support@wanbuffer.com
- 🌐 **Website:** [https://wanbuffer.com](https://wanbuffer.com)
- 📞 **Phone:** +91 9638442270

---

## 📄 License

This module is licensed under [OPL-1 (Odoo Proprietary License v1.0)](https://www.odoo.com/documentation/17.0/legal/licenses.html#odoo-apps).

© Wan Buffer Services — All rights reserved.
