const AccountSummary = ({props}) => {
  let prevBalance = 1200
  let totalPayable = prevBalance + parseInt(props.quartersPrice)
  let currentBalance = totalPayable - props.paid[0]
  
  return (
    <div className='tenantSummary'>
      <h2>Summary</h2>
      <span className='description'>A summary of {props.firstName} {props.lastName}'s account information.</span>
      <span className='summaryText'>Fixed monthly rent</span>
      <span className='summaryValue emCurrency'>{props.quartersPrice}</span>
      <span className='summaryText'>Total payable</span>
      <span className='summaryValue emCurrency'>{totalPayable}</span>
      <span className='summaryText'>Current arrears</span>
      <span className='summaryValue emCurrency'>{currentBalance}</span>
    </div>
  )
}

export default AccountSummary