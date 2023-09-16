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
        <center><figure><img src="./src/assets/ImagensTiana/experiencia-de-usuario.png"  /> 
        <figcaption>Melhor experiência para o usuário</figcaption>
        <img src="./src/assets/ImagensTiana/transferencia-de-conhecimento.png"  /> 
        <figcaption>Focado na solução e entrega rápida</figcaption> 
        </figure></center>
      </div>
      <div className='conteudo-tiana-solucao'>
        <h2 className='texto-tiana-solucao'>Para integrar na nossa solução</h2>
        <center><img src="./src/assets/ImagensTiana/ideia.png"  /></center>
        <div className='texto-solucao'>
          <h2>ESP32 nas ruas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      </section>
     
      </>
    )
  }
  
  export default Tiana