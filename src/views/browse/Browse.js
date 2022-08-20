import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { mapBrowseDispatchToProps } from '../../store/Actions'
import Footer from '../../layouts/Footer'
import '../../styles/browse.css'

let getListings = 'http://localhost:8080/Students%20LQ%20Portal/src/php/getListings.php'
let ad1 = 'http://127.0.0.1:8888/images/ad1.jpg'

const Browse = (props) => {
  
  React.useEffect(() => {
    fetchListings(props)
    // eslint-disable-next-line
  }, [])

  const listing = props.name.map((item, index) =>
    <li key={index} className='eachListing'>
      <div className='listingContent'>
        <div className='listingName'>{props.name[index]}</div>
        <div className='listingLocation'>{props.location[index]}</div>
        <div className='listingVacancy'>{props.vacancies[index]}</div>
        <div className='listingFeatures'>{props.features[index]}</div>
        <div className='listingPrice'>{props.prices[index]}</div>
        <div className='listingImage'><img src={props.images[index]} alt=''></img></div>
        <button className='bookButton'>Book now!</button>
      </div>
      <div className='listingBorder'></div>
    </li>
  )

  return (
    <div>
      <h2 className='browseTitle'>Hostel Listing</h2>
      <div className='browseContainer'>
        <div>
          <ul className='allListings'>{listing}</ul>
        </div>
      </div>
      <aside>
        <img src={ad1} alt=''/>
        <img src={ad1} alt=''/>
      </aside>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.browse.name,
    location: state.browse.location,
    vacancies: state.browse.vacancies,
    features: state.browse.features,
    prices: state.browse.prices,
    images: state.browse.images
  }
}

export default connect(mapStateToProps, mapBrowseDispatchToProps)(Browse)

const fetchListings = (props) => {
  axios.get(getListings)
  .then((response) => {
    const resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length){
      props.addListingToState(
        resArray[recordIndex].name,
        resArray[recordIndex].location,
        resArray[recordIndex].vacancies,
        resArray[recordIndex].features,
        resArray[recordIndex].prices,
        resArray[recordIndex].images
      )
      recordIndex++
    }
  })
}