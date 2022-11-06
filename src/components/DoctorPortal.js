import {useState} from 'react'
import PatientDetail from './PatientDetail'

const DoctorPortal = ({showDetails, appointment, onDelete, logedDocDep, toggleReminder, isRescheduled, setReDate, reDate, changeDate}) => {
    const[isDetails, setIsDetails] = useState(false)
    const[date, setDate] = useState('')

    const showPatientDetails = (e) => {
        e.preventDefault()
        showDetails()
        setIsDetails(!isDetails) 
      }

  return (
    <article className='doctorportal-container' >
        <form className='doctorportal-form' onSubmit={showPatientDetails} >
            <h1>Welcome to your scheduled appointment</h1>
            <div className='doctorportal-form-row'>
                <label>Select date of appointment:   </label>
                <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <input type='submit' value='Click to Check' />
        </form>
        {isDetails && <PatientDetail appointment={appointment} date={date} onDelete={onDelete} logedDocDep={logedDocDep} toggleReminder={toggleReminder} isRescheduled={isRescheduled} setReDate={setReDate} reDate={reDate} changeDate={changeDate}
        />}
    </article>
  )
}

export default DoctorPortal
