import React from "react";

function Card ({ createdAt, title, subtitle, content}) {
    return(
        <div className="bg-white shadow-md rounded p-4 mb-4">
            <p className="text-gray-500">{new Date(createdAt).toLocaleString()}</p>
            <h2 className="text-x1 font-semibold">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
            <p>{content}</p>
        </div>
    )
}

export default Card;