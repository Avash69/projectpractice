import Container from '../common/Container.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footerInner">
          <div>© {new Date().getFullYear()} quicblog</div>
          <div>Designed layout • Clean React components</div>
        </div>
      </Container>
    </footer>
  )
}

