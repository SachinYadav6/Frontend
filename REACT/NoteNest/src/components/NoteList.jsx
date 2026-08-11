
import NoteCard from './NoteCard'

export default function NoteList({
  notes,
  onEdit,
  onDelete,
  onPin,
}) {
  return (
    <section className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}
    </section>
  )
}

