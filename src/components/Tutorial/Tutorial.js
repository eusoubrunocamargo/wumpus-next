import styles from '../../styles/Tutorial.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';


function Tutorial() {

  const router = useRouter();

  const [onboard, setOnboard] = useState(1);

  return (
  <div className={styles.containerModalTutorial}>
    <div className={styles.containerModalCardTutorial}>

        {onboard === 1 && <>
        <h1>Wumpus</h1>
        <Image src='/swordsman.png' priority alt='jogador' width={100} height={100}/>
        <span style={{textAlign: 'center'}}>Embarque nesta aventura e desvende um labirinto 
        cheio de perigos e tesouros! Evite Wumpus, criaturas mortais
        que habitam o local, e não caia nas armadilhas dos poços. 
        Sua missão: encontrar o ouro escondido e escapar deste 
        lugar traiçoeiro. Boa sorte, aventureiro!</span></>}

        {onboard === 2 && <>
        <h1>Inimigos</h1>
        <span style={{textAlign: 'center'}}>Enfrente os perigosos Wumpus e 
        evite cair nas armadilhas mortais dos poços! Esteja atento aos 
        sinais nas adjacências ortogonais: o fedor indica proximidade com 
        um Wumpus, e a brisa alerta sobre um poço próximo.</span>
        <figure style={{display:'flex', gap:'3rem'}}>
        <Image src='/danger.png' priority alt='danger' width={50} height={50}/>
        <Image src='/wind.png' priority alt='wind' width={50} height={50}/>
        </figure></>}

        {onboard === 3 && <>
        <h1>Atenção!</h1>
        <span style={{textAlign: 'center'}}>Esteja atento aos 
        sinais nas adjacências ortogonais!</span>
        <div style={{display: 'flex', gap: '1rem'}}>
            <section className={styles.CarouselGridExample}>
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/danger.png' priority width={20} height={20} alt='wumpus'/></div>
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/danger.png' priority width={20} height={20} alt='wumpus'/></div>            
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/monster.png' priority width={30} height={30} alt='wumpus'/></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/danger.png' priority width={20} height={20} alt='wumpus'/></div>            
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/danger.png' priority width={20} height={20} alt='wumpus'/></div>
                <div></div>
            </section>
            <section className={styles.CarouselGridExample}>
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/wind.png' priority width={20} height={20} alt='wumpus'/></div>
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/wind.png' priority width={20} height={20} alt='wumpus'/></div>            
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/hole.png' priority width={38} height={38} alt='wumpus'/></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/wind.png' priority width={20} height={20} alt='wumpus'/></div>            
                <div></div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><Image src='/wind.png' priority width={20} height={20} alt='wumpus'/></div>
                <div></div>
            </section>
        </div>
        <figure style={{display:'flex', gap:'3rem'}}>
        </figure></>}

        {onboard === 4 && <>
        <h1>Ouro!</h1>
        <Image src='/ingots.png' priority alt='gold' width={100} height={100}/>
        <span style={{textAlign: 'center'}}>Seu objetivo final é encontrar o
        precioso ouro escondido no labirinto! Explore o mapa com sabedoria 
        e cuidado, e lembre-se de que o ouro é a chave para a vitória neste 
        emocionante desafio.</span></>}

        <nav>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem'}}>
                <button onClick={()=>setOnboard(1)} className={`${styles.BtnCarousel} ${onboard === 1? styles.BtnCarouselActive:''}`}></button>
                <button onClick={()=>setOnboard(2)} className={`${styles.BtnCarousel} ${onboard === 2? styles.BtnCarouselActive:''}`}></button>
                <button onClick={()=>setOnboard(3)} className={`${styles.BtnCarousel} ${onboard === 3? styles.BtnCarouselActive:''}`}></button>
                <button onClick={()=>setOnboard(4)} className={`${styles.BtnCarousel} ${onboard === 4? styles.BtnCarouselActive:''}`}></button>
            </div>
            <button className={styles.tutorialButton} onClick={()=> router.push('/play')}>JOGAR</button>
        </nav>
    </div>
  </div>
  );
}

export default Tutorial;
