import { connect } from 'react-redux'

const Residence = (props) => {
  return (
    <div>
      <img src={props.quartersImage} alt='Residence'/>
      <h2>Residence information</h2>
      <div className='residenceInfo'>
        <div>
          <span>Name:</span>
          <span>{props.firstName} {props.lastName}</span>
          <span>Residence:</span>
          <span>{props.quartersName}</span>
          <span>House No:</span>
          <span>###</span>
        </div>
        <div>
          <span>Tenancy:</span>
          <span>{props.activity}</span>
          <span>Location:</span>
          <span>{props.quartersLocation}</span>
          <span>Landlord:</span>
          <span>{props.landlordFirstName} {props.landlordLastName}</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quartersImage: state.user.residence.quartersImage,
    firstName: state.user.details.firstName,
    lastName: state.user.details.lastName,
    quartersName: state.user.residence.quartersName,
    activity: state.user.residence.activity,
    quartersLocation: state.user.residence.quartersLocation,
    landlordFirstName: state.user.landlord.firstName,
    landlordLastName: state.user.landlord.lastName
  }
}

export default connect(mapStateToProps)(Residence)