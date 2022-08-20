import Residence from '../../features/tenant/Residence'
import Date from '../../features/tenant/Date'
import Duration from '../../features/tenant/Duration'
import Calendar from '../../features/shared/Calendar'
import Summary from '../../features/tenant/Summary'
import MyAccount from '../../features/tenant/MyAccount'

const HomeView = ({contentView}) => {

  if(contentView==='overview')
    return (
      <div className='flexStretch'>
        <div className='component activeComponent largeContainer'>
          <Residence/>
        </div>
        <div className='component activeComponent smallContainer'>
          <div><Date/></div>
          <div><Duration/></div>
          <div><Calendar/></div>
        </div>
      </div>
    )
  else if(contentView==='myaccount')
    return (
      <div className='flexStart'>
        <div className='component activeComponent smallContainer'>
          <div><Summary/></div>
        </div>
        <div className='component activeComponent largeContainer'>
          <div><MyAccount/></div>
        </div>
      </div>
    )

  return <div>Nothing to show...</div>
}

export default HomeView