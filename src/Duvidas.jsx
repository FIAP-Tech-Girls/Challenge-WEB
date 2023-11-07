import {} from 'react'

function Duvidas() {
    return (
    <>
    <div className='container'>
    <img src="./src/assets/ImagensDuvidas/DuvidasFrequentes.png" className='ImagemDuvidas' />
    <center><div className='duvidasFrequentes'>
       <div className='perguntas'>
         <input type="checkbox" id='pergunta1' />
         <label htmlFor="pergunta1">
         Como a tecnologia ajuda a melhorar o trânsito?
            </label>
        <div className='respostas'>
            <p>
            A tecnologia melhora o trânsito de várias maneiras, incluindo: <br />
            - Sistemas de gerenciamento de tráfego: Utilizam dados em tempo real para ajustar semáforos, rotas e horários de transporte público para minimizar congestionamentos.<br />
            - Aplicativos de navegação: Fornecem informações em tempo real sobre tráfego, acidentes e rotas alternativas aos motoristas.<br />
            - Veículos autônomos: Prometem melhorar a eficiência e a segurança do trânsito ao reduzir acidentes causados por erro humano e ao otimizar o fluxo de tráfego.<br />
            - Sensores e câmeras: Monitoram o trânsito e coletam dados para análises que permitem planejamento urbano mais inteligente.
            </p>
        </div>
        </div> 
        <div className='perguntas'>
         <input type="checkbox" id='pergunta2' />
         <label htmlFor="pergunta2">
            Como a tecnologia está contribuindo para a gestão do tráfego nas cidades?
            </label>
        <div className='respostas'>
            <p>
            A tecnologia é usada para a gestão do tráfego por meio de sistemas de controle de semáforos adaptativos que ajustam os tempos de sinalização com base no fluxo de tráfego em tempo real. <br />
            Além disso, sensores e câmeras de monitoramento são usados para coletar dados de tráfego, permitindo que as autoridades tomem decisões informadas sobre o planejamento urbano e a gestão do tráfego.
            </p>
        </div>
        </div> 
        <div className='perguntas'>
         <input type="checkbox" id='pergunta3' />
         <label htmlFor="pergunta3">
         Quais são os problemas causados pela dependência excessiva de tecnologia no trânsito?
            </label>
        <div className='respostas'>
            <p>
            A dependência excessiva de tecnologia no trânsito pode causar alguns problemas, incluindo: <br />

            - Vulnerabilidade a falhas técnicas: A tecnologia pode falhar, e a dependência excessiva dela pode criar situações perigosas no trânsito. <br />
            - Privacidade: A coleta de dados em larga escala por sistemas de trânsito tecnológicos pode levantar preocupações com a privacidade dos indivíduos. <br />
            - Desemprego: A automação de veículos pode levar ao desemprego de motoristas de caminhões e táxis, exigindo medidas de requalificação. <br />
            - Dependência: As pessoas podem se tornar excessivamente dependentes de aplicativos de navegação, perdendo a capacidade de navegar sem eles.
            </p>
        </div>
        </div> 
        <div className='perguntas'>
         <input type="checkbox" id='pergunta4' />
         <label htmlFor="pergunta4">
            Como a tecnologia está sendo usada para melhorar a segurança no trânsito?
            </label>
        <div className='respostas'>
            <p>
            A tecnologia é usada para melhorar a segurança no trânsito de diversas maneiras, incluindo sistemas avançados de assistência ao motorista (ADAS) <br />
            que monitoram o ambiente ao redor do veículo, alertando o motorista sobre perigos iminentes. Além disso, a tecnologia permite a comunicação entre veículos <br />
            (V2V) e entre veículos e infraestrutura (V2I), permitindo a troca de informações em tempo real para evitar colisões.
            </p>
        </div>
        </div> 
        <div className='perguntas'>
         <input type="checkbox" id='pergunta5' />
         <label htmlFor="pergunta5">
            Qual seria uma outra maneira do sistema Arduíno auxiliar no trânsito?
            </label>
        <div className='respostas'>
            <p>
            O sistema Arduino pode ser usado para melhorar o trânsito de várias maneiras, como semáforos inteligentes que se adaptam ao tráfego, <br />
            sistemas de detecção de congestionamento, monitoramento da qualidade do ar, estacionamento inteligente e controle de velocidade. <br />
            Também pode ser aplicado em sistemas de transporte público, iluminação pública eficiente, monitoramento de cruzamentos perigosos, <br />
            contagem de veículos e alertas de acidentes, contribuindo para a eficiência, segurança e sustentabilidade do tráfego urbano.
            </p>
        </div>
        </div> 
    </div>
    <div className='tituloFormulario'>
        <h2>Se sua dúvida não foi respondida, envie um e-mail para as Tech Girls através desse formulário</h2>
    </div></center>

    <div className='formulario'>
        <center>
            <form className="form" name='formularioDuvidas'>
                <h3>FORMULÁRIO</h3>
                <label htmlFor="name">Nome:</label> <input type="text" placeholder='Insira seu nome' id='nomeUsuario' required /> <br />
                <label htmlFor="email">Email:</label> <input type="email" placeholder='Insira seu email' id='emailUsuario' required /> <br />
                <label htmlFor="assunto">Assunto:</label> <input type="text" placeholder='Insira o assunto' id='assunto' required /> <br />
                <h3>Escreva sua mensagem</h3>
                <input type="text" placeholder='digite sua mensagem aqui' id='duvida' required/> <br />
                <input type="submit" value="Enviar" id='enviarDuvida' required/>
            </form>
        </center>
    </div>
    </div>
    </>
    )
  }
  
  export default Duvidas