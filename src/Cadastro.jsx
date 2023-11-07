import { useState } from "react";


function Cadastro (){
    const [email2,setEmail] = useState('');
    const [nome2, setNome] = useState('');
    const [senha2,setSenha] = useState('');

    const handleEmailchange = (event) => {
        setEmail(event.target.value);
    };

    const handleNomechange = (event) => {
        setNome(event.target.value);
    }

    const handleSenhachange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email2);
        console.log('Nome:', nome2);
        console.log('Senha:', senha2);
    };



    return(
        <>
        <div className="container">
        <div className="FormularioLogin">
            <form onSubmit={handleSubmit}>
                <h1 className="TituloLogin">CADASTRO</h1>
                <div className="emailLogin">
                    <label htmlFor="email2">Email:</label>
                    <input type="email" id="emaillogin" placeholder="Insira seu email" value={email2} onChange={handleEmailchange} required />
                </div>
                <div className="nomeCadastro">
                    <label htmlFor="nome2">Nome:</label>
                    <input type="text" id="nomecadastro" placeholder="Insira seu nome" value={nome2} onChange={handleNomechange} required/>
                </div>
                <div className="senhaLogin">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" value={senha2} onChange={handleSenhachange} placeholder="Insira a senha" required />
                </div>
                <div>
                    <center><button type="submit" id="enviarDuvida">Cadastrar</button></center>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}


export default Cadastro;