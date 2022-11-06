import Form from './Form'
import Button from './Button'
import {useState} from 'react'

const AppointmentForm = ({setAppointmentDetails}) => {
  const[isForm, setIsForm] = useState(false)

  const onClick = () => {
    setIsForm(!isForm)
  }

  return (
    <article>
      <section className='appointment-section'>
        <h1>Please fill the details</h1>
        <Button text="Add Details" cls="add-details-btn" onClick={onClick}/>
        {isForm && <Form setAppointmentDetails={setAppointmentDetails}/>}
      </section>
    </article>
  )
}

export default AppointmentForm
