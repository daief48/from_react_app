import React, { useState } from 'react'
export default function App() {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    email:"",
    phone:"",
  });

  const onSubmits = (event) => {
    event.preventDefault();

  }

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value , name } = event.target;

    setFullName((preValue) => {

      return{
        ...preValue,
        [name]:value
      }
      // if (name === "fName") {
      //   return ({
      //     fname: value,
      //     lname: preValue.lname,
      //     email:preValue.email,
      //     phone:preValue.phone,
      //   })
      // } else if (name === 'lName') {
      //   return ({
      //     fname: preValue.fname,
      //     lname: value,
      //     email:preValue.email,
      //     phone:preValue.phone,
      //   })
      // }else if (name === 'email') {
      //   return ({
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email:value,
      //     phone:preValue.phone,
      //   })
      // }else if (name === 'phone') {
      //   return ({
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email:preValue.email,
      //     phone:value,
      //   })
      // }
    })
  }



  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input type="text"
              placeholder='Enter your First Name'
              name='fname'
              onChange={inputEvent}
              value={fullname.fname}
            />
            <br />
            <input type="text"
              placeholder='Enter your Last Name'
              name='lname'
              onChange={inputEvent}
              value={fullname.lname}
            />
            <br />
            <input type="email"
              placeholder='Enter your Last Name'
              name='email'
              onChange={inputEvent}
              value={fullname.email}
            />
            <br />
            <input type="number"
              placeholder='Enter your Last Name'
              name='phone'
              onChange={inputEvent}
              value={fullname.phone}
            />
            <button>Click Me 🤜</button>

          </div>
        </form>
      </div>
    </>
  )
}
