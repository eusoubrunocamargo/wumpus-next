import mainstyles from '../styles/Main.module.css';
import { useRouter } from 'next/router';

function Main() {

  const router = useRouter();

  return (
  <div className={mainstyles.containerGeralMain}>

    <h1>WUMPUS</h1>

    <nav>
      <button onClick={()=> router.push('/play')}>JOGAR</button>
    </nav>

  </div>
  );
}

export default Main;
