
import { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import EmptyState from './components/EmptyState'
import useNotes from './hooks/useNotes'

export default function App() {
  const [editingNote, setEditingNote] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const {
    filteredNotes,
    categories,
    search,
    setSearch,
    category,
    setCategory,
    theme,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    toggleTheme,
  } = useNotes()

  const handleSubmit = (formData) => {
    if (editingNote) {
      updateNote(editingNote.id, formData)
      setEditingNote(null)
    } else {
      addNote(formData)
    }

    setShowForm(false)
  }

  const handleEdit = (note) => {
    setEditingNote(note)
    setShowForm(true)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleCancel = () => {
    setEditingNote(null)
    setShowForm(false)
  }

  const handleAdd = () => {
    setEditingNote(null)
    setShowForm(true)
  }

  const isSearching = Boolean(search.trim()) || category !== 'All'

  return (
    <div className="app">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">WELCOME TO YOUR NOTE SPACE</p>
            <h2>Capture ideas.<br />Keep them close.</h2>
            <p className="hero-text">
              A simple and beautiful place for your thoughts,
              ideas and everyday notes.
            </p>
          </div>

          <button className="primary-button add-button" onClick={handleAdd}>
            + Add Note
          </button>
        </section>

        <section className="toolbar">
          <SearchBar
            search={search}
            onSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            activeCategory={category}
            onChange={setCategory}
          />
        </section>

        {showForm && (
          <NoteForm
            note={editingNote}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}

        <section className="notes-section">
          <div className="section-heading">
            <div>
              <h2>Your Notes</h2>
              <p>
                {filteredNotes.length}{' '}
                {filteredNotes.length === 1 ? 'note' : 'notes'}
              </p>
            </div>
          </div>

          {filteredNotes.length > 0 ? (
            <NoteList
              notes={filteredNotes}
              onEdit={handleEdit}
              onDelete={deleteNote}
              onPin={togglePin}
            />
          ) : (
            <EmptyState
              isSearching={isSearching}
              onAdd={handleAdd}
            />
          )}
        </section>
      </main>
    </div>
  )
}

