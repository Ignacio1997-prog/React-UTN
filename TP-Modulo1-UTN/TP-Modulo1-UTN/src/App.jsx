import React  from 'react'


function App() {

  return (
      <div className='container'>
       <div className='Titulo'>
         <h1>Cerate an acconut</h1>
         <p>Enter your information to register</p>
        </div>
       <form>
        <div className='NombreCompleto'>
          <div className='inputs'>
            <label htmlFor="Nombre">First name</label>
            <input id='Nombre' type='text' placeholder='Jhon'/>
          </div>
          <div className='inputs'>
            <label htmlFor="Apellido">Last name</label>
            <input id='Apellido' type='text' placeholder='Doe'/>
          </div>
        </div>
          <div className='inputs'>
            <label htmlFor="Email">Email</label>
            <input id='Email' type='text' placeholder='john.doe@example.com'/>
          </div>
          <div className='inputs'>
            <label htmlFor="Phone">Phone</label>
            <input id='Phone' type='text' placeholder='+1(555) 000-0000'/>
          </div>
          <div className='inputs'>
            <label htmlFor="Password">Password</label>
            <input id='Password' type='text' />
          </div>
          <div className='inputs'>
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input id='ConfirmPassword' type='text'/>
          </div>
        </form>
        <button id='Register'>Register</button>
     </div>
  )
}

export default App
