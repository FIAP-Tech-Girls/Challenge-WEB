import { useState } from "react";


function FormularioLogin (){
    const [email1,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleEmailchange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhachange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email1);
        console.log('Senha:', senha);
    };



    return(
        <>
        <div className='container'>
        <div className="FormularioLogin">
            <form onSubmit={handleSubmit}>
                <h1 className="TituloLogin">LOGIN</h1>
                <div className="emailLogin">
                    <label htmlFor="email1">Email:</label>
                    <input type="email" id="emaillogin" placeholder="Insira seu email" value={email1} onChange={handleEmailchange} required />
                </div>
                <div className="senhaLogin">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" value={senha} onChange={handleSenhachange} placeholder="Insira a senha" required />
                </div>
                <p>Esqueceu a senha? <a href="#">Clique aqui!</a></p>
                <div>
                    <center><input type="submit" value="Enviar" id='enviarDuvida' required/></center>
                </div>
            </form>
        </div>
        
        <p className="legenda-formulario">Não possui cadastro? <a href="Cadastro">Cadastre-se clicando aqui!</a></p> 
        </div>
        </>
    )
}


export default FormularioLogin;