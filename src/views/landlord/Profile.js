import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import Footer from '../../layouts/Footer'
import '../../styles/profile.css'

const LandlordProfile = (props) => {
  window.onload = () => populateState(props)

  return (
    <div>
      <h1 className='backgroundArt'>Profile</h1>
      <div className='landlordProfileContainer'>
        <div className='myInfoContainer'>
          <div className='myInfo'>
            <h2>My information</h2>
            <span>Name:</span>
            <span>{props.firstName} {props.lastName}</span>
            <span>Username:</span>
            <span>{props.username}</span>
            <span>Email:</span>
            <span>{props.email}</span>
            <span>Phone number:</span>
            <span>{props.phoneNo}</span>
            <span>National ID:</span>
            <span>{props.nationalID}</span>
          </div>
        </div>
      </div>
      <Footer/>
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
    nationalID: state.landlord.details.nationalID
  }
}

export default connect(mapStateToProps,mapLandlordDispatchToProps)(LandlordProfile)