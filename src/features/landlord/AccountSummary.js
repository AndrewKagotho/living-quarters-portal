const AccountSummary = ({props}) => {
  
  return (
    <div className='tenantSummary'>
      <h2>Summary</h2>
      <span className='description'>A summary of {props.firstName} {props.lastName}'s account information.</span>
      <span className='summaryText'>Fixed monthly rent</span>
      <span className='summaryValue emCurrency'>###</span>
      <span className='summaryText'>Total payable</span>
      <span className='summaryValue emCurrency'>###</span>
      <span className='summaryText'>Current arrears</span>
      <span className='summaryValue emCurrency'>###</span>
    </div>
  )
}

export default AccountSummary