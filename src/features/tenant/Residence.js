const Residence = ({props}) => {
  return (
    <div className='residence'>
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

export default Residence