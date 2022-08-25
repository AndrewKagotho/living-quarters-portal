import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import { highlightMenu } from '../../utils/HighlightMenu'
import ManageView from '../../features/landlord/ManageView'

const Management = (props) => {
  window.onload = () => populateState(props)

  React.useEffect(() => {
    highlightMenu(contentView, refArray)
    // eslint-disable-next-line
  }, [])
  
  const [contentView, setView] = React.useState({view: 'Tenants', num: 0})
  const tenantsRef = React.useRef()
  const transactionsRef = React.useRef()
  const residenceRef = React.useRef()
  const quartersRef  = React.useRef()
  const refArray = [tenantsRef, transactionsRef, residenceRef, quartersRef]

  const viewContent = (arg, num) => {
    setView({view: arg, num: num})
    // highlightMenu(contentView, refArray)

    for(let index=0; index<refArray.length; index++) {
      if(index===num) {
        refArray[index].current.style.backgroundColor = 'var(--theme)'
        refArray[index].current.style.color = 'var(--neutral)'
        continue
      }
      refArray[index].current.style.backgroundColor = 'transparent'
      refArray[index].current.style.color = 'var(--font)'
    }
  }

  return (
    <div>
      <h1 className='backgroundArt'>{contentView.view}</h1>
      <div className='container'>
        <div className='tenantMain'>
          <div className='menu'>
            <h2>Database tables</h2>
            <ul>
              <li onClick={() => viewContent('Tenants', 0)} ref={tenantsRef}>Tenants</li>
              <li onClick={() => viewContent('Transactions', 1)} ref={transactionsRef}>Transactions</li>
              <li onClick={() => viewContent('Residence', 2)} ref={residenceRef}>Residence</li>
              <li onClick={() => viewContent('Quarters', 3)} ref={quartersRef}>Listings</li>
            </ul>
          </div>
          <div className='selectedMenuOption'>
            <ManageView props={props} contentView={contentView}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username,
    tenantUsernames: state.landlord.tenants.usernames,
    tenantFirstNames: state.landlord.tenants.firstNames,
    tenantLastNames: state.landlord.tenants.lastNames,
    tenantEmails: state.landlord.tenants.emails,
    tenantPhoneNos: state.landlord.tenants.phoneNos,
    tenantNationalIDs: state.landlord.tenants.nationalIDs,
    transactionsID: state.landlord.transactions.transactionsID,
    transactionPayers: state.landlord.transactions.payers,
    transactionPayable: state.landlord.transactions.payable,
    transactionMethods: state.landlord.transactions.methods,
    transactionRefNos: state.landlord.transactions.refNos,
    transactionPaid: state.landlord.transactions.paid,
    transactionDates: state.landlord.transactions.dates,
    residenceID: state.landlord.tenants.residenceID,
    residenceQID: state.landlord.tenants.quartersID,
    residenceAgreements: state.landlord.tenants.agreementTypes,
    residencePeriods: state.landlord.tenants.periods,
    residenceActiveStatus: state.landlord.tenants.activeStatus,
    residenceStartDates: state.landlord.tenants.startDates,
    residenceSessions: state.landlord.tenants.sessions,
    quartersID: state.landlord.listings.qid,
    quartersNames: state.landlord.listings.names,
    quartersLocations: state.landlord.listings.locations,
    quartersVacancies: state.landlord.listings.vacancies,
    quartersFeatures: state.landlord.listings.features,
    quartersPrices: state.landlord.listings.prices,
    quartersImages: state.landlord.listings.images
  }
}

export default connect(mapStateToProps,mapLandlordDispatchToProps)(Management)