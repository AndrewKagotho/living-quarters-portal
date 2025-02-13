import React from 'react'
import axios from 'axios'
import { updateState } from '../../utils/L_UpdateState'

let editDbRecordsScript = "http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/editDbRecords.php"
let submitData

const ManageView = ({props, contentView}) => {
  const tableRef = React.useRef()
  const formRef = React.useRef()
  const createFormRef = React.useRef()
  const updateFormRef = React.useRef()
  const deleteFormRef = React.useRef()

  let tableHeader = contentView.view.concat(' data')

  const [transactionsFormData, setTransactionsFormData] = React.useState({
    table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
  })
  
  const [residenceFormData, setResidenceFormData] = React.useState({
    table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
  })

  const [quartersFormData, setQuartersFormData] = React.useState({
    table:"", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
  })

  const resetStates = (view) => {
    if(view==='Transactions')
      setTransactionsFormData({
        table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
      })
    else if(view==='Residence')
      setResidenceFormData({
        table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
      })
    else if(view==='Quarters')
      setQuartersFormData({
        table: "", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
      })
  }

  const showCreateForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'grid'
    updateFormRef.current.style.display = 'none'
    deleteFormRef.current.style.display = 'none'
    resetStates()
  }

  const showUpdateForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'none'
    updateFormRef.current.style.display = 'grid'
    deleteFormRef.current.style.display = 'none'
    resetStates()
  }

  const showDeleteForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'none'
    updateFormRef.current.style.display = 'none'
    deleteFormRef.current.style.display = 'grid'
    resetStates()
  }
  
  const hideEditForm = () => {
    tableRef.current.style.width = '100%'
    formRef.current.style.visibility = 'hidden'
    formRef.current.style.opacity = '0'
  }

  const handleChange = (e, view) => {
    if(view==='Transactions')
      setTransactionsFormData({...transactionsFormData, [e.target.name]:e.target.value})
    else if(view==='Residence')
      setResidenceFormData({...residenceFormData, [e.target.name]:e.target.value})
    else if(view==='Quarters')
      setQuartersFormData({...quartersFormData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e, view, action) => {
    if(view==='Transactions') {
      submitData = {
        table: view,
        type: action,
        tid: transactionsFormData.tid,
        payer: transactionsFormData.payer,
        payee: props.username,
        payable: transactionsFormData.payable,
        method: transactionsFormData.method,
        refNo: transactionsFormData.refNo,
        paid: transactionsFormData.paid,
        date: transactionsFormData.date
      }
    } else if(view==='Residence') {
      submitData = {
        table: view,
        type: action,
        rid: residenceFormData.rid,
        username: residenceFormData.username,
        qid: residenceFormData.qid,
        lid: props.username,
        agreementType: residenceFormData.agreementType,
        period: residenceFormData.period,
        startDate: residenceFormData.startDate,
        activity: residenceFormData.activity,
        session: residenceFormData.session,
        notifs: residenceFormData.notifs
      }
    } else if(view==='Quarters') {
      submitData = {
        table: view,
        type: action,
        qid: quartersFormData.qid,
        name: quartersFormData.name,
        location: quartersFormData.location,
        landlord: props.username,
        vacancies: quartersFormData.vacancies,
        features: quartersFormData.features,
        prices: quartersFormData.prices,
        images: quartersFormData.images
      }
    }

    axios.post(editDbRecordsScript, submitData)
      .then((response) => {
        if(response.statusText==='OK') {
          updateState(props, view)
          alert('Table successfully modified!')
        }
        else
          alert('Action not sucessful!')
      })

    resetStates(view)
    e.preventDefault()
  }

  if(contentView.view==='Tenants') {
    const eachRecord = props.tenantUsernames.map((item,index) => 
      <li key={index} className='tableGrid userTableGrid'>
        <span>{[index+1]}.</span>
        <span>{props.tenantUsernames[index]}</span>
        <span>{props.tenantFirstNames[index]} {props.tenantLastNames[index]}</span>
        <span>{props.tenantPhoneNos[index]}</span>
        <span>{props.tenantNationalIDs[index]}</span>
        <span>{props.tenantEmails[index]}</span>
      </li>
    )
    return (
      <div className='component activeComponent tableDiv'>
          <div className='tableDivHeader'>
            <span>{tableHeader}</span>
          </div>
          <div className='tableGrid userTableGrid tableGridHeader'>
            <span>NO.</span>
            <span>USERNAME (PK)</span>
            <span>NAME</span>
            <span>PHONE</span>
            <span>NATIONAL ID</span>
            <span>EMAIL</span>
          </div>
          <ul className='listingEntry'>{eachRecord}</ul>
      </div>
    )
  }

  if(contentView.view==='Transactions') {
    const eachRecord = props.transactionsID.map((item,index) => 
      <li key={index} className='tableGrid transactionTableGrid' onClick={() => 
        setTransactionsFormData({...transactionsFormData,
          tid: props.transactionsID[index],
          payer: props.transactionPayers[index],
          payee: props.username,
          payable: props.transactionPayable[index],
          method: props.transactionMethods[index],
          refNo: props.transactionRefNos[index],
          paid: props.transactionPaid[index],
          date: props.transactionDates[index]
        })}
      >
        <span>{props.transactionsID[index]}</span>
        <span>{props.transactionPayers[index]}</span>
        <span>{props.username}</span>
        <span>{props.transactionPayable[index]}</span>
        <span>{props.transactionMethods[index]}</span>
        <span>{props.transactionRefNos[index]}</span>
        <span>{props.transactionPaid[index]}</span>
        <span>{props.transactionDates[index]}</span>
      </li>
    )
    return (
      <div className='component activeComponent tableDiv'>
          <div className='tableDivHeader'>
            <span>{tableHeader}</span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='tableGrid transactionTableGrid tableGridHeader'>
            <span>TID (PK)</span>
            <span>PAYER</span>
            <span>PAYEE</span>
            <span>PAYABLE</span>
            <span>METHOD</span>
            <span>REF NO</span>
            <span>PAID</span>
            <span>DATE</span>
          </div>
          <ul className='listingEntry'>{eachRecord}</ul>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createTransactionPayer'>Payer:</label>
            <input type='text' id='createTransactionPayer' name='payer' value={transactionsFormData.payer} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createTransactionPayable'>Payable:</label>
            <input type='text' id='createTransactionPayable' name='payable' value={transactionsFormData.payable} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createTransactionMethod'>Method:</label>
            <input type='text' id='createTransactionMethod' name='method' value={transactionsFormData.method} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createTransactionRef'>Ref. No:</label>
            <input type='text' id='createTransactionRef' name='refNo' value={transactionsFormData.refNo} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createTransactionPaid'>Paid:</label>
            <input type='text' id='createTransactionPaid' name='paid' value={transactionsFormData.paid} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createTransactionDate'>Date:</label>
            <input type='text' id='createTransactionDate' name='date' value={transactionsFormData.date} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'create')}>Add transaction &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateTransactionPayer'>Payer:</label>
            <input type='text' id='updateTransactionPayer' name='payer' value={transactionsFormData.payer} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionPayee'>Payee:</label>
            <input type='text' id='updateTransactionPayee' name='payee' value={transactionsFormData.payee} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionPayable'>Payable:</label>
            <input type='text' id='updateTransactionPayable' name='payable' value={transactionsFormData.payable} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionMethod'>Method:</label>
            <input type='text' id='updateTransactionMethod' name='method' value={transactionsFormData.method} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionRef'>Ref. No:</label>
            <input type='text' id='updateTransactionRef' name='refNo' value={transactionsFormData.refNo} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionPaid'>Paid:</label>
            <input type='text' id='updateTransactionPaid' name='paid' value={transactionsFormData.paid} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateTransactionDate'>Date:</label>
            <input type='text' id='updateTransactionDate' name='date' value={transactionsFormData.date} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'update')}>Update transaction &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
          <label htmlFor='updateTransactionTid'>TID:</label>
            <input type='text' id='updateTransactionTid' name='tid' value={transactionsFormData.tid} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'delete')}>Delete transaction &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  if(contentView.view==='Residence') {
    const eachRecord = props.residenceID.map((item,index) => 
      <li key={index} className='tableGrid residenceTableGrid' onClick={() => 
        setResidenceFormData({...residenceFormData,
          rid: props.residenceID[index],
          username: props.tenantUsernames[index],
          qid: props.residenceQID[index],
          lid: props.username,
          agreementType: props.residenceAgreements[index],
          period: props.residencePeriods[index],
          startDate: props.residenceStartDates[index],
          activity: props.residenceActiveStatus[index],
          session: props.residenceSessions[index]
        })}
      >
        <span>{props.residenceID[index]}</span>
        <span>{props.tenantUsernames[index]}</span>
        <span>{props.residenceQID[index]}</span>
        <span>{props.username}</span>
        <span>{props.residenceAgreements[index]}</span>
        <span>{props.residencePeriods[index]}</span>
        <span>{props.residenceActiveStatus[index]}</span>
        <span>{props.residenceStartDates[index]}</span>
      </li>
    )
    return (
      <div className='component activeComponent tableDiv'>
          <div className='tableDivHeader'>
            <span>{tableHeader}</span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='tableGrid residenceTableGrid tableGridHeader'>
            <span>RID (PK)</span>
            <span>USERNAME</span>
            <span>QID</span>
            <span>LID</span>
            <span>AGREEMENT</span>
            <span>PERIOD</span>
            <span>ACTIVITY</span>
            <span>START DATE</span>
          </div>
          <ul className='listingEntry'>{eachRecord}</ul>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createResidenceUsername'>Username:</label>
            <input type='text' id='createResidenceUsername' name='username' value={residenceFormData.username} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidenceQid'>QID:</label>
            <input type='text' id='createResidenceQid' name='qid' value={residenceFormData.qid} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidenceLid'>LID:</label>
            <textarea type='text' id='createResidenceLid' name='lid' value={residenceFormData.lid} onChange={(e) => handleChange(e, contentView.view)}></textarea>
            <label htmlFor='createResidenceAgreement'>Agreement:</label>
            <input type='text' id='createResidenceAgreement' name='agreementType' value={residenceFormData.agreementType} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidencePeriod'>Period:</label>
            <input type='text' id='createResidencePeriod' name='period' value={residenceFormData.period} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidenceStart'>Start date:</label>
            <input type='text' id='createResidenceStart' name='startDate' value={residenceFormData.startDate} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidenceActivity'>Activity:</label>
            <input type='text' id='createResidenceActivity' name='activity' value={residenceFormData.activity} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createResidenceSession'>Session:</label>
            <input type='text' id='createResidenceSession' name='session' value={residenceFormData.session} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'create')}>Add Residence &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateResidenceRid'>RID:</label>
            <input type='text' id='updateResidenceRid' value={residenceFormData.rid} readOnly/>
            <label htmlFor='updateResidenceUsername'>Username:</label>
            <input type='text' id='updateResidenceUsername' name='username' value={residenceFormData.username} readOnly/>
            <label htmlFor='updateResidenceQid'>QID:</label>
            <input type='text' id='updateResidenceQid' name='qid' value={residenceFormData.qid} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateResidenceAgreement'>Agreement:</label>
            <input type='text' id='updateResidenceAgreement' name='agreementType' value={residenceFormData.agreementType} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateResidencePeriod'>Period:</label>
            <input type='text' id='updateResidencePeriod' name='period' value={residenceFormData.period} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateResidenceStart'>Start date:</label>
            <input type='text' id='updateResidenceStart' name='startDate' value={residenceFormData.startDate} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateResidenceActivity'>Activity:</label>
            <input type='text' id='updateResidenceActivity' name='activity' value={residenceFormData.activity} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateResidenceSession'>Session:</label>
            <input type='text' id='updateResidenceSession' name='session' value={residenceFormData.session} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'update')}>Update Residence &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
          <label htmlFor='deleteResidenceRid'>RID:</label>
            <input type='text' id='deleteResidenceRid' value={residenceFormData.rid} readOnly/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'delete')}>Delete Residence &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  if(contentView.view==='Quarters') {
    const eachRecord = props.quartersID.map((item,index) => 
      <li key={index} className='tableGrid quartersTableGrid' onClick={() => 
        setQuartersFormData({...quartersFormData,
          qid: props.quartersID[index],
          name: props.quartersNames[index],
          location: props.quartersLocations[index],
          landlord: props.username,
          vacancies: props.quartersVacancies[index],
          features: props.quartersFeatures[index],
          prices: props.quartersPrices[index],
          images: props.quartersImages[index]
        })}
      >
        <span>{props.quartersID[index]}</span>
        <span>{props.quartersNames[index]}</span>
        <span>{props.quartersLocations[index]}</span>
        <span>{props.username}</span>
        <span>{props.quartersVacancies[index]}</span>
        <span>{props.quartersFeatures[index]}</span>
        <span>{props.quartersPrices[index]}</span>
        <span>{props.quartersImages[index]}</span>
      </li>
    )
    return (
      <div className='component activeComponent tableDiv'>
          <div className='tableDivHeader'>
            <span>{tableHeader}</span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='tableGrid quartersTableGrid tableGridHeader'>
            <span>QID (PK)</span>
            <span>NAME</span>
            <span>LOCATION</span>
            <span>LANDLORD</span>
            <span>VACANCIES</span>
            <span>FEATURES</span>
            <span>PRICES</span>
            <span>IMAGES</span>
          </div>
          <ul className='listingEntry'>{eachRecord}</ul>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createname'>Name:</label>
            <input type='text' id='createname' name='name' value={quartersFormData.name} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createlocation'>Location:</label>
            <input type='text' id='createlocation' name='location' value={quartersFormData.location} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createvacancies'>Vacancies:</label>
            <input type='text' id='createvacancies' name='vacancies' value={quartersFormData.vacancies} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createfeatures'>Features:</label>
            <textarea type='text' id='createfeatures' name='features' value={quartersFormData.features} onChange={(e) => handleChange(e, contentView.view)}></textarea>
            <label htmlFor='createprices'>Prices:</label>
            <input type='text' id='createprices' name='prices' value={quartersFormData.prices} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='createimages'>Images:</label>
            <input type='text' id='createimages' name='images' value={quartersFormData.images} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'create')}>Add listing &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateqid'>QID:</label>
            <input type='text' id='updateqid' name='qid' value={quartersFormData.qid} readOnly/>
            <label htmlFor='updatename'>Name:</label>
            <input type='text' id='updatename' name='name' value={quartersFormData.name} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updatelocation'>Location:</label>
            <input type='text' id='updatelocation' name='location' value={quartersFormData.location} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updatevacancies'>Vacancies:</label>
            <input type='text' id='updatevacancies' name='vacancies' value={quartersFormData.vacancies} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updatefeatures'>Features:</label>
            <textarea type='text' id='updatefeatures' name='features' value={quartersFormData.features} onChange={(e) => handleChange(e, contentView.view)}></textarea>
            <label htmlFor='updateprices'>Prices:</label>
            <input type='text' id='updateprices' name='prices' value={quartersFormData.prices} onChange={(e) => handleChange(e, contentView.view)}/>
            <label htmlFor='updateimages'>Images:</label>
            <input type='text' id='updateimages' name='images' value={quartersFormData.images} onChange={(e) => handleChange(e, contentView.view)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view,'update')}>Update listing &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
            <label htmlFor='deleteqid'>QID:</label>
            <input type='text' id='deleteqid' name='qid' value={quartersFormData.qid} readOnly/>
            <button type='submit' onClick={(e) => handleSubmit(e, contentView.view, 'delete')}>Delete listing &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>Select option from menu to view...</div>
  )
}

export default ManageView