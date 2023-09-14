import React from "react";

function InputText ({ placeholder, ToName }){
    return (
        <input 
            type="text" 
            placeholder={placeholder} 
            name={ToName}
            className="border py-2 px-3"
        />
    )
}

export default InputText;