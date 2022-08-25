import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/U_PopulateState'
import { mapUserDispatchToProps } from '../../store/Actions'
import { highlightMenu } from '../../utils/HighlightMenu'
import Welcome from '../../features/shared/Welcome'
import HomeView from '../../features/tenant/HomeView'

const Home = (props) => {
  window.onload = () => populateState(props)

  React.useEffect(() => {
    highlightMenu(contentView, refArray)
    // eslint-disable-next-line
  }, [])
  
  const [contentView, setView] = React.useState({view: 'Overview', num: 0})
  const [profileView, setProfileView] = React.useState({view: 'Personal', num: 0})
  const overviewRef = React.useRef()
  const accountRef = React.useRef()
  const profileRef = React.useRef()
  const refArray = [overviewRef, accountRef, profileRef]

  const viewContent = (arg, num) => {
    setView({view: arg, num: num})

    for(let index=0; index<refArray.length; index++) {
      if(index===num) {
        refArray[index].current.style.backgroundColor = 'var(--theme)'
        refArray[index].current.style.color = 'var(--neutral)'
        continue
      }
      refArray[index].current.style.backgroundColor = 'transparent'
      refArray[index].current.style.color = 'var(--font)'
    }
  }

  return (
    <div>
      <h1 className='backgroundArt'>{contentView.view}</h1>
      <div className='container'>
        <Welcome props={props}/>
        <div className='tenantMain'>
          <div className='menu'>
            <h2>Home menu</h2>
            <ul>
              <li onClick={() => viewContent('Overview', 0)} ref={overviewRef}>Overview</li>
              <li onClick={() => viewContent('Account', 1)} ref={accountRef}>Account</li>
              <li onClick={() => viewContent('Profile', 2)} ref={profileRef}>Profile</li>
            </ul>
          </div>
          <div className='selectedMenuOption'>
            <HomeView props={props} contentView={contentView} profileView={profileView} setProfileView={setProfileView}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.details.username,
    firstName: state.user.details.firstName,
    lastName: state.user.details.lastName,
    email: state.user.details.email,
    phoneNo: state.user.details.phoneNo,
    nationalID: state.user.details.nationalID,
    activity: state.user.residence.activity,
    startDate: state.user.residence.startDate,
    quartersName: state.user.residence.quartersName,
    quartersLocation: state.user.residence.quartersLocation,
    quartersImage: state.user.residence.quartersImage,
    quartersPrice: state.user.residence.quartersPrice,
    agreementType: state.user.residence.agreementType,
    period: state.user.residence.period,
    payDetails: state.user.landlord.payDetails,
    payable: state.user.transactions.payable,
    paid: state.user.transactions.paid,
    landlordFirstName: state.user.landlord.firstName,
    landlordLastName: state.user.landlord.lastName,
    landlordEmail: state.user.landlord.email,
    landlordPhone: state.user.landlord.phoneNo
  }
}

export default connect(mapStateToProps, mapUserDispatchToProps)(Home)