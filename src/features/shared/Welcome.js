const Welcome = ({props}) => {

  const date = new Date()

  let hour = date.getHours()
  let timedGreeting = ''

  if(hour < 12) timedGreeting = 'Good morning'
  else if(hour < 16) timedGreeting = 'Good afternoon'
  else timedGreeting = 'Good evening'

  return <h2 className='welcome_text'>{timedGreeting}, {props.firstName}!</h2>
}

export default Welcome