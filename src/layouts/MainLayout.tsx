import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import useUI from '../hooks/useUI'

function MainLayout() {
  const { state } = useUI()

  return (
    <div className={state.theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
