
export default function SearchBar({ search, onSearch }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">⌕</span>

      <input
        type="search"
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search your notes..."
        aria-label="Search notes"
      />
    </div>
  )
}

