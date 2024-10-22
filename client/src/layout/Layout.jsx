import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Layout = () => {
  return (
    <div>
        {/* Navbar */}
        <Header />
        {/* Outlet */}
        <Outlet />

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Layout