import React,{useState} from 'react'

const Notecard = (props) => {
    const [data, setData] = useState({
        tdata:"",
        pdata:""
    })
    function titdata(event) {
       const {name,value} = event.target;
       setData((prevdata)=>{
return{
    ...prevdata,
    [name] : value, //Setting value acc to the name in input field
// we are storing data in setData useState
}
       })
    }
function addtolist() {
    //from here we are passing the data entered in the main note which 
    // we pass it to Keep.js
    props.passNote(data);
setData({
    tdata:"",
    pdata:""
})
}
    return (
        <>
        <div className="main_note">
        <form>
             <input type="text" placeholder="Enter your title :" name="tdata" value={data.tdata} onChange={titdata}/>
             
              <textarea  column="" rows=""  placeholder="Write A note"  name="pdata"
              value={data.pdata} onChange={titdata}></textarea>
              <button type="button" className="plus_sign" onClick={addtolist}>+</button>
               </form>  
         </div>
        </>
    )
}

export default Notecard
