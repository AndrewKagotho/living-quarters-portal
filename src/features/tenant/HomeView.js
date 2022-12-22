import React from 'react'
import Residence from '../../features/tenant/Residence'
import Date from '../../features/tenant/Date'
import Duration from '../../features/tenant/Duration'
import Calendar from '../../features/shared/Calendar'
import AccountSummary from './AccountSummary'
import Account from './Account'
import ProfileView from '../../features/tenant/ProfileView'

const HomeView = ({props, contentView, profileView, setProfileView}) => {

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
      <>
        <div className='card largeContainer'>
          <Residence props={props}/>
        </div>
        <div className='card smallContainer'>
          <Date/>
          <Duration props={props}/>
          <Calendar/>
        </div>
      </>
    )

  else if(contentView.view==='Account')
    return (
      <div className='flexStart'>
        <div className='card smallContainer'>
          <AccountSummary props={props}/>
        </div>
        <div className='card largeContainer'>
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
            <li onClick={() => {viewProfile('Landlord', 1); }} ref={landlordRef}>Landlord</li>
          </ul>
        </div>
        <div className='card largeContainer'>
          <ProfileView props={props} profileView={profileView} refArray={refArray}/>
        </div>
      </div>
    )

  return <div>Nothing to show...</div>
}

export default HomeView