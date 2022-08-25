const Account = ({props}) => {
  let prevBalance = 1200
  let totalPayable = prevBalance + parseInt(props.quartersPrice)
  let currentBalance = totalPayable - props.paid[0]

  return (
    <div>
      <h2>Account information</h2>
      <span className='description'>Detailed insights into {props.firstName} {props.lastName}'s tenancy account.</span>
      <div className='grid'>
        <h3>Contract agreement:</h3>
        <span className='gridLabel'>Type</span>
        <span className='gridValue'>{props.agreementType}</span>
        <span className='gridLabel'>Period</span>
        <span className='gridValue'>{props.period}</span>
        <span className='gridLabel'>Fixed monthly rent</span>
        <span className='gridValue emCurrency'>{props.quartersPrice}</span>
        <h3>Balances:</h3>
        <span className='gridLabel'>Previous balance*</span>
        <span className='gridValue currency'>{prevBalance}</span>
        <span className='gridLabel'>Monthly rent</span>
        <span className='gridValue currency'>{props.quartersPrice}</span>
        <hr/>
        <span className='gridLabel'>Total payable*</span>
        <span className='gridValue emCurrency'>{totalPayable}</span>
        <span className='gridLabel'>Amount paid</span>
        <span className='gridValue currency'>{props.paid[0]}</span>
        <hr/>
        <span className='gridLabel'>Current arrears*</span>
        <span className='gridValue emCurrency'>{currentBalance}</span>
      </div>
    </div>
  )
}

export default Account