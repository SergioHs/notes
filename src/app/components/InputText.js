import React from "react";

function InputText ({ placeholder }){
    return (
        <input 
            type="text" 
            placeholder={placeholder} 
            className="border py-2 px-3"
        />
    )
}

export default InputText;