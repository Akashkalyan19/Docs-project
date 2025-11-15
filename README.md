# 📄 Docs Clone – Real-Time Collaborative Document Editor

A Google Docs–style web application built with **Next.js 14 (App Router)**, **Tiptap**, **Liveblocks**, **Convex**, and **Clerk**.
Supports rich-text editing, real-time collaboration, authentication, presence indicators, and autosaving.

---

## 🚀 Features

### ✨ Core Features

* **Rich Text Editing**
  Full WYSIWYG editor powered by **Tiptap** with formatting tools:

  * Bold / Italic / Underline
  * Headings, lists, code blocks
  * Images, tables, task lists
  * Text alignment, colors, highlights, and more

* **Real-Time Collaboration**

  * Live editing powered by **Liveblocks**
  * Multiple users can edit the same document simultaneously
  * Real-time cursor positions & user presence
  * Collaborative conflict-free synchronization

* **Document Management**

  * Create new documents
  * Dashboard to browse all documents
  * Rename, delete, and open documents
  * Duplicate templates

* **Authentication**

  * Secure login/signup using **Clerk**
  * All documents are private to the logged-in user

* **Backend & Persistence**

  * Built using **Convex** serverless backend
  * Server actions & queries for secure storage
  * Autosaving system synced with document updates

* **Modern UI/UX**

  * Next.js App Router
  * TailwindCSS & shadcn/ui
  * Lucide icons
  * Smooth UI transitions and clean layout

---

## 🧱 Tech Stack

### Frontend

* **Next.js 14**
* **React**
* **Tiptap editor**
* **TailwindCSS**
* **shadcn/ui**
* **Lucide React**

### Backend / Real-Time

* **Liveblocks** – Real-time collaboration & presence
* **Convex** – Database + serverless functions
* **Clerk** – Authentication and authorization

### Dev Tools

* TypeScript
* Zustand (editor store)
* ESLint & Prettier

---

## 📦 Project Structure

```
src/
 ├── app/
 │    ├── (home)/                → Dashboard pages
 │    ├── documents/[id]/        → Document editing routes
 │    │       ├── page.tsx       → Server-side loader for document
 │    │       ├── room.tsx       → Liveblocks room provider
 │    │       ├── editor.tsx     → Tiptap editor setup
 │    │       ├── toolbar.tsx    → Formatting toolbar
 │    │       ├── avatars.tsx    → Presence indicators
 │    │       └── actions.ts     → Document server actions
 │    └── api/liveblocks-auth/   → Server route for Liveblocks auth
 │
 ├── components/                 → Reusable UI components
 ├── store/use-editor-store.ts   → Zustand store for editor instance
 ├── lib/                        → Utility functions
 └── styles/globals.css          → Global styling
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Akashkalyan19/Docs-project.git
cd Docs-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local`

Add environment variables for:

```
NEXT_PUBLIC_CONVEX_URL=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

### 4. Start Development Server

```bash
npm run dev
```

App will run on:

```
http://localhost:3000
```

---

## 🧠 How It Works (Short Explanation)

### 🖋 Editor

Tiptap creates a ProseMirror-based editor instance with custom extensions.
`editor.tsx` initializes the editor and syncs content on updates.

### 🔄 Real-Time Sync

Liveblocks:

* Creates a unique “room” per document
* Syncs editor content across all connected clients
* Tracks presence (cursor, name, avatar)

### 🔐 Auth

Clerk secures routes and ensures each user only accesses their own documents.

### 🪣 Backend

Convex handles:

* Document creation
* Reading & writing content
* Permission rules
* Metadata storage

---

## 📈 Future Improvements

* Version history & snapshots
* Commenting system
* Shareable documents with permissions
* Offline editing support
* Export as PDF/Markdown

---

## 🙏 Acknowledgements

Inspired by various real-time editor tutorials and the Tiptap, Liveblocks, Convex, and Clerk documentation.

---

## 📜 License

This project is for learning purposes. You may modify or extend it freely.
