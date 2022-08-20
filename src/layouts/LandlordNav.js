import axios from 'axios'
import { connect } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { mapLandlordDispatchToProps } from '../store/Actions'
import '../styles/tenant.css'

let fetchTenants = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/fetchUsers.php'

const LandlordNav = (props) => {
  let URLparam = props.username
  let dashboardBaseURL = '/landlord'
  let managementBaseURL = '/landlord/management'
  let profileBaseURL = '/landlord/profile'
  let messagesBaseURL = '/landlord/messages'
  let dashboardURL = dashboardBaseURL.concat("?id="+URLparam)
  let managementURL = managementBaseURL.concat("?id="+URLparam)
  let profileURL = profileBaseURL.concat("?id="+URLparam)
  let messagesURL = messagesBaseURL.concat("?id="+URLparam)

  return (
    <div>
      <div className='header'>
        <span id='systemTitleNav'>Students' Living Quarters Portal</span>     
        <Link to='/' className='exitPage'>Log out</Link>
      </div>
      <div className='userNav'>
        <nav>
          <ul>
            <li><Link to={dashboardURL} className='listNav'>Dashboard</Link></li>
            <li><Link to={managementURL} className='listNav'>Management</Link></li>
            <li><Link to={profileURL} className='listNav'>Profile</Link></li>
            <li><Link to={messagesURL} className='listNav' onClick={() => getTenants(props)}>Messages</Link></li>
          </ul>
        </nav>
      </div>
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