const AccountSummary = ({props}) => {

  let prevBalance = 1200
  let totalPayable = prevBalance + parseInt(props.quartersPrice)
  let currentBalance = totalPayable - props.paid[0]
  
  return (
    <section className='section_account'>
      <h2>Summary</h2>
      <span className='description'>A summary of {props.firstName} {props.lastName}'s account information.</span>
      <dl>
        <dt>Fixed monthly rent</dt>
        <dd>{props.quartersPrice}</dd>
        <dt>Total payable</dt>
        <dd>{totalPayable}</dd>
        <dt>Current arrears</dt>
        <dd>{currentBalance}</dd>
      </dl>
    </section>
  )
}

export default AccountSummary