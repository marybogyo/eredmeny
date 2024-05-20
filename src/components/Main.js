import React from "react";
import useAdatContext from "../contexts/AdatContext";
import Eredmenyek from "./Eredmenyek";


export default function Main(){
    const {tesztLista} = useAdatContext();

    return(
        <>
            <div>
                {tesztLista&&tesztLista.map((element, index)=>{
                    return<Eredmenyek adat={element} key={index}/>
                })}
            </div>
        </>
    )
}