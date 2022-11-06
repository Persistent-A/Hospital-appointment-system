import {useState} from 'react'

const Login = ({showPortal, doctors, setLogedDocDep}) => {
  const [employee, setEmployee] = useState('')
  const [password, setPassword] = useState('')
 
  const onLogin=(e)=>{
    e.preventDefault()
    console.log(password)
    
    const fil = (doctors.filter((doctors) => doctors.employee_Id === employee))
    console.log(fil[0])
    const logedDoctor = fil[0]
    console.log(!logedDoctor)

    !logedDoctor ? alert("Please enter correct Employee Id") : logedDoctor.password === password ? showPortal() : alert('Incorrect password')
    setLogedDocDep(logedDoctor.department)
  }

  return (
    <div className="login-container">
        <h1 className="Login-container-header">Medical Center</h1>
        <form className="login-form" onSubmit={onLogin} >
            <h1>Login</h1>
            <div className="login-form-row">
              <label>Employee Id</label>
              <input type='number' placeholder='Enter your Id number' value={employee} onChange={(e)=>setEmployee(e.target.value)} required/>
            </div>
            <div className="login-form-row">
              <label>Password</label>
              <input type='text' placeholder='Enter your password to login' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
    </div>
    
  )
}

export default Login
