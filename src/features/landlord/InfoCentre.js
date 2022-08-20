import { connect } from 'react-redux'

const InfoCentre = (props) => {
  const date = new Date()
  const Weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let currentDayInText = Weekdays[date.getDay()]
  let currentDate = date.getDate()
  let currentMonth = date.getMonth()
  let currentMonthInText = Months[currentMonth]
  let currentYear = date.getFullYear()
  const numOfListings = props.listings.length
  const numOfTenants = props.tenants.length
  let totalVacancies = 0

  for(let i=0; i<props.vacancies.length; i++) {
    totalVacancies+=parseInt(props.vacancies[i])
  }

  return (
    <div className='landlordInformationCentre'>
      <h2>Information Centre</h2>
      <div className='landlordInfoDash'>
        <span>Number of Listings: <em>{numOfListings}</em></span>
        <span>Number of Tenants: <em>{numOfTenants}</em></span>
        <span>Number of Vacancies: <em>{totalVacancies}</em></span>
      </div>
      <span className='todayLandlord'>{currentDayInText} {currentDate} {currentMonthInText}, {currentYear}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.landlord.listings.names,
    vacancies: state.landlord.listings.vacancies,
    tenants: state.landlord.tenants.usernames
  }
}

export default connect(mapStateToProps)(InfoCentre)