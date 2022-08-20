import { connect } from 'react-redux'
import { getStartDate } from '../../utils/Date'
import { getCurrentDate } from '../../utils/Date'
import { getDateDifference } from '../../utils/Date'

const Duration = (props) => {
  const startDate = getStartDate(props)
  const currentDate = getCurrentDate()
  const dateDifference = getDateDifference(startDate, currentDate)

  return (
    <div className='duration'>
      <span className='smallFont'>Duration of tenancy...</span>
      <span><em>Days: </em>{dateDifference}</span>
      <span className='smallFont'>(since {startDate.startDay} {startDate.startMonthText} {startDate.startYear})</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    startDate: state.user.residence.startDate
  }
}

export default connect(mapStateToProps)(Duration)