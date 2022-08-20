import React from 'react'
import { connect } from 'react-redux'

const Status = (props) => {
  const activityRef = React.useRef()
  const inactivityRef = React.useRef()
  const activityDivRef = React.useRef()
  const insessionRef = React.useRef()
  const outsessionRef = React.useRef()
  const sessionDivRef = React.useRef()

  // if(activeValue!=='' || props.session!=='') {
    // if(props.activity==='Active') {
    //   activityRef.current.style.backgroundColor = 'rgb(0 255 0)'
    //   activityRef.current.style.color = '#555'
    //   inactivityRef.current.style.backgroundColor = 'rgb(255 255 255)'
    //   inactivityRef.current.style.color = '#555'
    //   activityDivRef.current.style.border = '2px solid rgb(0 255 0)'
    // }
    // else if(props.activity==='Inactive') {
    //   inactivityRef.current.style.backgroundColor = 'rgb(255 0 0)'
    //   inactivityRef.current.style.color = '#FFF'
    //   activityRef.current.style.backgroundColor = 'rgb(255 255 255)'
    //   activityRef.current.style.color = '#555'
    //   activityDivRef.current.style.border = '2px solid rgb(255 0 0)'
    // }
    // if(props.session==='Out') {
    //   insessionRef.current.style.backgroundColor = 'rgb(0 255 0)'
    //   insessionRef.current.style.color = '#555'
    //   outsessionRef.current.style.backgroundColor = 'rgb(255 255 255)'
    //   outsessionRef.current.style.color = '#555'
    //   sessionDivRef.current.style.border = '2px solid rgb(0 255 0)'
    // }
    // else if(props.session==='Out') {
    //   outsessionRef.current.style.backgroundColor = 'rgb(255 0 0)'
    //   outsessionRef.current.style.color = '#FFF'
    //   insessionRef.current.style.backgroundColor = 'rgb(255 255 255)'
    //   insessionRef.current.style.color = '#555'
    //   sessionDivRef.current.style.border = '2px solid rgb(255 0 0)'
    // }
  // }
  
  return (
    <div className='statusSessionDiv'>
      <div className='status'>
        <span id='titleStatus'>Status:</span>
        <div className='visualStatus' ref={activityDivRef}>
          <div id='active' ref={activityRef}><span>Active</span></div>
          <div id='inactive' ref={inactivityRef}><span>Inactive</span></div>
        </div>
      </div>
      <div className='session'>
        <span id='titleSession'>Session:</span>
        <div className='visualSession' ref={sessionDivRef}>
          <div id='inSession' ref={insessionRef}><span>In</span></div>
          <div id='outSession' ref={outsessionRef}><span>Out</span></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activity: state.user.activity,
    session: state.user.session
  }
}

export default connect(mapStateToProps)(Status)