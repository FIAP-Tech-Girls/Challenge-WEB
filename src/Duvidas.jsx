import {} from 'react'

function Duvidas() {
    return (
    <>
        <div className="duvidasFrequentes">
            <img src="./src/assets/ImagensDuvidas/DuvidasFrequentes.png" />
          <h1>Clique na pergunta desejada que irá aparecer a resposta!</h1>
          <div className="perguntas">
            <label className="pergunta">
                Pergunta
            </label>
            <div className="resposta">
                <p>Resposta</p>
            </div>
        </div>
        <div className="pergunta">
            <label className="pergunta">
                Pergunta
            </label>
            <div className="resposta">
                <p>Resposta</p>
            </div>
        </div>
        <div className="pergunta">
            <label className="pergunta">
                Pergunta
            </label>
            <div className="resposta">
                <p>Resposta</p>
            </div>
        </div>
        <div className="pergunta">
            <label className="pergunta">
                Pergunta
            </label>
            <div className="resposta">
                <p>Resposta</p>
            </div>
        </div>
        <div className="pergunta">
            <label className="pergunta">
                Pergunta
            </label>
            <div className="resposta">
                <p>Resposta</p>
            </div>
        </div>

       <p id="tituloForms">
            Se sua dúvida não foi respondida dentre essas, envie um formulário para as Tech Girls!
            Responderemos em breve!
        </p>

        <div class="formulario">
            <center>
                <form name="formularioDuvidas">
                    <h3>FORMULÁRIO</h3>

                    <label for="name">Nome: </label> <input type="text" placeholder="Insira seu nome" id="nomeUsuario" required> <br><br>
                    <label for="email">Email: </label> <input type="email" placeholder="Insira seu email" id="emailUsuario" required> <br><br>
                    <label for="assunto">Assunto: </label> <input type="text" placeholder="Insira o assunto" id="assunto" required> <br><br>
                    <label for="duvida">Deixe sua dúvida</label><br><br>
                    <input type="text" placeholder="Escreva sua dúvida!" id="duvida" required><br> <br>
                    <input type="submit" value="Enviar" id="enviarDuvida" onclick="">
                </form>
            </center>
        </div>
            
        </div>
      </div>
    </>
    )
  }
  
  export default Duvidas