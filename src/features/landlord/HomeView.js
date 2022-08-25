import React from 'react'
import Stats from '../../features/landlord/Stats'
import Listings from '../../features/landlord/Listings'
import Date from '../../features/tenant/Date'
import Calendar from '../../features/shared/Calendar'
import AccountSummary from '../../features/landlord/AccountSummary'
import ListingsSummary from '../../features/landlord/ListingsSummary'
import Account from '../../features/landlord/Account'
import ProfileView from '../../features/landlord/ProfileView'
// import Search from '../../features/landlord/Search'

const HomeView = ({props, contentView}) => {

  const [profilesView, setProfileView] = React.useState({view: 'Personal', num: 0})
  const personalRef = React.useRef()
  const landlordRef = React.useRef()
  const refArray = [personalRef, landlordRef]

  const viewProfile = (arg, num) => {
    setProfileView({view: arg, num: num})

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

  if(contentView.view==='Overview')
    return (
      <div className='flexStart'>
        <div className='largeContainer'>
          <Stats props={props}/>
        </div>
        <div className='component activeComponent smallContainer'>
          <div className='datePadding'><Date/></div>
          <Calendar/>
        </div>
      </div>
    )

  else if(contentView.view==='Account')
    return (
      <div className='flexStart'>
        <div className='component activeComponent smallContainer'>
          <AccountSummary props={props}/>
        </div>
        <div className='component activeComponent largeContainer'>
          <Account props={props}/>
        </div>
      </div>
    )
    
  else if(contentView.view==='Profile')
    return (
      <div className='flexStart'>
        <div className='menu smallContainer'>
          <h2>View profile</h2>
          <ul>
            <li onClick={() => {viewProfile('Personal', 0); }} ref={personalRef}>Personal</li>
            <li onClick={() => {viewProfile('Tenants', 1); }} ref={landlordRef}>Tenants</li>
          </ul>
        </div>
        <div className='component activeComponent largeContainer'>
          <ProfileView props={props} profilesView={profilesView} refArray={refArray}/>
        </div>
      </div>
    )

  else if(contentView.view==='Listings')
    return (
      <div className='flexStart'>
        <div className='largeContainer'>
          <Listings props={props}/>
        </div>
        <div className='component activeComponent smallContainer'>
          <ListingsSummary props={props}/>
        </div>
      </div>
    )

  return <div>Nothing to show...</div>
}

export default HomeView