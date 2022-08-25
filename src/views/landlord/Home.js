import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import { highlightMenu } from '../../utils/HighlightMenu'
import Welcome from '../../features/shared/Welcome'
import HomeView from '../../features/landlord/HomeView'

const Dashboard = (props) => {
  window.onload = () => populateState(props)

  React.useEffect(() => {
    highlightMenu(contentView, refArray)
    // eslint-disable-next-line
  }, [])

  const [contentView, setView] = React.useState({view: 'Overview', num: 0})
  const overviewRef = React.useRef()
  const accountRef = React.useRef()
  const profileRef = React.useRef()
  const listingsRef  = React.useRef()
  const refArray = [overviewRef, accountRef, profileRef, listingsRef]

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
              <li onClick={() => viewContent('Listings', 3)} ref={listingsRef}>Listings</li>
            </ul>
          </div>
          <div className='selectedMenuOption'>
            <HomeView props={props} contentView={contentView}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username,
    firstName: state.landlord.details.firstName,
    lastName: state.landlord.details.lastName,
    email: state.landlord.details.email,
    phoneNo: state.landlord.details.phoneNo,
    nationalID: state.landlord.details.nationalID,
    tenantUsernames: state.landlord.tenants.usernames,
    listingID: state.landlord.listings.qid,
    listingName: state.landlord.listings.names,
    listingLocation: state.landlord.listings.locations,
    listingFeatures: state.landlord.listings.features,
    listingVacancy: state.landlord.listings.vacancies,
    listingPrice: state.landlord.listings.prices,
    listingImage: state.landlord.listings.images
  }
}

export default connect(mapStateToProps, mapLandlordDispatchToProps)(Dashboard)