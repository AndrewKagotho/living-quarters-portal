import '../../styles/mainLanding.css'

let logo = 'http://127.0.0.1:8888/logo_white.png'

const Title = () => {
  return (
    <div className='leftDivLanding'>
      <img id='logo' src={logo} alt=''/>
      <h1 className='systemTitle'>Students' Living Quarters Portal</h1>
    </div>
  )
}

export default Title