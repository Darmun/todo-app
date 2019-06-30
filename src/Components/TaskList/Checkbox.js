import React from "react";
import "./checkBox.css"

export default function CustomCheckbox ({onChange, checked}){
    return(
<label className="container">
  <input type="checkbox" onChange={onChange} checked={checked}/>
  <span className="checkmark"></span>
</label>
    )
}