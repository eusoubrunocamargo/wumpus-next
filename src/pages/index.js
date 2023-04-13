import mainstyles from '../styles/Main.module.css';
import { useRouter } from 'next/router';
import Tutorial from '@/components/Tutorial/Tutorial';
import { useState } from 'react';

function Main() {

  const router = useRouter();
  const [showTutorial, setShowTutorial] = useState(false);
  const handleShowTutorial = () => {
    setShowTutorial(true);
  };

  return (
  <div className={mainstyles.containerGeralMain}>

    <h1>WUMPUS</h1>

    <nav>
      <button className={mainstyles.mainButton} onClick={()=> router.push('/play')}>JOGAR</button>
      <button className={mainstyles.mainButton} onClick={handleShowTutorial}>TUTORIAL</button>
    </nav>

    {showTutorial && <Tutorial/>}

  </div>
  );
}

export default Main;
