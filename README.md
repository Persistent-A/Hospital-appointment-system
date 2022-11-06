## `To start a React application: We use npm (node packet manager),` 

## `Install nodejs`
React dev tools (add browser extension).
( to setup all the files and folders, packages, etc.)
```
    npx create-react-app my-app 
```
```
    cd my-app
```
(To start the dev server: for ex: (http://localhost:3000)
```
    npm start 
```
In React we cannot change the state, else we use useState to change any objects.
To install icons in React, we use:
```
    npm i react-icons
```
`For production:`

To build for production: npm run build, it creates “build” folder which is used to deploy.
To push the build folder locally we use: 
(for mac/linux),
```
    sudo npm i -g serve  
```
it is basically a http server.
To serve build folder on any port: 
```
    serve -s build -p 8000  (http://localhost:8000)
```

`To deal with Back-end :`

We use JSON server to create a mock rest API, to use our own data.
```
    npm i json-server 
```
To run this, we add a script to the package.json folder called,
"server": "json-server --watch db.json --port 3000"

```
    npm run server (which creates db.json)
```
Again we run our dev server with - 
```
    npm start
```
Then after creating the database in the db.json by adding json objects, we run
- to fetch task from backend: http://localhost:5001/appointments

## `We use a hook called “useEffect” to load effects on the page loads.`

To delete data from the server : 

We use method: ‘DELETE’
```
    const onDelete = async (id) => {
    await fetch(`http://localhost:5001/appointments/${id}`,{
      method: 'DELETE'
    })
    setAppointment(appointment.filter((appointments) => appointments.id !== id))
  }
```

To Add data :

We use method: ‘POST’
```
     const setAppointmentDetails = async (content) => {
    await fetch('http://localhost:5001/appointments', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(content)
    })
  }
```

# Components

- Header.js : It contains the nav bar of the viewport.

- Home.js: It contains the UI of the home page containg the radio button. It will direct user to the client section on the basis of client selection.

- Radio.js: It contains a form which lets us to select any of the selection by clicking the radio button.

- AppointmentForm.js: It conatins an article which has a section containing a button which lets us to fill the details on the form to book an appointment.

- Form.js: It contains the form which take the values and store it to the database. To store the details to the database, it uses the fetch api using async and await to fetch the data from the database and then use the method: 'POST' to save the patient details via form.

- Login.js: It conatins a form which uses onLogin function to compare the value from the form with the stores employee_id and password in the database. If the details match, it logins the employee to their respective portal.

- DoctorPortal.js: It conatins an article containing the form which will show the scheduled patient details when the respective date is selected.

- PatientDetail.js: This conatins an article which filters the matched appointment date from the database and then reflect it over the UI.

- PatientDetails.js: This conatin a section containing the details of the patient with the icons to add the delete and rescheduling the appointment date property.

- ReSchedule.js: It contains a form which takes the date to reschedule the apointment and stores it in the database, which can be reflected over the UI by selecting the same date.
