import {useRef, useState} from 'react'

const Form = ({setAppointmentDetails}) => {

    const dropdown = useRef()
    
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    const[phone, setPhone] = useState('')
    const[email, setEmail] = useState('')
    const[address, setAddress] = useState('')
    const[adhaar, setAdhaar] = useState('')
    const[date, setDate] = useState('')
    const[department, setDepartment] = useState('')
    const reArranged = false

    const setAppointment = (e) => {
        e.preventDefault()
        console.log(department)
        setAppointmentDetails({name, age, phone, email, address, adhaar, date, department, reArranged})
        setName('')
        setAge('')
        setPhone('')
        setEmail('')
        setAddress('')
        setAdhaar('')
        setDate('')
    }

  return (
    <form className='container' onSubmit={setAppointment}>
        <div className='form-row'>
            <label>Name</label>
            <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
        </div>
        <div className='form-row'>
            <label>Age</label>
            <input type='text' placeholder='Enter your age' value={age} onChange={(e)=>setAge(e.currentTarget.value)}/>
        </div>
        <div className='form-row'>
            <label>Phone</label>
            <input type='number' placeholder='Enter your phone number' value={phone} onChange={(e)=>setPhone(e.currentTarget.value)}/>
        </div>
        <div className='form-row'>
            <label>E-Mail</label>
            <input type='text' placeholder='Enter your email address' value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
        </div>
        <div className='form-row'>
            <label>Address</label>
            <input type='text' placeholder='Enter your address' value={address} onChange={(e)=>setAddress(e.currentTarget.value)}/>
        </div>
        <div className='form-row'>
            <label>Adhaar Number</label>
            <input type='number' placeholder='Enter your Adhaar card number' value={adhaar} onChange={(e)=>setAdhaar(e.currentTarget.value)}/>
        </div>
        <div className='form-row-date'>
            <label>Select Date: </label>
            <input type='date' value={date} onChange={(e)=>setDate(e.currentTarget.value)}/>
        </div>
        <div className='form-row-date'>
            <label>Select Department: </label>
            <select  ref={dropdown} onChange={(e) => setDepartment(e.target.value)}>
                <option value='' defaultChecked>-----</option>
                <option value='er'>ER</option>
                <option value='neuro'>Neuro</option>
            </select>
        </div>
        <input className='submit-btn' type='submit' value='Submit'/> 
    </form>
  )
}

export default Form
