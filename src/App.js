import React, { useState } from 'react'
export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState('');
  const [fullname, setFullname] = useState();
  const [lastNamenew, setLastNameNew] = useState('');
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const inputEventTwo = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  }
  const onSubmits = (event) => {
    event.preventDefault();
    setFullname(name);
    setLastNameNew(lastName);
  } 

  // const onSubmit = () => {
  //   setFullname(name)
  // }
  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullname} {lastNamenew}</h1>
            <input type="text"
              placeholder='Enter your First Name'
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input type="text"
              placeholder='Enter your Last Name'
              onChange={inputEventTwo}
              value={lastName}
            />
            <button>Click Me 🤜</button>

          </div>
        </form>
      </div>
    </>
  )
}
