import ReactCalendar from 'react-calendar'
import '../../styles/calendar.css'

const Calendar = () => {
  return (
    <div className='calendar'>
      <span className='smallFont calendarName'>Calendar...</span>
      <ReactCalendar/>
      {/* onChange={setDate} value={date} */}
      {/* Selected date: {date.toDateString()} */}
    </div>
  )
}

export default Calendar