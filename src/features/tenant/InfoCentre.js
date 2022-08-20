import { connect } from 'react-redux'

const InfoCentre = (props) => {
  let arrears = String(props.payable[0]-props.paid[0])
  
  return (
    <div className='rent'>
      <h2>Information Centre</h2>
      <div className='info'>
        <div className='infoLeft'>
          <div className='agreementDiv'>
            <span className='agreement'>Type of agreement:</span>
            <span className='agreementText'>{props.agreementType}</span>
          </div>
          <div className='periodDiv'>
            <span className='period'>Period:</span>
            <span className='periodText'>{props.period}</span>
          </div>
          <div className='payableDiv'>
            <span className='payable'>Monthly rent:</span>
            <span className='payableInt'>{props.rent}</span>
          </div>
          <div className='arrearsDiv'>
            <span className='arrears'>Arrears:</span>
            <span className='arrearsInt'>{arrears}</span>
          </div>
          <div className='nextPayDiv'>
            <span className='nextpay'>Next pay:</span>
            <span className='nextpayText'>Due date is 2 days away</span>
          </div>
        </div>
        <div className='infoRight'>
          <span className='payDetails'>Pay Details:</span>
          <span className='payDetailsText'>{props.payDetails}</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    agreementType: state.user.residence.agreementType,
    period: state.user.residence.period,
    rent: state.user.residence.quartersPrice,
    payable: state.user.transactions.payable,
    paid: state.user.transactions.paid,
    payDetails: state.user.landlord.payDetails
  }
}

export default connect(mapStateToProps)(InfoCentre)