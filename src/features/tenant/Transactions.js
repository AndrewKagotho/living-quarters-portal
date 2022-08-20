import { connect } from 'react-redux'

const Transactions = (props) => {
  let dateTimeStamp = []
  let dateStamp = []

  for(let i=0; i<props.date.length; i++)
    dateTimeStamp[i] = props.date[i].split(' ')

  for(let i=0; i<dateTimeStamp.length; i++) {
    dateStamp[i] = dateTimeStamp[i][0].split('-')
  }

  const transaction = props.paid.map((item, index) => 
    <li key={index} className='eachUserRentTransaction'>
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
      <div className='userColumnFields'>
        <span>DATE</span>
        <span>METHOD</span>
        <span>REFERENCE NO.</span>
        <span>PAYABLE</span>
        <span>PAID</span>
      </div>
      <ul>{transaction}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    payable: state.user.transactions.payable,
    method: state.user.transactions.method,
    refNo: state.user.transactions.refNo,
    paid: state.user.transactions.paid,
    date: state.user.transactions.date
  }
}

export default connect(mapStateToProps)(Transactions)