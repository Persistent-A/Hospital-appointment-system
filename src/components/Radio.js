import { useState } from "react"


const Radio = ({cls, showClient}) => {
  const [selection, setSelection] = useState('')
  console.log(selection)

  const clientType = (e) =>{
    e.preventDefault()
    showClient(selection)
    setSelection('')
  }


  return (
    <form className={cls} onSubmit={clientType}>
        <div className='radio-row'>
            <input type="radio" name='entry' value='patients' onChange={(e) => setSelection(e.currentTarget.value)}/>
            <label>For Patients</label>
        </div>
        <div className='radio-row'>
            <input type="radio" name='entry' value='doctors' onChange={(e) => setSelection(e.currentTarget.value)}/>
            <label>For Doctors</label>
        </div>
        <input className="radio-btn" type='submit' value='Next' />
      
    </form>
  )
}

export default Radio
