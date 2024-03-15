import { useState } from "react";
import { formatarCPF, formatarRG, formatarCel } from './mask';

export default function CreateUser(){
    const[name, setName] = useState("");
    const[cpf, setCPF] = useState("");
    const[rg, setRG] = useState("");
    const[celA, setCelA] = useState("");
    const[celR, setCelR] = useState("");
    const[dataNasc, setDataNasc] = useState("");

    function createUser(event){

        event.preventDefault();

        let user = JSON.stringify({
            name: name,
            cpf: cpf,
            rg: rg,
            celA: celA,
            celR: celR,
            dataNasc: dataNasc})

        console.log(user)
    }

    return(
        <div className="App">
            <form onSubmit={createUser} className="form">
            <h1>FORMULÁRIO DE CADÁSTRO</h1>

            <input type="text"
            placeholder="Digite seu Nome"
            required
            value={name}
            onChange={(event) => {setName(event.target.value)}}/>

            <input type="text"
            placeholder="Digite seu CPF"
            required
            value={cpf}
            onChange={(event) => {setCPF(event.target.value)}}
            onBlur={(event) => {formatarCPF(event.target.value)}}/>
            
            <input type="text"
            placeholder="Digite seu RG"
            required
            value={rg}
            onChange={(event) => {setRG(event.target.value)}}/>
            
            <input type="text"
            placeholder="Digite o numero de telefone do aluno"
            required
            value={celA}
            onChange={(event) => {setCelA(event.target.value)}}/>

            <input type="text"
            placeholder="Digite o numero de telefone do responsável"
            required
            value={celR}
            onChange={(event) => {setCelR(event.target.value)}}/>

            <input type="date"
            placeholder="Digite o email do aluno"
            required
            value={dataNasc}
            onChange={(event) => {setDataNasc(event.target.value)}}/>

            <input type="submit"
            required />

            </form>
        </div>
    )
}