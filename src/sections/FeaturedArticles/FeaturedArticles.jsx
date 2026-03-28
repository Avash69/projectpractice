import Card from '../../components/ui/Card.jsx'
import Divider from '../../components/common/Divider.jsx'
import SectionTitle from '../../components/common/SectionTitle.jsx'
import ArticleCard from './ArticleCard.jsx'
import { articlesData } from '../../data/articlesData.js'

export default function FeaturedArticles() {
  const handleViewAllArticles = () => {
    console.log('View all articles clicked')
    // Add navigation or filter logic here
  }

  return (
    <Card className="surface" style={{ padding: 16 }}>
      <SectionTitle 
        title="Featured Articles" 
        actionLabel="View all"
        onAction={handleViewAllArticles}
      />
      <Divider />
      <div className="articleGrid">
        {articlesData.slice(0, 6).map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
      </div>
    </Card>
  )
}

