import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/U_PopulateState'
import { mapUserDispatchToProps } from '../../store/Actions'
import ProfileView from '../../features/tenant/ProfileView'

let showOptions = false

const Profile = (props) => {
  window.onload = () => populateState(props)

  const [contentView, setView] = React.useState('viewProfile')
  const viewProfileRef = React.useRef()
  const viewLandlordRef = React.useRef()
  const refArray = [viewProfileRef, viewLandlordRef]
  const gearRef = React.useRef()
  const linksRef = React.useRef()

  const viewContent = (arg, num) => {
    setView(arg)

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

  const expandOptions = () => {
    if(!showOptions) {
      linksRef.current.style.visibility = 'visible'
      linksRef.current.style.opacity = '1'
      gearRef.current.style.fill = 'var(--theme)'
      gearRef.current.style.transform = 'rotate(-30deg)'
      showOptions = true
    } else if(showOptions) {
      linksRef.current.style.visibility = 'hidden'
      linksRef.current.style.opacity = '0'
      gearRef.current.style.fill = 'var(--grey)'
      gearRef.current.style.transform = 'rotate(0deg)'
      showOptions = false
    }
  }

  return (
    <div>
      <h1 className='backgroundArt'>Profile</h1>
      <div className='container'>
        <div className='tenantMain'>
          <div className='menu'>
            <h2>View profile</h2>
            <ul>
              <li onClick={() => viewContent('viewProfile', 0)} ref={viewProfileRef}>Personal</li>
              <li onClick={() => viewContent('viewLandlord', 1)} ref={viewLandlordRef}>Landlord</li>
            </ul>
          </div>
          <div className='selectedMenuOption'>
            <ProfileView props={props} contentView={contentView}/>
          </div>
        </div>
      </div>
      <div className='updateOptions'>
        <div className='updateOptionsLinks' ref={linksRef}>
          <span>Change name</span>
          <span>Update password</span>
          <span>Add phone number</span>
          <span>Change email address</span>
          <span>Add national ID</span>
        </div>
      </div>
      <svg className='settingsIcon' onClick={expandOptions} ref={gearRef} height="36px" viewBox="0 0 24 24" width="36px"><rect fill="none" height="24" width="24"/><path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z"/></svg>
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
    session: state.user.residence.session,
    quartersName: state.user.residence.quartersName,
    quartersLocation: state.user.residence.quartersLocation,
    landlordFirstName: state.user.landlord.firstName,
    landlordLastName: state.user.landlord.lastName,
    landlordEmail: state.user.landlord.email,
    landlordPhone: state.user.landlord.phoneNo
  }
}

export default connect(mapStateToProps,mapUserDispatchToProps)(Profile)