import Card from '../../components/ui/Card.jsx'
import Image from '../../components/ui/Image.jsx'
import Badge from '../../components/ui/Badge.jsx'
import BannerCard from './BannerCard.jsx'
import { featuredBannerData } from '../../data/articlesData.js'

export default function FeaturedBanner() {
  const [main, ...side] = featuredBannerData

  return (
    <Card className="surface" style={{ padding: 16 }}>
      <div className="bannerGrid">
        <div className="bannerMain">
          <Image
            src={main.image}
            alt={main.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="bannerOverlay">
            <Badge>{main.badge}</Badge>
            <h3 className="bannerHeadline">{main.title}</h3>
            <p className="bannerByline">{main.subtitle}</p>
          </div>
        </div>

        <div className="bannerSide">
          {side.map((item) => (
            <BannerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Card>
  )
}

