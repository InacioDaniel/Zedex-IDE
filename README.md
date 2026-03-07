# ⚡ ZEDEX IDE

<div align="center">

![ZEDEX IDE](https://pollinations.ai/p/ZEDEX+IDE+logo+code+editor+dark+minimal+tech?width=800&height=200&model=flux&nologo=true)

### AI-first browser IDE powered by [pollinations.ai](https://pollinations.ai)

[![Built With pollinations.ai](https://img.shields.io/badge/Built%20With-pollinations.ai-blue?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyeiIvPjwvc3ZnPg==)](https://pollinations.ai)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco%200.47-brightgreen?style=flat-square)](https://microsoft.github.io/monaco-editor/)
[![Themes](https://img.shields.io/badge/Themes-6-purple?style=flat-square)](#themes)
[![Lines](https://img.shields.io/badge/AI%20Generation-10k%2B%20lines-orange?style=flat-square)](#ai-generation)

</div>

---

## 📌 Overview

**ZEDEX IDE** is a fully-featured browser-based code editor with an integrated AI assistant. It runs entirely in the browser — no installation, no server, no setup.

Built on the **Monaco Editor** (the same engine powering Visual Studio Code), with **pollinations.ai** providing free, unlimited AI inference for code generation, editing, and debugging.

---

## ✨ Features

### 🖥 Editor
- **Monaco Editor** — Full VS Code experience in the browser
- Syntax highlighting for 20+ languages (JS, TS, HTML, CSS, Python, Rust, Go, SQL, and more)
- IntelliSense, bracket pair colorization, code guides
- Multi-tab editing with open/close/switch
- Auto-save every 3 seconds
- Persistent filesystem via `localStorage`

### 🤖 AI Assistant (powered by pollinations.ai)
| Mode | Description |
|------|-------------|
| **Chat** | Ask anything — code explanations, snippets, docs |
| **Edit File** | AI rewrites the current file while preserving all existing logic |
| **Generate** | Generates complete files up to **10,000+ lines** |
| **Fix Bugs** | Analyzes errors and returns fully corrected code |

- **Streaming output** — word-by-word real-time generation
- **Auto-apply** — generated code is applied directly to the editor
- **Auto-continuation** — if code hits the limit, continues automatically until complete
- **One-click apply** — apply any AI code block with a single click
- **Context modes**: current file · all files · selected text

### 🎨 Themes (6)
| Theme | Vibe |
|-------|------|
| Dark (Catppuccin) | Soft dark, blue accents |
| Light | Clean white |
| High Contrast | Pure black + cyan |
| Monokai | Classic green/yellow |
| Dracula | Purple/pink dark |
| Nord | Arctic cold blues |

### 📁 File Management
- Create, rename, duplicate, delete files
- Right-click context menu on any file
- All files persisted in `localStorage`
- Import / export ready

### 🌐 Preview
- Live HTML/CSS/JS preview in fullscreen iframe
- Blob URL injection for multi-file projects
- Open preview in new tab
- Auto-save before preview

### ⬛ Terminal
- Timestamped log output (save, AI operations, errors)
- Color-coded: green = success, red = error, white = info
- Persistent through session

---

## 🤖 AI Models (via pollinations.ai)

| Model | Best For |
|-------|----------|
| `openai` | General purpose, fast |
| `openai-large` | Complex tasks, detailed code |
| `openai-fast` | Speed — rapid suggestions |
| `qwen-coder` ✦ | Code-specific, 10k+ generation |
| `mistral` | Lightweight, efficient |
| `llama` | Llama 3.3 — open source |
| `deepseek-reasoning` 🧠 | Deep reasoning, debugging |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save current file |
| `Ctrl + Shift + S` | Save all files |
| `Ctrl + P` | Run Preview |
| `Ctrl + `` ` `` ` | Toggle Terminal |
| `Ctrl + B` | Toggle Sidebar |
| `Ctrl + K` | Focus AI input |
| `Escape` | Close Preview / Cancel |
| `Enter` (in AI input) | Send message |
| `Shift + Enter` | New line in AI input |

---

## 🚀 Getting Started

### Option 1: Direct (no build)
```bash
# Just open the HTML file directly in your browser
open index.html
```

### Option 2: Local server (recommended)
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:3000
```

### Option 3: Deploy to Render.com
1. Create a new **Static Site** on [render.com](https://render.com)
2. Connect your GitHub repo
3. Set environment variable:
   ```
   VITE_POLLINATIONS_API_KEY=your_key_here
   ```
4. Build command: `echo "static"` (no build needed)
5. Publish directory: `.`

---

## 🔑 API Key Configuration

ZEDEX uses **pollinations.ai** as its AI backend. The API key is resolved securely:

```
Priority order:
1. window.__Z_AK         → Render.com env injection
2. <meta name="z-ak">    → SSR injection
3. /api/key endpoint     → Backend proxy
4. No key                → Uses pollinations.ai free tier
```

To set your key on Render:
```
Variable: VITE_POLLINATIONS_API_KEY
Value:     sk_your_key_here
```

In your `render.yaml`:
```yaml
services:
  - type: web
    name: zedex-ide
    env: static
    buildCommand: |
      sed -i "s/__ZENIA_KEY__/$VITE_POLLINATIONS_API_KEY/g" index.html
    staticPublishPath: .
    envVars:
      - key: VITE_POLLINATIONS_API_KEY
        sync: false
```

---

## 📂 Project Structure

```
zedex/
├── index.html          # Main app (self-contained, single file)
└── README.md           # This file
```

The entire IDE is a **single HTML file** — zero dependencies to install, zero build steps.

---

## 🔨 Architecture

```
┌─────────────────────────────────────────────────────┐
│                    ZEDEX IDE                         │
├──────────┬──────────────────────────┬───────────────┤
│ Activity │      Monaco Editor       │  AI Panel     │
│   Bar    │  ┌────────────────────┐  │  ┌──────────┐ │
│          │  │  Tab Bar           │  │  │ Chat     │ │
│  📁 Files│  ├────────────────────┤  │  │ Edit     │ │
│  🔍 Find │  │  Breadcrumb        │  │  │ Generate │ │
│  ⎇ Git   │  ├────────────────────┤  │  │ Fix Bugs │ │
│  🤖 AI   │  │                    │  │  └──────────┘ │
│  ⬛ Term │  │   Code Editor      │  │               │
│          │  │   (Monaco 0.47)    │  │  pollinations │
│          │  │                    │  │     .ai API   │
│          │  ├────────────────────┤  │               │
│          │  │  Terminal          │  │               │
│          │  ├────────────────────┤  │               │
│          │  │  Status Bar        │  │               │
│          └──┴────────────────────┴──┴───────────────┘
└─────────────────────────────────────────────────────┘
```

---

## 🌐 Credits & Acknowledgements

<div align="center">

### Built with ⚡ [pollinations.ai](https://pollinations.ai)

> Free AI inference API powering the code generation engine

[![pollinations.ai](https://pollinations.ai/p/pollinations+ai+logo+badge+white?width=200&height=50&model=flux&nologo=true)](https://pollinations.ai)

| Component | Source |
|-----------|--------|
| **AI Engine** | [pollinations.ai](https://pollinations.ai) — free, open AI inference |
| **Code Editor** | [Monaco Editor](https://microsoft.github.io/monaco-editor/) by Microsoft |
| **Fonts** | JetBrains Mono + Geist via Google Fonts |
| **Themes** | Catppuccin, Monokai, Dracula, Nord color palettes |

</div>

---

## 📜 License

MIT License — free to use, modify and distribute.

```
ZEDEX IDE © 2025
Built with pollinations.ai — https://pollinations.ai
```

---

<div align="center">

**[pollinations.ai](https://pollinations.ai)** · Free AI for everyone

*ZEDEX IDE — Code with AI, in the browser, instantly.*

</div>
