import {} from 'react'

function Techgirls() {
    return (
      <>
      <div className='container'>
      <section className='conteudo-techgirls'>
      <h2 className='titulo-tech'>Quem nós somos?</h2>
      <div className='conteudo-tech-imagem'>
        <img src="./src/assets/ImagensTechGirl/Imagem1.png" className='conteudo-tech-img'/>
        <p className='texto-tech'>Tech Girls, um grupo de quatro estudantes de Engenharia de Software na FIAP, estão determinadas a desafiar o histórico domínio masculino na indústria de tecnologia. Nosso objetivo é unir nossos conhecimentos para criar projetos que beneficiem a sociedade e impulsionem nossa aprendizagem. Acreditamos que a diversidade é fundamental para impulsionar a inovação e estamos comprometidas em destacar o papel das mulheres nesse campo. Queremos ser uma fonte de inspiração para jovens em todo o mundo, mostrando que não há limites para o que as mulheres podem alcançar na tecnologia, abrindo portas para futuras gerações.</p>
      </div>
      <div className='conteudo-tech-imagem'>
        <p className='texto-tech'>Acreditamos que a diversidade desempenha um papel fundamental na promoção da inovação, e estamos empenhadas em mostrar que as mulheres têm um espaço vital e merecido nesse campo. Queremos ser uma fonte de inspiração para jovens mulheres em todo o mundo, demonstrando que não existem limites para as realizações das mulheres na tecnologia.

Nossa missão vai além do nosso próprio sucesso. Estamos comprometidas em abrir portas e criar oportunidades para as próximas gerações de mulheres na indústria da tecnologia. Acreditamos firmemente que, ao trabalharmos juntas e encorajarmos mais mulheres a seguirem suas paixões tecnológicas, podemos moldar um futuro mais inclusivo, inovador e equitativo para todos. Junte-se a nós nessa jornada emocionante em direção a um mundo tecnológico mais diversificado e igualitário.</p>
        <img src="./src/assets/ImagensTechGirl/Imagem2.png"  />
      </div>
      </section>
      <div className='Imagem-Botao' >
        <h2 className='Imagem-Botao-tech-texto'>Conheça nossos projetos!</h2>
        <a href="Projetos"><img src="./src/assets/ImagemFundoBotao.png" className='BotaoFundo' /></a>
      </div>
      </div>
      </>
    )
  }
  
  export default Techgirls