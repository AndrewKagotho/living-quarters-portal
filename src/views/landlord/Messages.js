import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { populateState } from '../../utils/L_PopulateState'
import { mapLandlordDispatchToProps } from '../../store/Actions'
import { getTenants } from '../../layouts/LandlordNav'
import '../../styles/messages.css'

const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let dateTimeStamp = []
let dateStamp = []
let dateStampInText = []
let timeStamp = []
let fetchMss = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/fetchMessages.php'
let sendMss = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlord/sendMessage.php'

const Messages = (props) => {
  window.onload = () => populateState(props)

  const selectedChat = React.useRef([])
  const messagesRef = React.useRef()
  const textArea = React.useRef()

  React.useEffect(() => {
    getTenants(props)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [mss, setMss] = React.useState({
    mssFrom: props.username,
    mssTo:"",
    mssBody:""
  })

  const handleChange = (e) => {
    setMss({...mss, mssBody: e.target.value})
  }

  const handleSubmit = (e) => {
    axios.post(sendMss, mss)
    .then(() => {
      getMessages(mss.mssTo)
      setMss({...mss, mssBody:''})
    })
    e.preventDefault()
  }

  for(let i=0; i<props.messageTime.length; i++)
    dateTimeStamp[i] = props.messageTime[i].split(' ')

  for(let i=0; i<dateTimeStamp.length; i++) {
    dateStamp[i] = dateTimeStamp[i][0].split('-')
    timeStamp[i] = dateTimeStamp[i][1].split(':')
  }

  for(let i=0; i<dateStamp.length; i++)
    dateStampInText[i] = Months[dateStamp[i][1]-1]

  const updateMssComponents = (index) => {
    messagesRef.current.style.display = 'block'
    selectedChat.current[index].style.backgroundColor = 'hsl(190, 100%, 25%)'
    selectedChat.current[index].style.color = '#EEE'
    for(let i=0; i<selectedChat.current.length; i++) {
      if(i===index)
        continue
      selectedChat.current[i].style.backgroundColor = 'transparent'
      selectedChat.current[i].style.color = '#555'
    }
  }

  const getMessages = (username) => {
    let mssData = {
      mssTenant: username,
      mssLandlord: props.username
    }
    props.resetLandlordMessages()
    axios.post(fetchMss, mssData)
    .then((response) => {
      const resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.addLandlordMessages(
          resArray[recordIndex].mssFrom,
          resArray[recordIndex].mssTo,
          resArray[recordIndex].mssTime,
          resArray[recordIndex].mssBody
        )
        recordIndex++
      }
    })
  }

  const tenantsList = props.tenantUsernames.map((item, index) => 
    <li key={index} ref={(item) => selectedChat.current[index]=item} onClick={() => {
      setMss({...mss, mssTo: props.tenantUsernames[index]});
      getMessages(props.tenantUsernames[index]);
      updateMssComponents(index)
    }}>
      <span>{props.tenantFirstNames[index]} {props.tenantLastNames[index]}</span>
      <span>({props.tenantUsernames[index]})</span>
    </li>
  )

  const messageBubble = props.messageTime.map((item, index) => {
    if(props.messageFrom[index]===props.username)
      return (
        <li key={index} className='messageBubble myMessage'>
          <span>{props.messageBody[index]}</span>
          <span>{timeStamp[index][0]}:{timeStamp[index][1]} on {dateStamp[index][2]} {dateStampInText[index]}, {dateStamp[index][0]}</span>
        </li>
      )
    else
    return (
      <li key={index} className='messageBubble'>
        <span>{props.messageBody[index]}</span>
        <span>{timeStamp[index][0]}:{timeStamp[index][1]} on {dateStamp[index][2]} {dateStampInText[index]}, {dateStamp[index][0]}</span>
      </li>
    )
  })

  return (
    <div>
      <h1 className='backgroundArt'>Messages</h1>
      <div className='tenantChats'>
        <span>Chats</span>
        <ul>{tenantsList}</ul>
      </div>
      <div className='messagesContainer' ref={messagesRef}>
        <div className='messagesDiv'>
          <ul>{messageBubble}</ul>
        </div>
        <form onSubmit={handleSubmit} className='sendMessage'>
          <textarea value={mss.mssBody} placeholder='Type your message here...' ref={textArea} onChange={handleChange}></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.landlord.details.username,
    messageFrom: state.landlord.messages.from,
    messageTo: state.landlord.messages.to,
    messageTime: state.landlord.messages.time,
    messageBody: state.landlord.messages.body,
    tenantUsernames: state.landlord.tenants.usernames,
    tenantFirstNames: state.landlord.tenants.firstNames,
    tenantLastNames: state.landlord.tenants.lastNames,
  }
}

export default connect(mapStateToProps,mapLandlordDispatchToProps)(Messages)