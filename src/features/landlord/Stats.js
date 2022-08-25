import React from 'react'

const Stats = ({props}) => {

  let totalListings = props.listingName.length
  let totalVacancies = 0
  let totalTenants = props.tenantUsernames.length + 69
  let tenantGain = 27
  let tenantLoss = 6
  let turnover = Math.round(tenantLoss / totalTenants * 1000) / 10
  let netGain = tenantGain - tenantLoss
  if(netGain > 0)
    netGain = '+' + netGain

  for(let x in props.listingVacancy)
    totalVacancies += parseInt(props.listingVacancy[x])

  let totalCapacity = totalVacancies + totalTenants
  let occupancy = Math.round(totalTenants / totalCapacity * 1000) / 10

  const listing = props.listingID.map((item, index) => 
    <li key={index} className='tableGrid statTableGrid'>
      <span className='tableGridFirstCol'>{props.listingName[index]}</span>
      <span>{props.tenantUsernames.length}</span>
      <span>{props.listingVacancy[index]}</span>
      <span>12</span>
    </li>
  )

  return (
    <div className='statsDiv'>
      <div className='component activeComponent stats'>
        <h2>Insights</h2>
        <span className='description'>Insights on occupancy trends (this month).</span>
        <div className='trendsContainer'>
          <div>
            <span>Gain:</span>
            <em>{tenantGain}</em>
          </div>
          <div>
            <span>Loss:</span>
            <em>{tenantLoss}</em>
          </div>
          <div>
            <span>Net gain:</span>
            <em>{netGain}</em>
          </div>
          <div>
            <span>Turnover:</span>
            <em>{turnover}%</em>
          </div>
        </div>
      </div>
      <div className='component activeComponent stats'>
        <h2>Statistics</h2>
        <span className='description'>Summary of {props.firstName} {props.lastName}'s account by numbers.</span>
        <div className='grid statsContainer'>
          <div>
            <span>Number of listings:</span>
            <em>{totalListings}</em>
          </div>
          <div>
            <span>Total capacity*:</span>
            <em>{totalCapacity}</em>
          </div>
          <div>
          <span>Number of tenants:</span>
            <em>{totalTenants}</em>
          </div>
          <div>
            <span>Total vacancies:</span>
            <em>{totalVacancies}</em>
          </div>
          <div></div>
          <div>
            <span>Occupancy (%):</span>
            <em>{occupancy}</em>
          </div>
        </div>
      </div>
      <div className='component activeComponent stats'>
        <h2>Numbers by listing</h2>
        <span className='description'>Insights on individual listings.</span>
        <div className='tableGrid statTableGrid tableGridHeader'>
          <span className='tableGridFirstCol'>Name</span>
          <span>Tenants</span>
          <span>Vacancies</span>
          <span>Capacity</span>
        </div>
        <ul className='listingEntry'>{listing}</ul>
      </div>
    </div>
  )
}

export default Stats