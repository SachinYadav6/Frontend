
export default function EmptyState({ isSearching, onAdd }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">📝</div>

      <h2>
        {isSearching ? 'No notes found' : 'Your nest is empty'}
      </h2>

      <p>
        {isSearching
          ? 'Try a different search or category.'
          : 'Create your first note and keep your thoughts organized.'}
      </p>

      {!isSearching && (
        <button className="primary-button" onClick={onAdd}>
          + Create Your First Note
        </button>
      )}
    </div>
  )
}

