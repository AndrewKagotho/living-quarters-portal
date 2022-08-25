const Account = ({props}) => {

  return (
    <div>
      <h2>Account information</h2>
      <span className='description'>Detailed insights into {props.firstName} {props.lastName}'s tenancy account.</span>
      <div className='grid accountContainer'>
        <h3>Contract agreement:</h3>
        <span className='gridLabel'>Type</span>
        <span className='gridValue'>###</span>
        <span className='gridLabel'>Period</span>
        <span className='gridValue'>###</span>
        <span className='gridLabel'>Fixed monthly rent</span>
        <span className='gridValue emCurrency'>###</span>
        <h3>Balances:</h3>
        <span className='gridLabel'>Previous balance*</span>
        <span className='gridValue currency'>###</span>
        <span className='gridLabel'>Monthly rent</span>
        <span className='gridValue currency'>###</span>
        <hr/>
        <span className='gridLabel'>Total payable*</span>
        <span className='gridValue emCurrency'>###</span>
        <span className='gridLabel'>Amount paid</span>
        <span className='gridValue currency'>###</span>
        <hr/>
        <span className='gridLabel'>Current arrears*</span>
        <span className='gridValue emCurrency'>###</span>
      </div>
    </div>
  )
}

export default Account