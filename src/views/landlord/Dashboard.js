import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import Welcome from '../../features/landlord/Welcome'
import Listings from '../../features/landlord/Listings'
import InfoCentre from '../../features/landlord/InfoCentre'
import Search from '../../features/landlord/Search'
import Transactions from '../../features/landlord/Transactions'
import Calendar from '../../features/shared/Calendar'
import '../../styles/landlord.css'
import '../../styles/tenant.css'

const Dashboard = (props) => {
  window.onload = () => populateState(props)

  return (
    <div>
      <h1 className='backgroundArt'>Dashboard</h1>
      <div className='dashboard'>
        <Welcome/>
        <div className='lordGridContainer'>
          <div className='lordItem1'>
            <Listings/>
          </div>
          <div className='lordItem2'>
            <InfoCentre/>
          </div>
          <div className='lordItem3'>
            <Search/>
          </div>
          <div className='lordItem4'>
            <Transactions/>
          </div>
          <div className='lordItem5'>
            <Calendar/>
          </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username
  }
}

export default connect(mapStateToProps, mapLandlordDispatchToProps)(Dashboard)