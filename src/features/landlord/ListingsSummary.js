const ListingsSummary = ({props}) => {
  
  return (
    <div className='tenantSummary'>
      <h2>Summary</h2>
      <span className='smallFont description'>A summary of {props.firstName} {props.lastName}'s listings information.</span>
      <span className='summaryText'>No. of listings</span>
      <span className='summaryValue'>###</span>
      <span className='summaryText'>Occupancy*</span>
      <span className='summaryValue'>69.7%</span>
    </div>
  )
}

export default ListingsSummary