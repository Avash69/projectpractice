import Card from '../../components/ui/Card.jsx'
import Image from '../../components/ui/Image.jsx'
import Badge from '../../components/ui/Badge.jsx'

export default function BannerCard({ item }) {
  return (
    <Card style={{ borderRadius: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12 }}>
        <div className="thumb" style={{ height: 92 }}>
          <Image src={item.image} alt={item.title} />
        </div>
        <div className="cardBody" style={{ padding: 12 }}>
          <Badge>{item.badge}</Badge>
          <p style={{ margin: '8px 0 0', fontWeight: 900, color: 'var(--text-strong)', fontSize: 13 }}>
            {item.title}
          </p>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)', fontSize: 12 }}>{item.subtitle}</p>
        </div>
      </div>
    </Card>
  )
}

