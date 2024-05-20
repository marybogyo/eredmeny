import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Kategoria(){
    const {kategoriaLista} = useAdatContext();
    const [kategoriak, setKategoriak] = useState("válassz");

    const handleKatChange = (event) =>{
        setKategoriak(event.target.value);
    }
    return(
        <select name="kategoria"
                 id="kategoria"
                 value={kategoriak}
                 onChange={handleKatChange}
                 >
                    <option value="valassz">Válassz témát!</option>
                    {kategoriaLista.length > 0 && kategoriaLista.map((element)=>(
                        <option key={element.id} value={element.kategorianev}>
                        {element.kategorianev}</option>
                    ))}
                 </select>
    )
}