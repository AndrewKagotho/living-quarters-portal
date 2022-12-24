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
          <dd>{props.quartersName}</dd>
          <dt>House No:</dt>
          <dd></dd>
        </dl>
        <dl className='dl_grid'>
          <dt>Tenancy:</dt>
          <dd>{props.activity}</dd>
          <dt>Location:</dt>
          <dd>{props.quartersLocation}</dd>
          <dt>Landlord:</dt>
          <dd>{props.landlordFirstName} {props.landlordLastName}</dd>
        </dl>
      </div>
    </section>
  )
}

export default Residence