import { trendingData } from '../../data/articlesData.js'

export default function Trending() {
  return (
    <div className="list">
      {trendingData.map((item) => (
        <a key={item.id} href="#" className="trendingItem">
          <span className="trendingIndex">{String(item.rank).padStart(2, '0')}</span>
          <div>
            <p className="trendingTitle">{item.title}</p>
            <p className="trendingSubtitle">{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

