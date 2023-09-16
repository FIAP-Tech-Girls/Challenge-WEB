import {} from 'react'

function Tiana() {
    return (
      <>
      <section className='conteudo-tiana'>
        <img src="./src/assets/ImagensTiana/Titulo.png" className='BotaoFundo'  />
      <h2 className='titulo-tiana'>A nossa inteligência artificial</h2>
      <div className='conteudo-tiana-imagem'>
        <img src="./src/assets/ImagensTiana/Imagem1.png" />
        <p className='texto-tiana'>Tiana é uma inteligência artificial avançada, desenvolvida em Python, que tem como objetivo melhorar a experiência do usuário no trânsito. Utilizando aprendizado de máquina e processamento de dados em tempo real, Tiana coleta e fornece informações precisas sobre o tráfego em tempo real. Além disso, interage com os usuários por meio de um aplicativo móvel, permitindo solicitar informações, receber alertas e obter rotas personalizadas com base em preferências e horários de viagem. Tiana busca tornar a locomoção mais eficiente e menos frustrante em um mundo onde o trânsito é um desafio cotidiano.</p>
      </div>
      <div className='conteudo-tiana-imagem'>
          <p className='texto-tiana'>Tiana é uma inteligência artificial avançada, desenvolvida em Python, que tem como objetivo melhorar a experiência do usuário no trânsito. Utilizando aprendizado de máquina e processamento de dados em tempo real, Tiana coleta e fornece informações precisas sobre o tráfego em tempo real. Além disso, interage com os usuários por meio de um aplicativo móvel, permitindo solicitar informações, receber alertas e obter rotas personalizadas com base em preferências e horários de viagem. Tiana busca tornar a locomoção mais eficiente e menos frustrante em um mundo onde o trânsito é um desafio cotidiano.</p>
          <img src="./src/assets/ImagensTiana/Imagem2.png"  />
      </div>
      <div className='conteudo-tiana-diferencial'>
        <h2 className='texto-tiana-diferencial'>Nossos diferenciais</h2>
        <div className='grid-container'>
          <figure className='grid-item1'><img src="./src/assets/ImagensTiana/experiencia-de-usuario.png" className='imagem1-tiana'/><figcaption className='imagem-tiana-legenda'>Melhor experiência para o usuário</figcaption></figure>
          <figure className='grid-item2'><img src="./src/assets/ImagensTiana/transferencia-de-conhecimento.png" className='imagem2-tiana'/><figcaption className='imagem-tiana-legenda2'>Focado na solução e entrega rápida</figcaption></figure>
        </div>
      </div>
      <div className='conteudo-tiana-solucao'>
        <h2 className='texto-tiana-solucao'>Para integrar na nossa solução</h2>
        <center><img src="./src/assets/ImagensTiana/ideia.png"  /></center>
        <div className='texto-solucao'>
          <h2>ESP32 nas ruas</h2>
          <p>A ideia é criar um projeto de escala reduzida da Avenida Paulista, que é uma das vias mais movimentadas da cidade de São Paulo,<br />
             com grande fluxo de veículos e pessoas durante a semana, em praticamente todos os horários. Para fins de testes e experimentação, <br />
             planejamos construir uma maquete que será integrada com o sistema ESP32, um microcontrolador versátil e poderoso, <br />
             para simular um exemplo de aplicação de tráfego inteligente. Nesse cenário, estamos focados em simular o funcionamento de um <br />
             sistema de semáforo inteligente.Além de controlar os semáforos, o ESP32 pode ser utilizado para coletar dados sobre o tráfego<br />
             simulado, como tempos de espera, detecção de congestionamentos e até mesmo interações com veículos autônomos em miniatura, se for o caso.
          </p>
        </div>
      </div>
      </section>
     
      </>
    )
  }
  
  export default Tiana