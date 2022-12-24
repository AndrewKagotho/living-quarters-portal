import axios from 'axios'
import { connect } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { mapUserDispatchToProps } from '../store/Actions'

let fetchMss = 'http://localhost/living-quarters-portal/src/php/fetchMessages.php'

const TenantNav = (props) => {
  let URLparam = props.username
  let homeBaseURL = '/tenant'
  let profileBaseURL = '/tenant/profile'
  let messagesBaseURL = '/tenant/messages'
  let homeURL = homeBaseURL.concat("?id="+URLparam)
  let profileURL = profileBaseURL.concat("?id="+URLparam)
  let messagesURL = messagesBaseURL.concat("?id="+URLparam)

  let mssData = {
    mssTenant: props.username,
    mssLandlord: props.landlord
  }

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
          <li><Link to={messagesURL} onClick={() => getMessages(props,mssData)}>Messages</Link></li>
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

export const getMessages = (props, mssData) => {
  props.resetUserMessages()
  axios.post(fetchMss, mssData)
  .then((response) => {
    const resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addMessage(
        resArray[recordIndex].mssFrom,
        resArray[recordIndex].mssTo,
        resArray[recordIndex].mssTime,
        resArray[recordIndex].mssBody
      )
      recordIndex++
    }
  })
}