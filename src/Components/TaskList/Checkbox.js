import React from "react";
import "./checkBox.css"

export default function CustomCheckbox ({onChange}){
    return(
<label class="container">
  <input type="checkbox" onChange={onChange}/>
  <span class="checkmark"></span>
</label>
    )
}