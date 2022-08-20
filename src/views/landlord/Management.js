import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import ManageDb from '../../features/landlord/ManageDb'
import '../../styles/management.css'

let dbToDisplay

const Management = (props) => {
  window.onload = () => populateState(props)

  const tableFormDivRef = React.useRef()

  const displayDiv = (dbname) => {
    props.selectedDb(dbname)
    dbToDisplay = dbname
    tableFormDivRef.current.style.display = 'block'
  }

  return (
    <div>
      <h1 className='backgroundArt'>Databases</h1>
      <div className='managementContainer'>
        <div className='dbtables'>
          <span onClick={() => displayDiv('users')}>User</span>
          <span onClick={() => displayDiv('transactions')}>Transactions</span>
          <span onClick={() => displayDiv('residence')}>Residence</span>
          <span onClick={() => displayDiv('quarters')}>Quarters</span>
        </div>
        <div className='tableContainer' ref={tableFormDivRef}>
          <ManageDb props={props} dbToDisplay={dbToDisplay}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username,
    selectedDbName: state.landlord.dbData.selectedDb,
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