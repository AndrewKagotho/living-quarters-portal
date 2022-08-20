import React from 'react'
import { connect } from 'react-redux'
import { populateState } from '../../utils/U_PopulateState'
import { mapUserDispatchToProps } from '../../store/Actions'
import Welcome from '../../features/tenant/Welcome'
import HomeView from '../../features/tenant/HomeView'

const Home = (props) => {
  window.onload = () => populateState(props)

  const [contentView, setView] = React.useState('overview')
  const overviewRef = React.useRef()
  const myAccountRef = React.useRef()
  const refArray = [overviewRef, myAccountRef]

  const viewContent = (arg, num) => {
    setView(arg)

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
      <h1 className='backgroundArt'>Home</h1>
      <div className='container'>
        <Welcome/>
        <div className='tenantMain'>
          <div className='menu'>
            <h2>Home menu</h2>
            <ul>
              <li onClick={() => viewContent('overview', 0)} ref={overviewRef}>Overview</li>
              <li onClick={() => viewContent('myaccount', 1)} ref={myAccountRef}>My Account</li>
            </ul>
          </div>
          <div className='selectedMenuOption'>
            <HomeView contentView={contentView}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, mapUserDispatchToProps)(Home)