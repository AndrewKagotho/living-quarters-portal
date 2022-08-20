import { connect } from 'react-redux'

const Summary = (props) => {
  let prevBalance = 1200
  let totalPayable = prevBalance + parseInt(props.price)
  let currentBalance = totalPayable - props.paid[0]
  
  return (
    <div className='tenantSummary'>
      <h2>Summary</h2>
      <span className='smallFont description'>A summary of {props.firstName} {props.lastName}'s account information.</span>
      <span className='summaryText'>Fixed monthly rent</span>
      <span className='summaryValue emCurrency'>{props.price}</span>
      <span className='summaryText'>Total payable</span>
      <span className='summaryValue emCurrency'>{totalPayable}</span>
      <span className='summaryText'>Current arrears</span>
      <span className='summaryValue emCurrency'>{currentBalance}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.details.firstName,
    lastName: state.user.details.lastName,
    price: state.user.residence.quartersPrice,
    paid: state.user.transactions.paid
  }
}

export default connect(mapStateToProps)(Summary)