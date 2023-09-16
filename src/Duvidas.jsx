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

        <div className="formulario">
            
        </div>
      </div>
    </>
    )
  }
  
  export default Duvidas