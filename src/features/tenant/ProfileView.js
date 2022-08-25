import React from 'react'
import { highlightMenu } from '../../utils/HighlightMenu'

const ProfileView = ({props, profileView, refArray}) => {

  React.useEffect(() => {
    highlightMenu(profileView, refArray)
    // eslint-disable-next-line
  }, [])

  if(profileView.view==='Personal')
    return (
      <div>
        <h2>My profile</h2>
        <span className='smallFont description'>Personal tenant information.</span>
        <div className='grid'>
          <h3>Account:</h3>
          <span className='gridLabel'>Username</span>
          <span className='gridValue'>{props.username}</span>
          <span className='gridLabel'>Name</span>
          <span className='gridValue'>{props.firstName} {props.lastName}</span>
          <h3>Contacts:</h3>
          <span className='gridLabel'>Phone number</span>
          <span className='gridValue phoneNo'>{props.phoneNo}</span>
          <span className='gridLabel'>Email</span>
          <span className='gridValue'>{props.email}</span>
          <span className='gridLabel'>National ID</span>
          <span className='gridValue'>{props.nationalID}</span>
        </div>
      </div>
    )
  else if(profileView.view==='Landlord')
    return (
      <div>
        <h2>Landlord's profile</h2>
        <span className='smallFont description'>Important landlord information.</span>
        <div className='grid'>
          <h3>Contacts:</h3>
          <span className='gridLabel'>Name</span>
          <span className='gridValue'>{props.landlordFirstName} {props.landlordLastName}</span>
          <span className='gridLabel'>Phone number</span>
          <span className='gridValue phoneNo'>{props.landlordPhone}</span>
          <span className='gridLabel'>Email</span>
          <span className='gridValue'>{props.landlordEmail}</span>
        </div>
      </div>
    )

  return <div>Nothing to show...</div>
}

export default ProfileView