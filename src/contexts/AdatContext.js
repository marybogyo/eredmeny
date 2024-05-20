import axois from "../api/axois";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AdatProvider = ({children})=>{
    const[kategoriaLista, setKategoriaLista]=useState([]);
    const [tesztLista, setTesztLista] = useState([]);

    const getLista = async(vegpont, callBack)=>{
        const{data} = await axois.get(vegpont);
        callBack(data);
    }

    useEffect(()=>{
        getLista('api/kategoria', setKategoriaLista);
        getLista('api/tesztek', setTesztLista);
    }, []);
    return(
        <AuthContext.Provider value={{kategoriaLista, tesztLista}}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAdatContext(){
    return useContext(AuthContext)
}