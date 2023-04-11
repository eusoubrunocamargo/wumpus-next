import winstyles from '../styles/Win.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Win() {

  const router = useRouter();

  return (
  <div className={winstyles.containerGeralWin}>

    <section className={winstyles.containerSectionWin}>
        <div style={{gridColumn:'1/3', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Image src='/swordsman.png' width={100} height={100} priority alt='gold'/>
        <Image src='/ingots.png' width={100} height={100} priority alt='gold'/>
        </div>
        <span className={winstyles.winTitle}>Bravo!</span>
    </section>

    <nav style={{display:'flex', gap:'2rem'}}>
      <button className={winstyles.winButtons} onClick={()=> router.push('/play')}>Jogar</button>
      <button className={winstyles.winButtons} onClick={()=> router.push('/')}>Sair</button>
    </nav>

  </div>
  );
}

export default Win;
