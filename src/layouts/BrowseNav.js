import { Outlet, Link } from 'react-router-dom'
import '../styles/headerFooter.css'

const BrowseNav = () => {
  return (
    <div>
      <div className='header'>
        <span id='systemTitleNav'>Students' Living Quarters Portal</span>     
        <Link to='/' className='exitPage'>Back to Login</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default BrowseNav