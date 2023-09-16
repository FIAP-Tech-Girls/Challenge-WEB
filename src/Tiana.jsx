import {} from 'react'

function Tiana() {
    return (
      <>
      <section className='conteudo-tiana'>
        <img src="./src/assets/ImagensTiana/Titulo.png" className='BotaoFundo'  />
      <h2 className='titulo-tiana'>A nossa inteligência artificial</h2>
      <div className='conteudo-tiana-imagem'>
        <img src="./src/assets/ImagensTiana/Imagem1.png" />
        <p className='texto-tiana'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros tellus, congue vitae ultricies quis, imperdiet a sapien. Nam elit dolor, laoreet vel dolor vitae, consequat porttitor lectus. Proin cursus imperdiet neque id lobortis. Nullam cursus ligula sit amet enim elementum sagittis eget sed tellus. Integer augue libero, molestie in condimentum non, rhoncus ac lorem. Integer sagittis luctus dui. Quisque non sem lectus. Proin molestie ultricies lorem ac efficitur. Vestibulum eu diam id nisi aliquam convallis a in metus. Vivamus imperdiet odio eget elit mattis, ut dictum lacus pharetra. Etiam ultricies condimentum.</p>
      </div>
      <div className='conteudo-tiana-imagem'>
          <p className='texto-tiana'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros tellus, congue vitae ultricies quis, imperdiet a sapien. Nam elit dolor, laoreet vel dolor vitae, consequat porttitor lectus. Proin cursus imperdiet neque id lobortis. Nullam cursus ligula sit amet enim elementum sagittis eget sed tellus. Integer augue libero, molestie in condimentum non, rhoncus ac lorem. Integer sagittis luctus dui. Quisque non sem lectus. Proin molestie ultricies lorem ac efficitur. Vestibulum eu diam id nisi aliquam convallis a in metus. Vivamus imperdiet odio eget elit mattis, ut dictum lacus pharetra. Etiam ultricies condimentum.</p>
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