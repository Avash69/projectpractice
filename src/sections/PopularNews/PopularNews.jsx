import Card from '../../components/ui/Card.jsx'
import Divider from '../../components/common/Divider.jsx'
import SectionTitle from '../../components/common/SectionTitle.jsx'
import NewsItem from './NewsItem.jsx'
import { newsData } from '../../data/newsData.js'

export default function PopularNews() {
  const handleViewAllNews = () => {
    console.log('View all news clicked')
    // Add navigation or filter logic here
  }

  return (
    <Card className="surface">
      <div className="cardBody">
        <SectionTitle 
          title="Popular News" 
          actionLabel="View all"
          onAction={handleViewAllNews}
        />
        <Divider />
        <div className="list">
          {newsData.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Card>
  )
}

