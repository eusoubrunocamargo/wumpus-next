import loseStyles from '../styles/Lose.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Lose() {

  const router = useRouter();

  return (
  <div className={loseStyles.containerGeralLose}>

    <section className={loseStyles.containerSectionLose}>
        <div style={{gridColumn:'1/3', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Image src='/death.png' width={100} height={100} priority alt='gold'/>
        </div>
        <span className={loseStyles.loseTitle}>R.I.P</span>
    </section>

    <nav style={{display:'flex', gap:'2rem'}}>
      <button className={loseStyles.loseButtons} onClick={()=> router.push('/play')}>Jogar</button>
      <button className={loseStyles.loseButtons} onClick={()=> router.push('/')}>Sair</button>
    </nav>

  </div>
  );
}

export default Lose;
