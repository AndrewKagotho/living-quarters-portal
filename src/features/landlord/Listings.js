const Listings = ({props}) => {

  const listing = props.listingName.map((item, index) => 
  <li key={index} className='component activeComponent'>
    <h3>{props.listingName[index]}</h3>
    <div className='listingsInfo'>
      <img src={props.listingImage[index]} alt='Listing'/>
      <div>
        <span>{props.listingLocation[index]}</span>
        <span>Vacancies: {props.listingVacancy[index]}</span>
        <span className='emCurrency'>Price: <em>{props.listingPrice[index]}</em></span>
      </div>
      <span>{props.listingFeatures[index]}</span>
    </div>
  </li>
  )

  return (
    <>
      <ul className='listings'>
        {listing}
      </ul>
    </>
  )
}

export default Listings