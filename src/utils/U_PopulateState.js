import axios from 'axios'

let URLlocation = {url: window.location.href}
let fetchUser = 'http://localhost/living-quarters-portal/src/php/fetchUser.php'
let fetchResidence = 'http://localhost/living-quarters-portal/src/php/fetchResidence.php'
let fetchQuarters = 'http://localhost/living-quarters-portal/src/php/fetchQuarters.php'
let fetchLandlord = 'http://localhost/living-quarters-portal/src/php/fetchLandlord.php'
let fetchTransactions = 'http://localhost/living-quarters-portal/src/php/fetchTransactions.php'

export const populateState = (props) => {
  axios.post(fetchUser, URLlocation)
  .then((response)=> {
    props.adduserDetails(
      response.data['first name'],
      response.data['last name'],
      response.data.email,
      response.data['phone number'],
      response.data.nationalID,
      response.data.username
    )
    axios.post(fetchResidence, response.data.username)
    .then((response) => {
      props.addResidenceDetails(
        response.data['agreement type'],
        response.data.period,
        response.data.activity,
        response.data['start date'],
        response.data.session
      )
      axios.post(fetchQuarters, response.data.qid)
      .then((response) => {
        props.addQuartersDetails(
          response.data.name,
          response.data.location,
          response.data.landlord,
          response.data.prices,
          response.data.images
        )
      })
      axios.post(fetchLandlord, response.data.lid)
      .then((response) => {
        props.addLandlordDetails(
          response.data['first name'],
          response.data['last name'],
          response.data.email,
          response.data['phone number'],
          response.data['pay details']
        )
      })
    })
    axios.post(fetchTransactions, response.data.username)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.updateTenantRentHistory(
          resArray[recordIndex].payee,
          resArray[recordIndex].payable,
          resArray[recordIndex].method,
          resArray[recordIndex].refNo,
          resArray[recordIndex].paid,
          resArray[recordIndex].date
        )
        recordIndex++
      }
    })
  })
}