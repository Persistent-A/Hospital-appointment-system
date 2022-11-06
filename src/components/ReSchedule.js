const ReSchedule = ({setReDate, reDate, changeDate, id}) => {
    const onSubmit = (e) => {
      e.preventDefault()
      changeDate(id)
      setReDate('')
    }
  return (
    <form onSubmit={onSubmit}>
        <label>Select date to reschedule the appoinment: </label>
        <input type="date" value={reDate} onChange={(e)=>setReDate(e.target.value)}/>
        <input type='submit' value='Save' />
    </form>
  )
}

export default ReSchedule
