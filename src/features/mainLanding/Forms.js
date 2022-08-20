import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Settings from '../../assets/images/settings.png'

let loginScript = 'http://localhost:8080/Students%20LQ%20Portal/src/php/login.php'
let registerScript = 'http://localhost:8080/Students%20LQ%20Portal/src/php/register.php'
let landlordLoginScript = 'http://localhost:8080/Students%20LQ%20Portal/src/php/landlordLogin.php'
let loginTabCounter = 0
let signUpTabCounter = 0
let showOptions = false

const Forms = () => {
  const userMenuRef = React.useRef()
  const userFormsRef = React.useRef()
  const userLoginFormRef = React.useRef()
  const userSignUpFormRef = React.useRef()
  const userLoginButtonRef = React.useRef()
  const userSignUpButtonRef = React.useRef()
  const landlordFormsRef = React.useRef()
  const landlordMenuRef = React.useRef()
  const landlordLoginFormRef = React.useRef()
  const landlordLoginButtonRef = React.useRef()
  const landlordBackButtonRef = React.useRef()
  const linksRef = React.useRef()
  const gearRef = React.useRef()

  const showUserFormTab = (ifShow) => {
    if(!ifShow) {
      userMenuRef.current.style.borderBottom = 'none'
      userLoginFormRef.current.style.display = 'grid'
      userSignUpFormRef.current.style.display = 'none'
      userLoginButtonRef.current.style.color = 'hsl(190, 100%, 35%)'
      userSignUpButtonRef.current.style.color = '#EEE'
      loginTabCounter++
      signUpTabCounter=0
      if(loginTabCounter>1) {
        userMenuRef.current.style.borderBottom = '2px solid #EEE'
        userLoginFormRef.current.style.display = 'none'
        loginTabCounter=0
      }
    } else if(ifShow) {
      userMenuRef.current.style.borderBottom = 'none'
      userLoginFormRef.current.style.display = 'none'
      userSignUpFormRef.current.style.display = 'grid'
      userLoginButtonRef.current.style.color = '#EEE'
      userSignUpButtonRef.current.style.color = 'hsl(190, 100%, 35%)'
      signUpTabCounter++
      loginTabCounter=0
      if(signUpTabCounter>1) {
        userMenuRef.current.style.borderBottom = '2px solid #EEE'
        userSignUpFormRef.current.style.display = 'none'
        signUpTabCounter=0
      }
    }
  }

  const showLandlordForm = () => {
    landlordFormsRef.current.style.display = 'block'
    landlordLoginFormRef.current.style.display = 'grid'
    userFormsRef.current.style.display = 'none'
    landlordLoginButtonRef.current.style.backgroundColor = 'hsl(190, 100%, 25%)'
  }

  const backToUserForms = () => {
    userMenuRef.current.style.borderBottom = 'none'
    landlordFormsRef.current.style.display = 'none'
    userFormsRef.current.style.display = 'block'
    userLoginFormRef.current.style.display = 'grid'
    loginTabCounter++
    userSignUpFormRef.current.style.display = 'none'
    userLoginButtonRef.current.style.color = 'hsl(190, 100%, 35%)'
    userSignUpButtonRef.current.style.color = '#EEE'
    landlordLoginButtonRef.current.style.backgroundColor = ''
    expandOptions()
  }

  const expandOptions = () => {
    if(!showOptions) {
      linksRef.current.style.visibility = 'visible'
      linksRef.current.style.opacity = '1'
      gearRef.current.style.transform = 'scale(.9) rotate(-30deg)'
      showOptions = true
    } else if(showOptions) {
      linksRef.current.style.visibility = 'hidden'
      linksRef.current.style.opacity = '0'
      gearRef.current.style.transform = 'scale(.9) rotate(0deg)'
      showOptions = false
    }
  }

  const [data, setData] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    username:"",
    password:""
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const registerSubmit = (e) => {
    const insertData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password
    }

    axios.post(registerScript, insertData)
    .then((response) => {
      if(response.statusText==='OK')
        alert('Registration successful! You can now log in.')
      else
        alert('Registration unsuccessful! Try again!')
    })

    setData({
      firstName:"",
      lastName:"",
      email:"",
      username:"",
      password:""
    })
    e.preventDefault()
  }

  return (
    <div className='rightDivLanding'>
      <div className='formContainer'>
        <div className='userForms' ref={userFormsRef}>
          <div className='formMenu' ref={userMenuRef}>
            <span onClick={() => showUserFormTab(false)} ref={userLoginButtonRef}>LOG IN</span>
            <span onClick={() => showUserFormTab(true)} ref={userSignUpButtonRef}>SIGN UP</span>
          </div>
          <form className='registerForm' ref={userSignUpFormRef}>
            <label htmlFor='regfirstName'>First name:</label>
            <input type='text' id='regfirstName' name='firstName' value={data.firstName} onChange={handleChange}/>
            <label htmlFor='reglastName'>Last name:</label>
            <input type='text' id='reglastName' name='lastName' value={data.lastName} onChange={handleChange}/>
            <label htmlFor='regemail'>Email address:</label>
            <input type='text' id='regemail' name='email' value={data.email} onChange={handleChange}/>
            <label htmlFor='regusername'>Username:</label>
            <input type='text' id='regusername' name='username' value={data.username} onChange={handleChange}/>
            <label htmlFor='regpassword'>Password:</label>
            <input type='password' id='regpassword' name='password' value={data.password} onChange={handleChange}/>
            <button type='submit' onClick={registerSubmit}>Proceed to register &gt;</button>
          </form>
          <form className='loginForm' action={loginScript} method='POST' ref={userLoginFormRef}>
            <label htmlFor='logusername'>Username:</label>
            <input type='text' id='logusername' name='username' value={data.username} onChange={handleChange}/>
            <label htmlFor='logpassword'>Password:</label>
            <input type='password' id='logpassword' name='password' value={data.password} onChange={handleChange}/>
            <button type='submit'>Proceed to log in &gt;</button>
          </form>
        </div>
        <div className='landlordForms' ref={landlordFormsRef}>
          <div className='landlordFormMenu' ref={landlordMenuRef}>
            <span onClick={backToUserForms} ref={landlordBackButtonRef}>BACK TO USER LOGIN</span>
          </div>
          <form className='loginForm' action={landlordLoginScript} method='POST' ref={landlordLoginFormRef}>
            <label htmlFor='landlordname'>Username:</label>
            <input type='text' id='landlordname' name='username' value={data.username} onChange={handleChange}/>
            <label htmlFor='landlordpassword'>Password:</label>
            <input type='password' id='landlordpassword' name='password' value={data.password} onChange={handleChange}/>
            <button type='submit'>Proceed to landlord log in &gt;</button>
          </form>
        </div>
        <Link to='/browse' className='browseButton'>BROWSE LISTINGS</Link>
      </div>
      <div className='moreOptions'>
        <div className='moreOptionsLinks' ref={linksRef}>
          <span onClick={showLandlordForm} ref={landlordLoginButtonRef}>Log in as landlord</span>
        </div>
        <img className='moreOptionsGear' onClick={expandOptions} src={Settings} alt='' ref={gearRef}/>
      </div>
    </div>
  )
}

export default Forms