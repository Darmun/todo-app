import React,{Fragment} from "react";
import "./checkBox.css"

export default function CustomCheckbox ({onChange}){
    return(
<label className="container">
  <input type="checkbox" onChange={onChange}/>
  <span className="checkmark"></span>
</label>
    )
}