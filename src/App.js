import React, { useState } from 'react'
export default function App() {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const onSubmits = (event) => {
    event.preventDefault();
    setFullname(name)
  } 

  // const onSubmit = () => {
  //   setFullname(name)
  // }
  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullname}</h1>
            <input type="text"
              placeholder='Enter your Name'
              onChange={inputEvent}
              value={name}
            />
            <button>Click Me 🤜</button>

          </div>
        </form>
      </div>
    </>
  )
}
