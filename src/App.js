//Hooks
import {useState, useEffect} from 'react'

//Components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import AppointmentForm from './components/AppointmentForm'
import Login from './components/Login'
import DoctorPortal from './components/DoctorPortal'

function App() {
  const[isPatient, setIsPatient] = useState(false)
  const[isHome, setIsHome] = useState(true)
  const[isDoctor, setIsDoctor] = useState(false)
  const[isPortal, setIsPortal] = useState(false)
  const[appointment, setAppointment] = useState([])
  const[doctors, setDoctors] = useState([])
  const[logedDocDep, setLogedDocDep] = useState('')
  const[isRescheduled, setIsRescheduled] = useState(false)
  const[reDate, setReDate] = useState('')
  
  useEffect(()=>{
    const getAppointment = async() => {
      const appointmentFromServer = await fetchAppointments()
      setAppointment(appointmentFromServer)
    }
    getAppointment()
  },[])

  useEffect(()=>{
    const getDoctors = async() => {
      const doctorFromServer = await fetchDoctorDetails()
      setDoctors(doctorFromServer)
    }
    getDoctors()
  },[])
  
  const fetchAppointments = async () => {
    const res = await fetch('http://localhost:5001/appointments')
    const data = await res.json()
    return data
  }

  const fetchDoctorDetails = async() => {
    const res = await fetch(`http://localhost:5001/doctors`)
    const data = await res.json()
    return data
  }
  
  const showPortal = () => {
    setIsDoctor(false)
    setIsHome(false)
    setIsPortal(true)
  }

  const setAppointmentDetails = async (content) => {
    await fetch('http://localhost:5001/appointments', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(content)
    })
  }

  const showDetails = () => {
    setIsDoctor(false)
    setIsHome(false)
    setIsPortal(true)
  }

  const showClient = (selection) => {
    if (selection === 'patients'){
      //show Apointment form
      setIsPatient(true)
      setIsDoctor(false)
      setIsHome(false)
      // setIsPortal(false)
    }
    else{
      //show Doctor form
      setIsDoctor(true)
      setIsHome(false)
    }
  }
  const showHome = () => {
    setIsPatient(false)
    setIsDoctor(false)
    setIsHome(true)
    setIsPortal(false)
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:5001/appointments/${id}`,{
      method: 'DELETE'
    })
    setAppointment(appointment.filter((appointments) => appointments.id !== id))
  }

  const toggleReminder = async (id) =>{
    const res = await fetch(`http://localhost:5001/appointments/${id}`)
    const data = await res.json()
    const updatedAppo = {...data, reArranged: !data.reArranged}

    const upAppo = await fetch(`http://localhost:5001/appointments/${id}`,{
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(updatedAppo)
    })
    const upAppoBody = await upAppo.json()
    setAppointment(appointment.map((appointment) => (
      appointment.id === id ? {...appointment, reArranged:upAppoBody.reArranged} : appointment )))
  }

  const changeDate = async (id) => {
    
    const res = await fetch(`http://localhost:5001/appointments/${id}`)
    const data = await res.json()
    const updatedAppo = {...data, date: reDate}

    const upAppo = await fetch(`http://localhost:5001/appointments/${id}`,{
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(updatedAppo)
    })
    const upAppoBody = await upAppo.json()
    setAppointment(appointment.map((appointment) => (
      appointment.id === id ? {...appointment, date:upAppoBody.date} : appointment )))
  }

  return (
    <div className="App">
      <Header showHome={showHome}/>
      {isHome && <Home showClient={showClient}/>}
      {isPatient && <AppointmentForm setAppointmentDetails={setAppointmentDetails}/>}
      {isDoctor && <Login showPortal={showPortal} doctors={doctors} setLogedDocDep={setLogedDocDep}/>}
      {isPortal && <DoctorPortal showDetails={showDetails} appointment={appointment} logedDocDep={logedDocDep} onDelete={onDelete} toggleReminder={toggleReminder} isRescheduled={isRescheduled} setReDate={setReDate} reDate={reDate} changeDate={changeDate}/>}
      <Footer /> 
    </div>
  );
}

export default App;

