import { useState } from "react";

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

    function formatarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '')
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
        cpf = cpf.replace(/(\d{3})(\d{1,2})/, '$1-$2')
        cpf = cpf.replace(/(-\d{2})\d+?$/, '$1')
    
        setCPF(cpf);
    }

    function formatarRG(rg){
        rg = rg.replace(/(\d{2})(\d)/, '$1.$2')
        rg = rg.replace(/(\d{3})(\d)/, '$1.$2')
        rg = rg.replace(/(\d{3})(\d{1,2})/, '$1-$2')
        rg = rg.replace(/(-\d{1})\d+?$/, '$1')

        setRG(rg);
    }

    function formatarCel(cel, AouR){
        cel = cel.replace(/\D/g, '')
        cel = cel.replace(/(\d{2})(\d)/, '($1) $2')
        cel = cel.replace(/(\d{5})(\d)/, '$1-$2')
        cel = cel.replace(/(\d{4})(\d{1,2})/, '$1-$2')
        cel = cel.replace(/(-\d{1})\d+?$/, '$1')

        if(AouR == "A")
            setCelA(cel);

        setCelR(cel);
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
            maxLength={14}
            value={cpf}
            onChange={(event) => {formatarCPF(event.target.value)}}/>
            
            <input type="text"
            placeholder="Digite seu RG"
            required
            maxLength={12}
            value={rg}
            onChange={(event) => {formatarRG(event.target.value)}}/>
            
            <input type="text"
            placeholder="Digite o numero de telefone do aluno"
            required
            value={celA}
            onChange={(event) => {formatarCel(event.target.value)}}/>

            <input type="text"
            placeholder="Digite o numero de telefone do responsável"
            required
            value={celR}
            onChange={(event) => {formatarCel(event.target.value)}}/>

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