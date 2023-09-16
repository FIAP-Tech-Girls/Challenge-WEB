import {} from 'react'

function Projetos() {
    return (
      <>
      <section className='conteudo-projetos'>
        <img src="./src/assets/ImagensProjetos/TituloTransito.png" className='BotaoFundo'/>
        <h2 className='titulo-projetos'>Smart Cities</h2>
        <div className='conteudo-projetos-texto'>
          <img src="./src/assets/ImagensProjetos/Imagem1.png" />
          <p className='texto-projetos'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros tellus, congue vitae ultricies quis, imperdiet a sapien. Nam elit dolor, laoreet vel dolor vitae, consequat porttitor lectus. Proin cursus imperdiet neque id lobortis. Nullam cursus ligula sit amet enim elementum sagittis eget sed tellus. Integer augue libero, molestie in condimentum non, rhoncus ac lorem. Integer sagittis luctus dui. Quisque non sem lectus. Proin molestie ultricies lorem ac efficitur. Vestibulum eu diam id nisi aliquam convallis a in metus. Vivamus imperdiet odio eget elit mattis, ut dictum lacus pharetra. Etiam ultricies condimentum.</p>
        </div>
        <h2 className='titulo-projetos'>Trânsito, o tema escolhido</h2>
      <div className='conteudo-projetos-texto'>
        <p className='texto-projetos'>São Paulo, uma das maiores metrópoles do mundo, enfrenta graves problemas de trânsito devido ao crescimento rápido da cidade e à falta de investimento em infraestrutura. Isso resultou em congestionamentos frequentes, longos tempos de deslocamento e impactos negativos na qualidade de vida dos moradores. O aumento de veículos particulares, a ineficiência do transporte público e o planejamento urbano inadequado são algumas das principais causas do caos no trânsito. A tecnologia desempenha um papel crucial na solução desse problema, com aplicativos de mobilidade urbana e sistemas inteligentes de monitoramento e controle do tráfego contribuindo para reduzir o congestionamento e melhorar a eficiência das viagens.</p>
        <img src="./src/assets/ImagensProjetos/Imagem2.png" />
      </div>
      <div className='Imagem-Botao'>
        <h2>Conheça mais sobre o Projeto e as soluções!</h2>
        <a href="Tiana"><img src="./src/assets/ImagemFundoBotao.png" className='BotaoFundo' /></a>
      </div>
        <img src="./src/assets/ImagensProjetos/TituloSFome.png" className='BotaoFundo' />
        
        <div className='conteudo-projetos-SFOME-texto'>
          <img src="./src/assets/ImagensProjetos/Imagem3.png" alt="" />
          <div className='textos-projetos'>
          <h2 className='titulo-projetos-SFOME'>Um projeto para um futuro melhor</h2>
          <p className='texto-projetos-SFOME'>A SFOME é uma empresa secundária, criada por nós, Tech Girls, com o objetivo de combater a fome no mundo e evitar mais desperdícios. Juntamente com o nosso site, onde possuem mais informações sobre o tema e nosso projeto, também possuem campanhas de conscientização nas redes sociais da empresa, para alcançar um público maior e para conscientizá-los do problema e como eles poderiam ajudar na campanha.</p>
          </div>
        </div>
        <p className='frase-SFOME'>"A única forma de chegar ao impossível é acreditar que é possível"</p>
      
      </section>
     
      </>
    )
  }
  
  export default Projetos