const Residence = ({props}) => {
  return (
    <section className='residence'>
      <img src={props.quartersImage} alt='residence'/>
      <h2>Residence information:</h2>
      <div className='residence__info'>
        <dl className='dl_grid'>
          <dt>Name:</dt>
          <dd>{props.firstName} {props.lastName}</dd>
          <dt>Residence:</dt>
          <dd>xx{props.quartersName}</dd>
          <dt>House No:</dt>
          <dd>xx</dd>
        </dl>
        <dl className='dl_grid'>
          <dt>Tenancy:</dt>
          <dd>xx{props.activity}</dd>
          <dt>Location:</dt>
          <dd>xx{props.quartersLocation}</dd>
          <dt>Landlord:</dt>
          <dd>xx{props.landlordFirstName} {props.landlordLastName}</dd>
        </dl>
      </div>
    </section>
  )
}

export default Residence