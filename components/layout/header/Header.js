import { useRouter } from 'next/router'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import { HomeFlashBar } from '../../flash/HomeRebateFlash'

const Header = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <>
      <header className='fixed-top bg-white shadow' id="header">
        {isHome && <HomeFlashBar />}
        <Topbar />
        <Navbar />
      </header>
    </>
  )
}

export default Header