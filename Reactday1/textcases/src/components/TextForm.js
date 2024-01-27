import React, { useState } from 'react'
import './/style.css'
export default function TextForm() {
    const [text, setText] = useState("Enter Text Here");
    const defaultValue = "Enter Text Here"
    const handleUpClick = () =>
    {
       let newText = text.toUpperCase();
       setText(newText);
    }
    const handleChange = (event) =>
    {
        setText(event.target.value)
    }
    const handlereset = () =>
    {
        setText(defaultValue)
    }
    const handleLpClick = () =>
    {
       let newText = text.toLowerCase();
       setText(newText);
    }
    

  return (
    <>
    <h1>Enter Text to Analyze</h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleChange} id="myBox" rows="3"></textarea>
<button className='btnbtn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='reset' onClick={handlereset}>Reset</button>
<button className='btnbtn-primary' onClick={handleLpClick}>Convert to LowerCase</button>

</div>
</>
  )
}
