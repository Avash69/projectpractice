import Card from '../../components/ui/Card.jsx'
import SectionTitle from '../../components/common/SectionTitle.jsx'
import CategoryItem from './CategoryItem.jsx'
import { categoriesData } from '../../data/categoriesData.js'

export default function Categories() {
  return (
    <Card className="surface" style={{ padding: 16 }}>
      <SectionTitle title="Popular Categories" />
      <div className="categoryRow" style={{ marginTop: 12 }}>
        {categoriesData.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  )
}

