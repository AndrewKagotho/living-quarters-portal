import React from 'react'
import axios from 'axios'
import { updateState } from '../../utils/L_UpdateState'

let editDbRecordsScript = "http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/editDbRecords.php"
let tableHeader, submitData

const ManageDb = ({props, dbToDisplay}) => {
  const tableRef = React.useRef()
  const formRef = React.useRef()
  const createFormRef = React.useRef()
  const updateFormRef = React.useRef()
  const deleteFormRef = React.useRef()

  if(props.selectedDbName==='users')
    tableHeader = 'User information'
  else if(props.selectedDbName==='transactions')
    tableHeader = 'Transaction history'
  else if(props.selectedDbName==='residence')
    tableHeader = 'Residence information'
  else if(props.selectedDbName==='quarters')
    tableHeader = 'Listings information'

  const [transactionsFormData, setTransactionsFormData] = React.useState({
    table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
  })
  
  const [residenceFormData, setResidenceFormData] = React.useState({
    table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
  })

  const [quartersFormData, setQuartersFormData] = React.useState({
    table:"", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
  })

  const showCreateForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'grid'
    updateFormRef.current.style.display = 'none'
    deleteFormRef.current.style.display = 'none'
    setTransactionsFormData({
      table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
    })
    setResidenceFormData({
      table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
    })
    setQuartersFormData({
      table: "", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
    })
  }

  const showUpdateForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'none'
    updateFormRef.current.style.display = 'grid'
    deleteFormRef.current.style.display = 'none'
    setTransactionsFormData({
      table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
    })
    setResidenceFormData({
      table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
    })
    setQuartersFormData({
      table: "", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
    })
  }

  const showDeleteForm = () => {
    tableRef.current.style.width = '78%'
    formRef.current.style.visibility = 'visible'
    formRef.current.style.opacity = '1'
    createFormRef.current.style.display = 'none'
    updateFormRef.current.style.display = 'none'
    deleteFormRef.current.style.display = 'grid'
    setTransactionsFormData({
      table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
    })
    setResidenceFormData({
      table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
    })
    setQuartersFormData({
      table: "", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
    })
  }
  
  const hideEditForm = () => {
    tableRef.current.style.width = '100%'
    formRef.current.style.visibility = 'hidden'
    formRef.current.style.opacity = '0'
  }

  const handleChange = (e, dbtable) => {
    if(dbtable==='transactions')
      setTransactionsFormData({...transactionsFormData, [e.target.name]:e.target.value})
    else if(dbtable==='residence')
      setResidenceFormData({...residenceFormData, [e.target.name]:e.target.value})
    else if(dbtable==='quarters')
      setQuartersFormData({...quartersFormData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e, dbtable, action) => {
    if(dbtable==='transactions') {
      submitData = {
        table: dbtable,
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
    } else if(dbtable==='residence') {
      submitData = {
        table: dbtable,
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
    } else if(dbtable==='quarters') {
      submitData = {
        table: dbtable,
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
          updateState(props, dbtable)
          alert('Table successfully modified!')
        }
        else
          alert('Action not sucessful!')
      })

    if(dbtable==='transactions')
      setTransactionsFormData({
        table: "", type:"", tid: "", payer: "", payee: "", payable: "", method: "", refNo: "", paid: "", date: ""
      })
    else if(dbtable==='residence')
      setResidenceFormData({
        table: "", type:"", rid:"", username:"", qid:"", lid:"", agreementType:"", period:"", startDate:"", activity:"", session:"", notifs:""
      })
    else if(dbtable==='quarters')
      setQuartersFormData({
        table: "", type:"", qid:"", name:"", location:"", landlord:"", vacancies:"", features:"", prices:"", images:""
      })

    e.preventDefault()
  }

  if(dbToDisplay==='users') {
    const eachRecord = props.tenantUsernames.map((item,index) => 
      <li key={index} className='eachRecord eachUserRecord'>
        <span>{[index+1]}.</span>
        <span>{props.tenantUsernames[index]}</span>
        <span>{props.tenantFirstNames[index]} {props.tenantLastNames[index]}</span>
        <span>{props.tenantPhoneNos[index]}</span>
        <span>{props.tenantNationalIDs[index]}</span>
        <span>{props.tenantEmails[index]}</span>
      </li>
    )
    return (
      <div>
        <div className='tableDiv' ref={tableRef}>
          <div className='tableDivHeader'>
            <span>{tableHeader} <em>(showing from table: {props.selectedDbName})</em></span>
          </div>
          <div className='dbColumns userDbColumns'>
            <span>NO.</span>
            <span>USERNAME (PK)</span>
            <span>NAME</span>
            <span>PHONE</span>
            <span>NATIONAL ID</span>
            <span>EMAIL</span>
          </div>
          <ul>{eachRecord}</ul>
        </div>
        <div className='managementFormDiv' ref={formRef}>
          <span onClick={hideEditForm}>close</span>
        </div>
      </div>
    )
  }

  if(dbToDisplay==='transactions') {
    const eachRecord = props.transactionsID.map((item,index) => 
      <li key={index} className='eachRecord eachTransactionsRecord' onClick={() => 
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
      <div>
        <div className='tableDiv' ref={tableRef}>
          <div className='tableDivHeader'>
            <span>{tableHeader} <em>(showing from table: {props.selectedDbName})</em></span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='dbColumns transactionsDbColumns'>
            <span>TID (PK)</span>
            <span>PAYER</span>
            <span>PAYEE</span>
            <span>PAYABLE</span>
            <span>METHOD</span>
            <span>REF NO</span>
            <span>PAID</span>
            <span>DATE</span>
          </div>
          <ul>{eachRecord}</ul>
        </div>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createTransactionPayer'>Payer:</label>
            <input type='text' id='createTransactionPayer' name='payer' value={transactionsFormData.payer} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createTransactionPayable'>Payable:</label>
            <input type='text' id='createTransactionPayable' name='payable' value={transactionsFormData.payable} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createTransactionMethod'>Method:</label>
            <input type='text' id='createTransactionMethod' name='method' value={transactionsFormData.method} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createTransactionRef'>Ref. No:</label>
            <input type='text' id='createTransactionRef' name='refNo' value={transactionsFormData.refNo} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createTransactionPaid'>Paid:</label>
            <input type='text' id='createTransactionPaid' name='paid' value={transactionsFormData.paid} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createTransactionDate'>Date:</label>
            <input type='text' id='createTransactionDate' name='date' value={transactionsFormData.date} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'create')}>Add transaction &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateTransactionPayer'>Payer:</label>
            <input type='text' id='updateTransactionPayer' name='payer' value={transactionsFormData.payer} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionPayee'>Payee:</label>
            <input type='text' id='updateTransactionPayee' name='payee' value={transactionsFormData.payee} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionPayable'>Payable:</label>
            <input type='text' id='updateTransactionPayable' name='payable' value={transactionsFormData.payable} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionMethod'>Method:</label>
            <input type='text' id='updateTransactionMethod' name='method' value={transactionsFormData.method} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionRef'>Ref. No:</label>
            <input type='text' id='updateTransactionRef' name='refNo' value={transactionsFormData.refNo} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionPaid'>Paid:</label>
            <input type='text' id='updateTransactionPaid' name='paid' value={transactionsFormData.paid} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateTransactionDate'>Date:</label>
            <input type='text' id='updateTransactionDate' name='date' value={transactionsFormData.date} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'update')}>Update transaction &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
          <label htmlFor='updateTransactionTid'>TID:</label>
            <input type='text' id='updateTransactionTid' name='tid' value={transactionsFormData.tid} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'delete')}>Delete transaction &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  if(dbToDisplay==='residence') {
    const eachRecord = props.residenceID.map((item,index) => 
      <li key={index} className='eachRecord eachResidenceRecord' onClick={() => 
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
        <span>{props.residenceStartDates[index]}</span>
        <span>{props.residenceActiveStatus[index]}</span>
        <span>{props.residenceSessions[index]}</span>
      </li>
    )
    return (
      <div>
        <div className='tableDiv' ref={tableRef}>
          <div className='tableDivHeader'>
            <span>{tableHeader} <em>(showing from table: {props.selectedDbName})</em></span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='dbColumns residenceDbColumns'>
            <span>RID (PK)</span>
            <span>USERNAME</span>
            <span>QID</span>
            <span>LID</span>
            <span>AGREEMENT</span>
            <span>PERIOD</span>
            <span>START DATE</span>
            <span>ACTIVITY</span>
            <span>SESSION</span>
          </div>
          <ul>{eachRecord}</ul>
        </div>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createResidenceUsername'>Username:</label>
            <input type='text' id='createResidenceUsername' name='username' value={residenceFormData.username} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidenceQid'>QID:</label>
            <input type='text' id='createResidenceQid' name='qid' value={residenceFormData.qid} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidenceLid'>LID:</label>
            <textarea type='text' id='createResidenceLid' name='lid' value={residenceFormData.lid} onChange={(e) => handleChange(e, dbToDisplay)}></textarea>
            <label htmlFor='createResidenceAgreement'>Agreement:</label>
            <input type='text' id='createResidenceAgreement' name='agreementType' value={residenceFormData.agreementType} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidencePeriod'>Period:</label>
            <input type='text' id='createResidencePeriod' name='period' value={residenceFormData.period} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidenceStart'>Start date:</label>
            <input type='text' id='createResidenceStart' name='startDate' value={residenceFormData.startDate} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidenceActivity'>Activity:</label>
            <input type='text' id='createResidenceActivity' name='activity' value={residenceFormData.activity} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createResidenceSession'>Session:</label>
            <input type='text' id='createResidenceSession' name='session' value={residenceFormData.session} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'create')}>Add residence &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateResidenceRid'>RID:</label>
            <input type='text' id='updateResidenceRid' value={residenceFormData.rid} readOnly/>
            <label htmlFor='updateResidenceUsername'>Username:</label>
            <input type='text' id='updateResidenceUsername' name='username' value={residenceFormData.username} readOnly/>
            <label htmlFor='updateResidenceQid'>QID:</label>
            <input type='text' id='updateResidenceQid' name='qid' value={residenceFormData.qid} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateResidenceAgreement'>Agreement:</label>
            <input type='text' id='updateResidenceAgreement' name='agreementType' value={residenceFormData.agreementType} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateResidencePeriod'>Period:</label>
            <input type='text' id='updateResidencePeriod' name='period' value={residenceFormData.period} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateResidenceStart'>Start date:</label>
            <input type='text' id='updateResidenceStart' name='startDate' value={residenceFormData.startDate} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateResidenceActivity'>Activity:</label>
            <input type='text' id='updateResidenceActivity' name='activity' value={residenceFormData.activity} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateResidenceSession'>Session:</label>
            <input type='text' id='updateResidenceSession' name='session' value={residenceFormData.session} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'update')}>Update residence &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
          <label htmlFor='deleteResidenceRid'>RID:</label>
            <input type='text' id='deleteResidenceRid' value={residenceFormData.rid} readOnly/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'delete')}>Delete residence &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  if(dbToDisplay==='quarters') {
    const eachRecord = props.quartersID.map((item,index) => 
      <li key={index} className='eachRecord eachQuartersRecord' onClick={() => 
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
      <div>
        <div className='tableDiv' ref={tableRef}>
          <div className='tableDivHeader'>
            <span>{tableHeader} <em>(showing from table: {props.selectedDbName})</em></span>
            <button onClick={showDeleteForm}>Delete</button>
            <button onClick={showUpdateForm}>Update</button>
            <button onClick={showCreateForm}>Create</button>
          </div>
          <div className='dbColumns quartersDbColumns'>
            <span>QID (PK)</span>
            <span>NAME</span>
            <span>LOCATION</span>
            <span>LANDLORD</span>
            <span>VACANCIES</span>
            <span>FEATURES</span>
            <span>PRICES</span>
            <span>IMAGES</span>
          </div>
          <ul>{eachRecord}</ul>
        </div>
        <div className='managementFormDiv' ref={formRef}>
          <button className='minimizeFormButton' onClick={hideEditForm}>Close</button>
          <span>(Click on a record to populate the fields below)</span>
          <form className='createListingForm' ref={createFormRef}>
            <label htmlFor='createname'>Name:</label>
            <input type='text' id='createname' name='name' value={quartersFormData.name} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createlocation'>Location:</label>
            <input type='text' id='createlocation' name='location' value={quartersFormData.location} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createvacancies'>Vacancies:</label>
            <input type='text' id='createvacancies' name='vacancies' value={quartersFormData.vacancies} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createfeatures'>Features:</label>
            <textarea type='text' id='createfeatures' name='features' value={quartersFormData.features} onChange={(e) => handleChange(e, dbToDisplay)}></textarea>
            <label htmlFor='createprices'>Prices:</label>
            <input type='text' id='createprices' name='prices' value={quartersFormData.prices} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='createimages'>Images:</label>
            <input type='text' id='createimages' name='images' value={quartersFormData.images} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'create')}>Add listing &gt;</button>
          </form>
          <form className='updateListingForm' ref={updateFormRef}>
            <label htmlFor='updateqid'>QID:</label>
            <input type='text' id='updateqid' name='qid' value={quartersFormData.qid} readOnly/>
            <label htmlFor='updatename'>Name:</label>
            <input type='text' id='updatename' name='name' value={quartersFormData.name} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updatelocation'>Location:</label>
            <input type='text' id='updatelocation' name='location' value={quartersFormData.location} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updatevacancies'>Vacancies:</label>
            <input type='text' id='updatevacancies' name='vacancies' value={quartersFormData.vacancies} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updatefeatures'>Features:</label>
            <textarea type='text' id='updatefeatures' name='features' value={quartersFormData.features} onChange={(e) => handleChange(e, dbToDisplay)}></textarea>
            <label htmlFor='updateprices'>Prices:</label>
            <input type='text' id='updateprices' name='prices' value={quartersFormData.prices} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <label htmlFor='updateimages'>Images:</label>
            <input type='text' id='updateimages' name='images' value={quartersFormData.images} onChange={(e) => handleChange(e, dbToDisplay)}/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay,'update')}>Update listing &gt;</button>
          </form>
          <form className='deleteListingForm' ref={deleteFormRef}>
            <label htmlFor='deleteqid'>QID:</label>
            <input type='text' id='deleteqid' name='qid' value={quartersFormData.qid} readOnly/>
            <button type='submit' onClick={(e) => handleSubmit(e, dbToDisplay, 'delete')}>Delete listing &gt;</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>Refresh the page...</div>
  )
}

export default ManageDb