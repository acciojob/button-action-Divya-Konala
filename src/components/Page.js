import React, { useState } from 'react'

const Page=()=>{
    const [click,setClick]=useState(false);
    return <div>
        <p id="para" className={(click)?"show":"hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        <button onClick={()=>setClick(true)} id="click">Click Here</button>
    </div>
}

export default Page