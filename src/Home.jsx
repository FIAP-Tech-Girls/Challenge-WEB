import {} from 'react';

function Home() {



    return (
      
      <>

      <section className='conteudo-home'>
        <div className='imagem-home'>
          <h1>SCROLL DOWN</h1>
          <img src="./src/assets/ImagensHome/imagemScrolldown.png" />
          <button id='scroll'><img src="./src/assets/ImagensHome/seta2.png"/></button>
        </div>
        

        <div className='conteudo-home-imagem'>
          <p className='titulo-home'>O futuro é Tecnologia<span className="texto-escrito"></span><span className="cursor">&nbsp;</span></p>
          
          <center><img src="./src/assets/ImagensHome/imagem1.png" className='imagem1-home' /></center>
          
          
        </div>
        
        
          <h2 className='titulo-home-texto'>Um pouco sobre quem somos!</h2>
          <div className='conteudo-home-texto'>
          <img src="./src/assets/ImagensHome/imagem2.png" />
          <p className='texto-home'>Somos as Tech Girls, um grupo constituído por quatro estudantes de Engenharia de Software na FIAP, firmemente decididas a desafiar a histórica predominância masculina na indústria de tecnologia. Nossa meta primordial é unir nossos conhecimentos para desenvolver projetos que tragam benefícios à sociedade e, ao mesmo tempo, impulsionem nosso próprio aprendizado. Acreditamos profundamente que a diversidade desempenha um papel fundamental na promoção da inovação, e estamos totalmente empenhadas em evidenciar a contribuição das mulheres nesse campo. Nosso objetivo é servir de fonte de inspiração para jovens em todo o mundo, demonstrando que não há limites para o que as mulheres podem alcançar na área da tecnologia, abrindo caminhos para as próximas gerações..</p>
        </div>
        <div className='conteudo-home-imagem-reconhecimentos'>
          <h2 className='titulo-reconhecimentos'>Nossos reconhecimentos</h2>
          <div className='lampada-home'>
            <figure><img src="./src/assets/ImagensHome/lampada-de-ideia.png"/><figcaption className='legenda-home1'>1º lugar na Global Solution pela Fiap</figcaption></figure>
            <figure><img src="./src/assets/ImagensHome/lampada-de-ideia.png"/><figcaption className='legenda-home2'>Grupo escolhido pela IBM</figcaption></figure>
            <figure><img src="./src/assets/ImagensHome/lampada-de-ideia.png"/><figcaption className='legenda-home3'>Reconhecimento de professores</figcaption></figure>
          </div>
        </div>
        <div className='botoes'>
          <a href="./Techgirls"><button className='botaoHome'  id="botaoSaibaMais">Saiba mais!</button></a>
          <a href="./Projetos"><button className='botaoHome' id="botaoNossosProjetos">Nossos projetos</button></a>
        </div>
      </section>
      </>
    )
  }


  
  export default Home

  