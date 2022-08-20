import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { mapLandlordDispatchToProps } from '../../store/Actions'

let search = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/search.php'
let getNames = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/getNames.php'

const Search = (props) => {

  const columnRef = React.useRef()
  const valueOneRef = React.useRef()
  const valueTwoRef = React.useRef()

  const changeOptions = () => {
    if(data.column==='session') {
      valueOneRef.current.textContent = 'Fixed'
      valueTwoRef.current.textContent = 'Periodic'
    }
    if(data.column==='agreement type') {
      valueOneRef.current.textContent = 'In'
      valueTwoRef.current.textContent = 'Out'
    }
  }

  const [data, setData] = React.useState({
    column: "agreement type",
    columnValue: "all"
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const searchQuery = {
    column: data.column,
    columnValue: data.columnValue
  }

  const postFields = (e) => {
    props.resetSearchResults ()
    axios.post(search, searchQuery)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while (recordIndex < resArray.length) {
        if(resArray[recordIndex]['first name'] === undefined) {
          axios.post(getNames, response.data[recordIndex].username)
          .then((response) => {
            props.addSearchResults(
              response.data.username,
              response.data['first name'],
              response.data['last name']
            )
          })
        } 
        else {
          props.addSearchResults(
            resArray[recordIndex].username,
            resArray[recordIndex]['first name'],
            resArray[recordIndex]['last name']
          )
        }
        recordIndex++
      }
    })
    e.preventDefault()
  }
  
  const searchResults = props.searchUserName.map((item, index) => 
    <li key={index}>
      <span>{index+1}.</span>
      <span>{props.searchUserName[index]}</span>
      <span>{props.searchFirstName[index]} {props.searchLastName[index]}</span>
    </li>
  )

  return (
    <div className='landlordSearch'>
      <h2>Tenants</h2>
      <div className='filterSearch'>
        <form onSubmit={postFields}>
          <div>
            <label htmlFor='column'>Column:</label>
            <select id='column' name='column' ref={columnRef} onChange={(e) => {handleChange(e); changeOptions()}}>
              <option value='agreement type'>Agreement type</option>
              <option value='session'>Session</option>
            </select>
          </div>
          <div>
            <label htmlFor='values'>Value:</label>
            <select id='values' name='columnValue' onChange={handleChange}>
              <option value='all' defaultValue>All</option>
              <option value='1' ref={valueOneRef}>Fixed</option>
              <option value='2' ref={valueTwoRef}>Periodic</option>
            </select>
          </div>
          <button type='submit'>View</button>
        </form>
      </div>
      <div className='columnFieldsLandlord'>
        <span>Username</span>
        <span>Full name</span>
      </div>
      <div className='searchResults'>
        <ul>{searchResults}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchUserName: state.landlord.searchResults.username,
    searchFirstName: state.landlord.searchResults.firstName,
    searchLastName: state.landlord.searchResults.lastName
  }
}

export default connect(mapStateToProps,mapLandlordDispatchToProps)(Search)