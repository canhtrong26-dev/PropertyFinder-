import { Link } from 'react-router-dom'
import { heroImage } from '../assets/figma'

function HomePage() {
  return (
    <div className="page">
      <section className="home-hero">
        <img src={heroImage} alt="PropertyFinder" />
        <div className="home-hero-overlay">
          <h1>Tìm ngôi nhà mơ ước của bạn</h1>
          <p>Khám phá hàng nghìn bất động sản đang được rao bán và cho thuê.</p>
          <Link to="/properties" className="btn-details">
            Xem danh sách
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
