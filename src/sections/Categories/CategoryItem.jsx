export default function CategoryItem({ item }) {
  return (
    <a className="categoryItem" href="#">
      <div className="categoryIcon" aria-hidden="true">
        <img src={item.image} alt={item.label} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span className="categoryLabel">{item.label}</span>
        <span className="categorySub">{item.sub || 'Trending now'}</span>
      </div>
      <span className="categoryIndex">{item.index}</span>
    </a>
  )
}

