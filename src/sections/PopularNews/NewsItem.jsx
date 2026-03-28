import Image from '../../components/ui/Image.jsx'

export default function NewsItem({ item }) {
  return (
    <a className="newsItem" href="#">
      <div className="thumb" style={{ width: 78, height: 54 }}>
        <Image src={item.image} alt={item.title} />
      </div>
      <div className="newsMeta">
        <div style={{ display: 'flex', gap: '6px', marginBottom: 6, flexWrap: 'wrap' }}>
          {item.tags?.map((tag) => (
            <span key={tag} className={`chip chip-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="newsTitle">{item.title}</p>
        <p className="newsSub">{item.subtitle}</p>
      </div>
    </a>
  )
}

