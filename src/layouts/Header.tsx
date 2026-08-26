import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">PropertyFinder</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header