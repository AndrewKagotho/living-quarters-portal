import React from 'react'
import { highlightMenu } from '../../utils/HighlightMenu'

const ProfileView = ({props, profileView, refArray}) => {

  React.useEffect(() => {
    highlightMenu(profileView, refArray)
    // eslint-disable-next-line
  }, [])

  if(profileView.view === 'Personal')
    return (
      <section>
        <h2>My profile</h2>
        <span className='description'>Personal tenant information.</span>
        <dl className='dl_grid'>
          <h3>Account:</h3>
          <dt>Name</dt>
          <dd>{props.firstName} {props.lastName}</dd>
          <dt>Username</dt>
          <dd>{props.username}</dd>
        </dl>
        <dl className='dl_grid'>
          <h3>Contacts:</h3>
          <dt>Phone number</dt>
          <dd>{props.phoneNo}</dd>
          <dt>Email</dt>
          <dd>{props.email}</dd>
          <dt>National ID</dt>
          <dd>{props.nationalID}</dd>
        </dl>
      </section>
    )
  else if(profileView.view === 'Landlord')
    return (
      <section>
        <h2>Landlord's profile</h2>
        <span className='smallFont description'>Important landlord information.</span>
        <dl className='dl_grid'>
          <h3>Contacts:</h3>
          <dt>Name</dt>
          <dd>{props.landlordFirstName} {props.landlordLastName}</dd>
          <dt>Phone number</dt>
          <dd>{props.landlordPhone}</dd>
          <dt>Email</dt>
          <dd>{props.landlordEmail}</dd>
        </dl>
      </section>
    )

  return <div>Nothing to show...</div>
}

export default ProfileView