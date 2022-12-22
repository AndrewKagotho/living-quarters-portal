import axios from 'axios'

let fetchResidence = 'http://localhost/living-quarters-portal/src/php/landlord/fetchResidence.php'
let fetchListings = 'http://localhost/living-quarters-portal/src/php/landlord/fetchListings.php'
let fetchTransactions = 'http://localhost/living-quarters-portal/src/php/landlord/fetchTransactions.php'

export const updateState = (props, dbtable) => {
  if(dbtable==='residence') {
    props.resetTableData(dbtable)
    axios.post(fetchResidence, props.username)
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
  }
  else if(dbtable==='quarters') {
    props.resetTableData(dbtable)
    axios.post(fetchListings, props.username)
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
  }
  else if(dbtable==='transactions') {
    props.resetTableData(dbtable)
    axios.post(fetchTransactions, props.username)
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
  }
}