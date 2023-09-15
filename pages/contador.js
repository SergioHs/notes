import Breadcrumbs from "@/app/components/Breadcrumbs";
import Button from "@/app/components/Button";
import Navbar from "@/app/components/Navbar";

import React, {useState} from "react";

const ContadorApp = () => {

    let [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return(
        <div>
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>
            <h1>Contador usando useState</h1>

            <p>Contagem: {contador} </p>

            <button 
                onClick={incrementar}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Incrementar
            </button>

            <button 
                onClick={decrementar}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Decrementar
            </button>

            {/*<Button onClick={incrementar}>Incrementar</Button>*/}

        </div>
    )
}

export default ContadorApp;