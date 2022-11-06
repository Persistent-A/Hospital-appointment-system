import Button from './Button'
const ReSchedule = ({setReDate, reDate, changeDate}) => {
    
  return (
    <section>
        <label>Select date to reschedule the appoinment: </label>
        <input type="date" value={reDate} onChange={(e)=>setReDate(e.target.value)}/>
        <Button text='Save' cls='date-change' onClick={changeDate}/>
    </section>
  )
}

export default ReSchedule
