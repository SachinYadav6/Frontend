import { useEffect, useState } from 'react'

const initialForm = {
  title: '',
  content: '',
  category: 'Personal',
}

const defaultCategories = [
  'Personal',
  'Work',
  'Ideas',
  'Study',
  'Todo',
]

export default function NoteForm({
  note,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (note) {
      setForm({
        title: note.title,
        content: note.content,
        category: note.category,
      })
    } else {
      setForm(initialForm)
    }
  }, [note])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.title.trim() || !form.content.trim()) {
      return
    }

    onSubmit(form)

    if (!note) {
      setForm(initialForm)
    }
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>{note ? 'Edit Note' : 'Create a Note'}</h2>

        {note && (
          <button
            type="button"
            className="close-button"
            onClick={onCancel}
          >
            ×
          </button>
        )}
      </div>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Note title"
        maxLength={100}
        required
      />

      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write your note here..."
        rows="7"
        required
      />

      <div className="form-footer">
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          {defaultCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="form-actions">
          {note && (
            <button
              type="button"
              className="secondary-button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}

          <button type="submit" className="primary-button">
            {note ? 'Save Changes' : 'Add Note'}
          </button>
        </div>
      </div>
    </form>
  )
}

