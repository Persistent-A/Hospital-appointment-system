import {FaTimes} from 'react-icons/fa'
import {BsCalendarDateFill} from 'react-icons/bs'
import ReSchedule from './ReSchedule'

const PatientDetails = ({appointment, onDelete, toggleReminder, isRescheduled, setReDate, reDate, changeDate}) => {

  return (
    <section className="patientdetails-container" style={{backgroundColor: isRescheduled ? "green" : "#efce9f"}}>
        <h3>Name: {appointment.name} <FaTimes className="fatimes" onClick={()=>onDelete(appointment.id)}/></h3>
        <h3>Age: {appointment.age}</h3>
        <h3>Email_Address: {appointment.email} <BsCalendarDateFill onClick={()=>toggleReminder(appointment.id)} className='reschedule-btn'/></h3>
        {appointment.reArranged && <ReSchedule setReDate={setReDate} reDate={reDate} changeDate={changeDate} id={appointment.id}/>}
    </section>
  )
}

export default PatientDetails
