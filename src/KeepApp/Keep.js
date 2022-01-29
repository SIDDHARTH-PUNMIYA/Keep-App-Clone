import React, { useState } from 'react'
import Notecard from './Notecard'
import Note from './Note'
import "./main.css";
const Keep = () => {
  const [item, setItem] = useState([]);
  const d = new Date();

// we are receiving data from Notecard.jsx and we add it in the global state here so that we can use it to print and delete notes
  const addNote = (data) => {
    setItem((prevVal) => {
      return [...prevVal, data];
  })    ;
  }

  function ondel(index) {
    setItem((prevVal)=>
    prevVal.filter((cdata,id)=>{
     return id!==index;
    })
  );
  };
  return (
    <>
      <div className="header"> <h1>Keep Clone</h1> </div>
      
        <Notecard
          passNote={addNote} // we are passing the addNote so that we store it state and can delete it via delete function written in
          //NOTE.jsx
        />
        {/* // printing notes from state */}
            <div className="tocenter">
            {item.map((val,ind)=>{
              return <Note
                  key={ind}
                  id={ind}
                  title={val.tdata} // val. should be the same value added to input fiels
                  con={val.pdata}
                  delitem={ondel}   // u cant use val.con instead of val.pdata
                       />
            })}
            </div>
      <div className="footer"><h2>Copyright @ {d.getFullYear()}</h2></div>
      
    </>
  )
}

export default Keep
