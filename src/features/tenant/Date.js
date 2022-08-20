import { getCurrentDate } from '../../utils/Date'
import '../../styles/dates.css'

const Date = () => {
  const dateToday = getCurrentDate()

  return (
    <div className='today'>
      <h2>Date manenoz</h2>
      <div>
        <span className='smallFont'>Today...</span>
        <span className='mediumFont'>{dateToday.currentDayInText}</span>
        <span className='mediumFont'>{dateToday.currentDate} {dateToday.currentMonthInText}, {dateToday.currentYear}</span>
      </div>
    </div>
  )
}

export default Date