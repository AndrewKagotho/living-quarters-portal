import { getStartDate } from '../../utils/Date'
import { getCurrentDate } from '../../utils/Date'
import { getDateDifference } from '../../utils/Date'

const Date = ({props}) => {

  const dateToday = getCurrentDate()
  const startDate = getStartDate(props)
  const currentDate = getCurrentDate()
  const dateDifference = getDateDifference(startDate, currentDate)

  return (
    <>
      <section className='date'>
        <h2>Dates</h2>
        <span>Today...</span>
        <span>{dateToday.currentDayInText}</span>
        <span>{dateToday.currentDate} {dateToday.currentMonthInText}, {dateToday.currentYear}</span>
      </section>
      <hr/>
      <section className='duration'>
        <span>Duration of tenancy...</span>
        <span><em>Days: </em>1{dateDifference}</span>
        <span>(since {startDate.startDay} {startDate.startMonthText} {startDate.startYear})</span>
      </section>
    </>
  )
}

export default Date