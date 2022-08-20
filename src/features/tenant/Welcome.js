import { connect } from 'react-redux'

const Welcome = (props) => {
  const date = new Date()

  let hour = date.getHours()
  let timedGreeting = ''

  if(hour<12)
    timedGreeting = 'Good morning'
  else if(hour<16)
    timedGreeting = 'Good afternoon'
  else
    timedGreeting = 'Good evening'

  return (
    <div className='welcomeText'>
      <h2>{timedGreeting}, {props.firstName}!</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.details.firstName
  }
}

export default connect(mapStateToProps)(Welcome)