import axios from 'axios'
import { connect } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { mapLandlordDispatchToProps } from '../store/Actions'

let fetchTenants = 'http://localhost/living-quarters-portal/src/php/landlord/fetchUsers.php'

const LandlordNav = (props) => {
  let URLparam = props.username
  let homeBaseURL = '/landlord'
  let managementBaseURL = '/landlord/management'
  let profileBaseURL = '/landlord/profile'
  let messagesBaseURL = '/landlord/messages'
  let homeURL = homeBaseURL.concat('?id='+URLparam)
  let managementURL = managementBaseURL.concat('?id='+URLparam)
  let profileURL = profileBaseURL.concat('?id='+URLparam)
  let messagesURL = messagesBaseURL.concat('?id='+URLparam)

  return (
    <div>
      <header>
        <span>System name</span>
        <Link to='/'>Log out</Link>
      </header>
      <nav>
        <ul>
        <li><Link to={homeURL}>Home</Link></li>
          <li><Link to={managementURL}>Management</Link></li>
          <li><Link to={profileURL}>Profile</Link></li>
          <li><Link to={messagesURL} onClick={() => getTenants(props)}>Messages</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username,
    tenantUsernames: state.landlord.tenants.usernames
  }
}

export default connect(mapStateToProps,mapLandlordDispatchToProps)(LandlordNav)

export const getTenants = (props) => {
  if(props.tenantUsernames.length===0) {
    axios.post(fetchTenants, props.username)
    .then((response) => {
      let resArray = response.data
      let recordIndex = 0
      props.resetDataFromDB('users')
      while(recordIndex<resArray.length) {
        props.addDataFromUsersDB(
          resArray[recordIndex].username,
          resArray[recordIndex]['first name'],
          resArray[recordIndex]['last name'],
          resArray[recordIndex].email,
          resArray[recordIndex]['phone number'],
          resArray[recordIndex].nationalID
        )
        recordIndex++
      }
    })
  }
}