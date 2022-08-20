import{ connect } from 'react-redux'

const Transactions = (props) => {
  let dateTimeStamp = []
  let dateStamp = []

  for(let i=0; i<props.date.length; i++)
    dateTimeStamp[i] = props.date[i].split(' ')

  for(let i=0; i<dateTimeStamp.length; i++) {
    dateStamp[i] = dateTimeStamp[i][0].split('-')
  }

  const transaction = props.paid.map((item, index) => 
    <li key={index} className='eachRentTransaction'>
      <span>{props.payers[index]}</span>
      <span>{dateStamp[index][2]}/{dateStamp[index][1]}/{dateStamp[index][0]}</span>
      <span>{props.method[index]}</span>
      <span>{props.refNo[index]}</span>
      <span>{props.payable[index]}</span>
      <span>{props.paid[index]}</span>
    </li>
  )

  return (
    <div className='allRentTransactions'>
      <h2>History of Rent Transactions</h2>
      <div className='columnFields'>
        <span>PAYER</span>
        <span>DATE</span>
        <span>METHOD</span>
        <span>REFERENCE NO.</span>
        <span>TOTAL</span>
        <span>PAID</span>
      </div>
      <ul>{transaction}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    payers: state.landlord.transactions.payers,
    payee: state.landlord.transactions.payee,
    payable: state.landlord.transactions.payable,
    method: state.landlord.transactions.methods,
    refNo: state.landlord.transactions.refNos,
    paid: state.landlord.transactions.paid,
    date: state.landlord.transactions.dates
  }
}

export default connect(mapStateToProps)(Transactions)