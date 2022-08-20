const Weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const shortFormMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const date = new Date()
let dateTimeStamp = []
let dateStamp = []
let dateStampInText = []
let timeStamp = []


export const getStartDate = (props) => {
  let startDate = props.startDate
  let [startYear, startMonth, startDay] = startDate.split('-')
  startMonth -= 1
  let startMonthText = Months[startMonth]

  return {
    startDay: startDay,
    startMonthText: startMonthText,
    startMonth: startMonth,
    startYear: startYear,
  }
}

export const getCurrentDate = () => {
  let currentDayInText = Weekdays[date.getDay()]
  let currentDate = date.getDate()
  let currentMonth = date.getMonth()
  let currentMonthInText = Months[currentMonth]
  let currentYear = date.getFullYear()

  return {
    currentDayInText: currentDayInText,
    currentDate: currentDate,
    currentMonthInText: currentMonthInText,
    currentMonth: currentMonth,
    currentYear: currentYear
  }
}

export const getDateDifference = (startDate, currentDate) => {
  let convertedDifferenceSign = false
  let totalDays = 0
  let differenceInYears = currentDate.currentYear - startDate.startYear
  let differenceInMonths = (currentDate.currentMonth - startDate.startMonth) + 1

  if(differenceInMonths < 0) {
    differenceInMonths += 12
    convertedDifferenceSign = true
  }

  if(differenceInYears > 1 || differenceInMonths > 12)
    if(convertedDifferenceSign === true)
      differenceInMonths += ((differenceInYears-1) * 12)
    else
      differenceInMonths += ((differenceInYears) * 12)

  let numYears = Math.floor(differenceInMonths/12)
  let modulusMonths = differenceInMonths % 12
  totalDays = 365 * numYears
  let monthDaysIndex = currentDate.currentMonth

  for(let y=0; y<modulusMonths; y++){
    if((monthDaysIndex - y) < 0)
      monthDaysIndex = 11 + y
    totalDays = totalDays + MonthDays[monthDaysIndex - y]
  }

  totalDays -= parseInt(startDate.startDay) + MonthDays[monthDaysIndex] - currentDate.currentDate

  return totalDays
}

export const convertDateTime = (props) => {
  for(let i=0; i<props.messageTime.length; i++)
    dateTimeStamp[i] = props.messageTime[i].split(' ')

  for(let i=0; i<dateTimeStamp.length; i++) {
    dateStamp[i] = dateTimeStamp[i][0].split('-')
    timeStamp[i] = dateTimeStamp[i][1].split(':')
  }

  for(let i=0; i<dateStamp.length; i++)
    dateStampInText[i] = shortFormMonths[dateStamp[i][1]-1]

  return {
    dateStamp: dateStamp,
    dateStampInText: dateStampInText,
    timeStamp: timeStamp,
    shortFormMonths: shortFormMonths
  }
}