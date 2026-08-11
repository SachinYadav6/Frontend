export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}) {
  return (
    <div className="category-list">
      {categories.map((item) => (
        <button
          key={item}
          className={activeCategory === item ? 'active' : ''}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

