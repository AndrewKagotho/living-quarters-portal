import { connect } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { mapUserDispatchToProps } from '../store/Actions'

const TenantNav = (props) => {
  let URLparam = props.username
  let homeBaseURL = '/tenant'
  let profileBaseURL = '/tenant/profile'
  let messagesBaseURL = '/tenant/messages'
  let homeURL = homeBaseURL.concat("?id="+URLparam)
  let profileURL = profileBaseURL.concat("?id="+URLparam)
  let messagesURL = messagesBaseURL.concat("?id="+URLparam)

  return (
    <>
      <header>
        <h1>Students' Living Quarters Portal</h1>
        <Link to='/'>Log out</Link>
      </header>
      <nav>
        <ul>
          <li><Link to={homeURL}>Home</Link></li>
          <li><Link to={profileURL}>Profile</Link></li>
          <li><Link to={messagesURL}>Messages</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.details.username,
    landlord: state.user.residence.quartersLandlord
  }
}

export default connect(mapStateToProps,mapUserDispatchToProps)(TenantNav)