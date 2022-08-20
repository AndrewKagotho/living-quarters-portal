import { connect } from 'react-redux'

const Listings = (props) => {
  const listing = props.name.map((item, index) => 
  <li key={index}>
    <img src={props.image[index]} alt=''/>
    <span>{props.name[index]}</span>
    <span>{props.location[index]}</span>
    <span>{props.vacancy[index]}</span>
    <span>{props.price[index]}</span>
  </li>
  )
  return (
    <div className='landlordListings'>
      <h2>My Listings</h2>
      <ul>{listing}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.landlord.listings.names,
    location: state.landlord.listings.locations,
    vacancy: state.landlord.listings.vacancies,
    price: state.landlord.listings.prices,
    image: state.landlord.listings.images
  }
}

export default connect(mapStateToProps)(Listings)