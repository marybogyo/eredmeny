import React, { useState } from "react";
import '../eredmeny.css';

export default function Eredmenyek({adat}){
    const [selectBotton, setSelectBotton] = useState(null);

    return(
        <div className="div-container">
            <div className="kerdes">
                <h3>{adat.kerdes}</h3>
            </div>
            <div className="button-container">

                <button
                        style={{ backgroundColor: selectBotton === adat.v1 ? "green" : undefined,
                        color:selectBotton===adat.v1?"white": undefined }}
                        onClick={() => setSelectBotton(adat.v1)}
                    >
                        {adat.v1}
                    </button>

                    <button
                        style={{ backgroundColor: selectBotton === adat.v2 ? "red" : undefined,
                        color:selectBotton===adat.v2?"white": undefined }}
                        onClick={() => setSelectBotton(adat.v2)}
                    >
                        {adat.v2}
                    </button>

                    <button
                        style={{ backgroundColor: selectBotton === adat.v3 ? "red" : undefined,
                        color:selectBotton===adat.v3?"white": undefined }}
                        onClick={() => setSelectBotton(adat.v3)}
                    >
                        {adat.v3}
                    </button>

                    <button
                        style={{ backgroundColor: selectBotton === adat.v4 ? "red" : undefined,
                        color:selectBotton===adat.v4?"white": undefined }}
                        onClick={() => setSelectBotton(adat.v4)}
                    >
                        {adat.v4}
                    </button>

        </div>
        </div>
    )
}