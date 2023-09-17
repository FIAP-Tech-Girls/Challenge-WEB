import React, {useState, useEffect} from 'react'
import Typewriter from '.Typewriter'

const Typewriter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedText === words[currentWordIndex]) {
        // Aguarda um breve atraso antes de passar para a próxima palavra
        setTimeout(() => {
          const nextWordIndex =
            currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
          setCurrentWordIndex(nextWordIndex);
        }, 1000); // Tempo de espera de 1 segundo

        return;
      }

      const nextChar = words[currentWordIndex][displayedText.length];
      setDisplayedText((prevText) => prevText + nextChar);
    }, speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, displayedText, speed, words]);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
    setDisplayedText("");
  }, [currentWordIndex, words]);

  return <span>{displayedText}</span>;
}

const App = () =>{
  const words = ["Tecnologia","Inovação","Inclusão", "Empatia"];
}





function Home() {



    return (
      
      <>

      <section className='conteudo-home'>
        <div className='imagem-home'>
        <h1>SCROLL DOWN</h1>
        <img src="./src/assets/ImagensHome/imagemScrolldown.png" />
        </div>
        <div className='conteudo-home-imagem'>
          <p className='titulo-home'>O futuro é <Typewriter words={words} speed={100}/></p>
          
        </div>
        <center><img src="./src/assets/ImagensHome/imagem1.png" className='imagem1-home' /></center>
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
      </section>
      </>
    )
  }
  
  export default Home

  