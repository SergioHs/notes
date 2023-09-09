import React from "react";
import titleStyles from '../styles/Title.module.css'

function Title ({ children }){
    return (
        <h1 className={titleStyles.title}>
            {children}
        </h1>
    )
}

export default Title;