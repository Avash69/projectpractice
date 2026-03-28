import Card from '../../components/ui/Card.jsx'
import Image from '../../components/ui/Image.jsx'
import Badge from '../../components/ui/Badge.jsx'

export default function ArticleCard({ item }) {
  return (
    <Card as="a" href="#" style={{ borderRadius: 18 }}>
      <div className="thumb" style={{ height: 160 }}>
        <Image src={item.image} alt={item.title} />
      </div>
      <div className="cardBody">
        <Badge>{item.badge}</Badge>
        <p className="articleTitle" style={{ marginTop: 10 }}>
          {item.title}
        </p>
        <p className="articleExcerpt">{item.excerpt}</p>
      </div>
    </Card>
  )
}

