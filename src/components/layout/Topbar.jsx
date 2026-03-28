import { useState } from 'react'
import Container from '../common/Container.jsx'
import Button from '../ui/Button.jsx'
import Navbar from './Navbar.jsx'

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.2 16.2 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Topbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleSearch = () => {
    console.log('Search clicked')
    // Add your search functionality here
  }

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    console.log('Dark mode toggled:', !isDarkMode)
    // Add your dark mode toggle logic here
  }

  const handleSubscribe = () => {
    console.log('Subscribe clicked')
    // Add your subscription logic here
  }

  return (
    <header className="topbar">
      <div className="topGradient" aria-hidden="true" />
      <Container>
        <div className="topbarMeta">
          <div className="metaLinks">
            <a href="#">About</a>
            <a href="#">Our Story</a>
            <a href="#">Buy Now</a>
            <a href="#">Contact</a>
          </div>
          <div className="metaActions">
            <span>🔗</span>
            <span>📘</span>
            <span>🗓</span>
            <span>Thursday, March 26</span>
          </div>
        </div>

        <div className="topbarInner">
          <a className="brand" href="#" aria-label="Quicblog">
            <span className="brandMark" aria-hidden="true" />
            <span>X online.</span>
          </a>

          <Navbar />

          <div className="topbarRight">
            <Button className="btnIcon" aria-label="Search" onClick={handleSearch}>
              <SearchIcon />
            </Button>
            <Button className="btnIcon" aria-label="Dark mode" onClick={handleDarkMode}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="primary" onClick={handleSubscribe}>Subscribe</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

