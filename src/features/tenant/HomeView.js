import React from 'react'
import Residence from '../../features/tenant/Residence'
import Date from '../../features/tenant/Date'
import AccountSummary from './AccountSummary'
import Account from './Account'
import ProfileView from '../../features/tenant/ProfileView'
import Messages from '../../views/tenant/Messages'

const HomeView = ({props, contentView, profileView, setProfileView}) => {

  const personalRef = React.useRef()
  const landlordRef = React.useRef()
  const refArray = [personalRef, landlordRef]

  const viewProfile = (arg, num) => {
    setProfileView({view: arg, num: num})

    for(let index=0; index<refArray.length; index++) {
      if(index===num) {
        refArray[index].current.style.backgroundColor = 'hsl(190, 100%, 25%)'
        refArray[index].current.style.color = '#FFF'
        continue
      }
      refArray[index].current.style.backgroundColor = 'transparent'
      refArray[index].current.style.color = '#555'
    }
  }

  if(contentView.view === 'Overview')
    return (
      <>
        <div className='card card_large'>
          <Residence props={props}/>
        </div>
        <div className='card card_small card_flex'>
          <Date props={props} />
        </div>
      </>
    )

  else if(contentView.view === 'Account')
    return (
      <>
        <div className='card card_small'>
          <AccountSummary props={props}/>
        </div>
        <div className='card card_large'>
          <Account props={props}/>
        </div>
      </>
    )
    
  else if(contentView.view === 'Profile')
    return (
      <>
        <menu>
          <h2>View profile</h2>
          <ul>
            <li onClick={() => {viewProfile('Personal', 0); }} ref={personalRef}>Personal</li>
            <li onClick={() => {viewProfile('Landlord', 1); }} ref={landlordRef}>Landlord</li>
          </ul>
        </menu>
        <div className='card card_large'>
          <ProfileView props={props} profileView={profileView} refArray={refArray}/>
        </div>
      </>
    )
    
  else if(contentView.view === 'Messages')
    return (
      <>
        <menu>
          <h2>Conversations</h2>
          <ul>
              <span>{props.landlordFirstName} {props.landlordLastName} <em>(Landlord)</em></span>
          </ul>
        </menu>
        <div className='card card_large'>
          <Messages />
        </div>
      </>
    )

  return <div>Nothing to show...</div>
}

export default HomeView