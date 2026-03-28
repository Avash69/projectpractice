import Card from '../ui/Card.jsx'
import Divider from '../common/Divider.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import Trending from '../../sections/Trending/Trending.jsx'

export default function Sidebar() {
  const handleViewAllTrending = () => {
    console.log('View all trending clicked')
    // Add navigation or filter logic here
  }

  return (
    <aside className="surface" style={{ padding: 16 }}>
      <SectionTitle 
        title="Trending News" 
        actionLabel="View all"
        onAction={handleViewAllTrending}
      />
      <Divider />
      <Card style={{ borderRadius: 16 }}>
        <div className="cardBody">
          <Trending />
        </div>
      </Card>
    </aside>
  )
}

