
export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-icon">
          N
        </div>

        <div className="brand-content">
          <h1>NoteNest</h1>
          <p>Your thoughts, organized.</p>
        </div>
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={
          theme === 'light'
            ? 'Switch to dark mode'
            : 'Switch to light mode'
        }
      >
        <span className="theme-icon">
          {theme === 'light' ? '🌙' : '☀️'}
        </span>

        <span>
          {theme === 'light' ? 'Dark' : 'Light'}
        </span>
      </button>
    </header>
  )
}

