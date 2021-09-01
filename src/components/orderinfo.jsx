import React, { useEffect, useState } from "react";
import axios from "axios"
function OrderInfo(){
    const [pickup,setpickup]=useState(false)
    const [orderdetails,setorderdetails]=useState({

    })
    
 
function getPickUp(event){

event.preventDefault();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

// useEffect(()=>{
// axios.get("")
// },[])


function showPosition(position){
    console.log(position)
if(position){
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?types=poi&access_token=pk.eyJ1IjoiZGFya3NpZGVyNTEiLCJhIjoiY2twaWEybjRrMno1aDMxbnhzMW43MGMwYSJ9.pw1XvoiWZakR-yTN27Hdvg`)
    .then((res)=>{
        console.log(res)
    })
}
    
}

    
    
    return(
<div>
<button onClick={(event)=>getPickUp(event)}>Pick Up Delivery</button>
<button onClick={()=>pickup?setpickup(false):setpickup(true)}>Enter Manually</button>

<div>
<div>
{pickup?<textarea />:null}
</div>

<input placeholder="mobile number" />
<input placeholder="Landmark" />
</div>
<button>Delivery Address</button>
<div>
<input placeholder="mobile number" />
<input placeholder="Landmark" />
</div>
<select style={{width:"200px"}}>
<option>What are you sending</option>
<option>A</option>
<option>B</option>
<option>C</option>
</select>
<div>
<select>
    <option>Weight Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<select>
<option>Size Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
</div>
<div>
<select>
<option>Payment Method</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<select>
<option>Opt Bidding</option>
    <option>Yes</option>
    <option>No</option>
    
</select>
</div>
</div>
    )
}
export default OrderInfo