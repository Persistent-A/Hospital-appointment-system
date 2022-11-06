import PatientDetails from "./PatientDetails";

const PatientDetail = ({appointment, date, onDelete, logedDocDep, toggleReminder, isRescheduled, setReDate, reDate, changeDate}) => {

  return (
    <article className="patientDetails">
       {appointment.filter((appointment)=>(appointment.date === date)).filter((appointment)=>(appointment.department === logedDocDep)).map((appointment, index)=>(
         <PatientDetails key={index} appointment={appointment} onDelete={onDelete} toggleReminder={toggleReminder} isRescheduled={isRescheduled} setReDate={setReDate} reDate={reDate} changeDate={changeDate}/>
        ))} 
    </article>
  )
}

export default PatientDetail
