import Topbar from '../components/layout/Topbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Container from '../components/common/Container.jsx'
import Sidebar from '../components/layout/Sidebar.jsx'
import Categories from '../sections/Categories/Categories.jsx'
import PopularNews from '../sections/PopularNews/PopularNews.jsx'
import FeaturedBanner from '../sections/FeaturedBanner/FeaturedBanner.jsx'
import FeaturedArticles from '../sections/FeaturedArticles/FeaturedArticles.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import Image from '../components/ui/Image.jsx'
import portraitImg from '../assets/images/portrait.svg'

export default function Home() {
  const handleShopNow = () => {
    console.log('Shop now clicked')
    // Add your shop functionality here
  }

  return (
    <div className="appShell">
      <Topbar />

      <main className="main">
        <Container>
          <Categories />

          <div className="gridTop" style={{ marginTop: 18 }}>
            <PopularNews />

            <Card className="adCard">
              <div className="adBody">
                <div>
                  <p className="adTitle">Biggest Fashion Sale</p>
                  <p className="adText">Up to 20% off — new season picks.</p>
                  <p className="adTag">Limited time offer</p>
                  <button className="adButton" type="button" onClick={handleShopNow}>Shop now</button>
                </div>
                <div className="thumb" style={{ height: 140, borderRadius: 16 }}>
                  <Image src={portraitImg} alt="Ad" />
                </div>
              </div>
            </Card>
          </div>

          <div className="gridMid">
            <FeaturedBanner />
            <Sidebar />
          </div>

          <div style={{ marginTop: 18 }}>
            <FeaturedArticles />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

