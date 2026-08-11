import { formatDate } from '../Services/dataServices'

export default function NoteCard({
  note,
  onEdit,
  onDelete,
  onPin,
}) {
  return (
    <article className={`note-card ${note.pinned ? 'pinned' : ''}`}>
      <div className="note-card-top">
        <span className="note-category">
          {note.category}
        </span>

        <button
          type="button"
          className={`pin-button ${note.pinned ? 'active' : ''}`}
          onClick={() => onPin(note.id)}
          aria-label={
            note.pinned ? 'Unpin note' : 'Pin note'
          }
        >
          {note.pinned ? '📌' : '📍'}
        </button>
      </div>

      <h3>{note.title}</h3>

      <p className="note-content">
        {note.content}
      </p>

      <div className="note-card-bottom">
        <time dateTime={note.updatedAt}>
          {formatDate(note.updatedAt)}
        </time>

        <div className="note-actions">
          <button
            type="button"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>

          <button
            type="button"
            className="delete-button"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

