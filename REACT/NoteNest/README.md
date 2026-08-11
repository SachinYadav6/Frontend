# 📝 NoteNest

> A modern, simple, and responsive note-taking application built with React.

**NoteNest** is a frontend note management application that helps users create, organize, search, edit, delete, and pin their notes with ease.

The application provides a clean and responsive interface with **Light/Dark mode** and uses the browser's **localStorage** to persist notes and user preferences without requiring an external database.

---

## ✨ Features

* ➕ **Create Notes** — Add notes with a title, content, and category.
* ✏️ **Edit Notes** — Update existing note details whenever needed.
* 🗑️ **Delete Notes** — Permanently remove notes from the application and local storage.
* 🔍 **Search Notes** — Search notes by title or content with case-insensitive matching.
* 🏷️ **Category Filter** — Organize and filter notes by category.
* 📌 **Pin Notes** — Keep important notes at the top of the list.
* 🌙 **Light/Dark Mode** — Switch between light and dark themes.
* 💾 **Persistent Storage** — Notes and theme preferences are saved using `localStorage`.
* 📅 **Date & Time Tracking** — Automatically tracks created and updated timestamps.
* 📭 **Empty States** — Displays helpful feedback when there are no notes or no search results.
* 📱 **Responsive Design** — Works across desktop, tablet, and mobile screen sizes.

---

## 📌 About The Project

NoteNest was built as a practical React frontend project focused on creating a simple and user-friendly note-taking experience.

Users can create notes with a title, content, and category. Once created, notes can be searched, filtered, edited, deleted, or pinned for quick access.

The application also supports theme switching and automatically saves application data in the browser using `localStorage`.

---

## 🛠️ Technologies Used

### Frontend

* React 18
* JavaScript (ES6+)
* HTML5
* CSS3

### Development Tools

* Vite
* ESLint

### Storage

* Browser `localStorage`

---

## 📂 Project Structure

```text
NoteNest/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Categoryfilter.jsx
│   │   ├── EmptyState.jsx
│   │   ├── Navbar.jsx
│   │   ├── Notecard.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NoteList.jsx
│   │   ├── Searchbar.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── hooks/
│   │   └── useNotes.js
│   │
│   ├── Services/
│   │   ├── dataServices.js
│   │   └── storageServices.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run NoteNest locally.

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd NoteNest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

---

## 💾 Data Persistence

NoteNest uses browser `localStorage` instead of an external database.

The application stores:

* Notes
* Categories through note data
* Pin status
* Theme preference
* Created and updated timestamps

Because the data is stored locally, notes remain available after refreshing or restarting the browser on the same device and origin.

---

## 🎯 Current Scope

NoteNest is currently a **frontend-only application**.

There is:

* No external database
* No backend server
* No user authentication
* No cloud synchronization

All application data is managed locally within the browser.

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🔐 User authentication
* ☁️ Cloud data synchronization
* 🗄️ Backend/database integration
* 📤 Export and import notes
* 🏷️ Custom category management
* 🔔 Reminders
* 📱 PWA support
* 🔄 Cross-device synchronization

---

## 📄 License

This project is created for learning and portfolio purposes.
