import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { populateState } from '../../utils/U_PopulateState'
import { mapUserDispatchToProps } from '../../store/Actions'
import { convertDateTime } from '../../utils/Date'
import { getMessages } from '../../utils/U_PopulateState'

let sendMss = 'http://localhost/living-quarters-portal/src/php/sendMessage.php'

const Messages = (props) => {
  window.onload = () => {
    populateState(props)
    getMessages(props, mssData)
  }

  const dateTime = convertDateTime(props)
  const textArea = React.useRef()
  
  const [mss, setMss] = React.useState({
    mssFrom: props.username,
    mssTo: props.landlord,
    mssBody: ""
  })
  
  let mssData = {
    mssTenant: props.username,
    mssLandlord: props.landlord
  }
  
  const handleChange = (e) => setMss({...mss, mssBody: e.target.value})

  const handleSubmit = (e) => {
    axios.post(sendMss, mss)
    .then(() => {
      getMessages(props, mssData)
      setMss({...mss, mssBody:''})
    })
    e.preventDefault()
  }

  const messageBubble = props.messageTime.map((item, index) => {
    if(props.messageFrom[index]===props.username)
      return (
        <li key={index} className='my_message'>
          <span>{props.messageBody[index]}</span>
          <span>
            {dateTime.timeStamp[index][0]}:{dateTime.timeStamp[index][1]} on {dateTime.dateStamp[index][2]} {dateTime.dateStampInText[index]}, {dateTime.dateStamp[index][0]}
          </span>
        </li>
      )
    else
    return (
      <li key={index}>
        <span>{props.messageBody[index]}</span>
        <span>
          {dateTime.timeStamp[index][0]}:{dateTime.timeStamp[index][1]} on {dateTime.dateStamp[index][2]} {dateTime.dateStampInText[index]}, {dateTime.dateStamp[index][0]}
        </span>
      </li>
    )
  })

  return (
    <div className='messages_container'>
      <div>
        <ul>{messageBubble}</ul>
      </div>
      <form onSubmit={handleSubmit} className='sendMessage'>
        <textarea value={mss.mssBody} placeholder='Type your message here...' ref={textArea} onChange={handleChange}></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messageFrom: state.user.messages.from,
    messageTo: state.user.messages.to,
    messageTime: state.user.messages.time,
    messageBody: state.user.messages.body,
    username: state.user.details.username,
    landlord: state.user.residence.quartersLandlord,
    landlordFirstName: state.user.landlord.firstName,
    landlordLastName: state.user.landlord.lastName,
  }
}

export default connect(mapStateToProps,mapUserDispatchToProps)(Messages)