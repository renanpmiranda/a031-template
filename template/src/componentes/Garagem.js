import React from "react";
import {Carro} from "./Carro";

export function Garagem() {
    const nome = "Renan"
    return(
        <>
            <h1>Garagem de {nome}</h1>
            <Carro/>
            <Carro/>
            <Carro/>
            <Carro/>
        </>
    )
}