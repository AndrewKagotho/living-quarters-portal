const Account = ({props}) => {
  let prevBalance = 0
  let totalPayable = prevBalance + parseInt(props.quartersPrice)
  let currentBalance = totalPayable - props.paid[0]

  return (
    <section>
      <h2>Account information</h2>
      <span className='description'>Detailed insights into {props.firstName} {props.lastName}'s tenancy account.</span>
      <dl className='dl_grid'>
        <h3>Contract agreement:</h3>
        <dt>Type</dt>
        <dd>xx{props.agreementType}</dd>
        <dt>Period</dt>
        <dd>xx{props.period}</dd>
        <dt>Fixed monthly rent</dt>
        <dd>xx{props.quartersPrice}</dd>
      </dl>
      <dl className='dl_grid'>
        <h3>Balances:</h3>
        <dt>Previous balance*</dt>
        <dd>xx{prevBalance}</dd>
        <dt>Monthly rent</dt>
        <dd>xx{props.quartersPrice}</dd>
      </dl>
      <hr/>
      <dl className='dl_grid'>
        <dt>Total payable*</dt>
        <dd>{totalPayable}</dd>
        <dt>Amount paid</dt>
        <dd>xx{props.paid[0]}</dd>
      </dl>
      <hr/>
      <dl className='dl_grid'>
        <dt>Current arrears*</dt>
        <dd>{currentBalance}</dd>
      </dl>
    </section>
  )
}

export default Account