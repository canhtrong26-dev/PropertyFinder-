import { NavLink } from 'react-router-dom'
import useUI from '../hooks/useUI'

function Header() {
  const { state, dispatch } = useUI()

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
        <div className="header-actions">
          <button
            type="button"
            className="header-toggle"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
          >
            ☰
          </button>
          <button
            type="button"
            className="header-toggle"
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
          >
            {state.theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
