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
