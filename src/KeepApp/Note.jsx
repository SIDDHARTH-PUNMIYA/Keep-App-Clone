import React from 'react'
import img from './img/delicon.jpg'
const Note = (props) => {
    // from here we pass the props.id to keep.js 
    function del() {
        props.delitem(props.id);
        
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.con}</p>
                  {/* <button onClick={del} className="deleteicon btn"> */}
                  <img src={img} className="deleteicon btn" onClick={del} alt="" />
                  {/* </button> */}
            </div>
        </>
    )
}

export default Note
