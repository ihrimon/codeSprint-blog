import { Outlet } from 'react-router-dom'
import FooterComponent from '../component/Footer'
import Header from '../component/Header'

const Layout = () => {
  return (
    <div>
        {/* Navbar */}
        <Header />
        {/* Outlet */}
        <Outlet />

        {/* Footer */}
        <FooterComponent />
    </div>
  )
}

export default Layout