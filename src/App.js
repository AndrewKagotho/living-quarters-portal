import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLanding from './views'
import BrowseNav from './layouts/BrowseNav'
import Browse from './views/browse/Browse'
import TenantNav from './layouts/TenantNav'
import TenantHome from './views/tenant/Home'
import TenantProfile from './views/tenant/Profile'
import TenantMessages from './views/tenant/Messages'
import LandlordNav from './layouts/LandlordNav'
import LandlordHome from './views/landlord/Home'
import LandlordManagement from './views/landlord/Management'
import LandlordProfile from './views/landlord/Profile'
import LandlordMessages from './views/landlord/Messages'
import './styles/index.css'

// import './styles/tenant.css'
// import './styles/residence.css'
// import './styles/myaccount.css'
import './styles/profile.css'
// import './styles/messages.css'
import './styles/stats.css'
import './styles/landlord.css'
import './styles/management.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLanding/>}/>
        <Route path='/browse' element={<BrowseNav/>}>
          <Route index element={<Browse/>}/>
        </Route>
        <Route path='/tenant' element={<TenantNav/>}>
          <Route index element={<TenantHome/>}/>
          <Route path='/tenant/profile' element={<TenantProfile/>}/>
          <Route path='/tenant/messages' element={<TenantMessages/>}/>
        </Route>
        <Route path='/landlord' element={<LandlordNav/>}>
          <Route index element={<LandlordHome/>}/>
          <Route path='/landlord/management' element={<LandlordManagement/>}/>
          <Route path='/landlord/profile' element={<LandlordProfile/>}/>
          <Route path='/landlord/messages' element={<LandlordMessages/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App