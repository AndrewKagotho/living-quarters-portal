import axios from 'axios'

let URLlocation = {url: window.location.href}
let fetchLandlord = 'http://localhost/living-quarters-portal/src/php/landlord/fetchLandlord.php'
let fetchUsers = 'http://localhost/living-quarters-portal/src/php/landlord/fetchUsers.php'
let fetchResidence = 'http://localhost/living-quarters-portal/src/php/landlord/fetchResidence.php'
let fetchListings = 'http://localhost/living-quarters-portal/src/php/landlord/fetchListings.php'
let fetchTransactions = 'http://localhost/living-quarters-portal/src/php/landlord/fetchTransactions.php'

export const populateState = (props) => {
  axios.post(fetchLandlord, URLlocation)
  .then((response)=> {
    props.addLandlordDetailsMain(
      response.data.username,
      response.data['first name'],
      response.data['last name'],
      response.data.email,
      response.data.password,
      response.data['phone number'],
      response.data.nationalID,
      response.data['pay details']
    )
    axios.post(fetchUsers, response.data.username)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.addTenants(
          resArray[recordIndex].username,
          resArray[recordIndex]['first name'],
          resArray[recordIndex]['last name'],
          resArray[recordIndex].email,
          resArray[recordIndex]['phone number'],
          resArray[recordIndex].nationalID
        )
        recordIndex++
      }
    })
    axios.post(fetchResidence, response.data.username)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.addResidence(
          resArray[recordIndex].rid,
          resArray[recordIndex].qid,
          resArray[recordIndex]['agreement type'],
          resArray[recordIndex].period,
          resArray[recordIndex].activity,
          resArray[recordIndex].session,
          resArray[recordIndex]['start date']
        )
        recordIndex++
      }
    })
    axios.post(fetchListings, response.data.username)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.addListingsDetails(
          resArray[recordIndex].qid,
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
    axios.post(fetchTransactions, response.data.username)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.updateRentHistory(
          resArray[recordIndex].transactionID,
          resArray[recordIndex].payer,
          resArray[recordIndex].payable,
          resArray[recordIndex].method,
          resArray[recordIndex]['reference no'],
          resArray[recordIndex].paid,
          resArray[recordIndex].date
        )
        recordIndex++
      }
    })
  })
}