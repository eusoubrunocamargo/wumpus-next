import playstyles from '../styles/Play.module.css';
import GameMap from '@/components/GameMap/GameMap';
import Controller from '@/components/Controller/Controller';
import { useRouter } from 'next/router';
import { placeGold , placeSafeRoute ,placePits, placeWumpus } from '@/utils/mapHelpers';
import { useContext } from 'react';
import { GridContext } from '@/contexts/GridProvider';
import { PositionContext } from '@/contexts/PositionProvider';
import { GameStateContext } from '@/contexts/GameStateProvider';

export default function Play () {

    const { gridSize } = useContext(GridContext);
    const router = useRouter();

    const { 
        setGoldPosition,  
        setSafePaths,
        setWumpusPosition, 
        setPitPosition,
        setPlayerPosition,
    } = useContext(PositionContext);

    const { resetGame , setGameState} = useContext(GameStateContext);

    const handleSair = () => {
        resetGame();
        router.push('/');
    };

    const populateMap = () => {

        //aciona a cobertura das células e posiciona o player em 0,0
        setPlayerPosition({ x: 0, y: 0});
        setGameState(true);

        //posiciona o ouro a 3 casas de distância do Player
        const newGoldPosition = placeGold(gridSize);
        setGoldPosition(newGoldPosition);

        //estabele uma ou mais rotas seguras
        const mySafePaths = placeSafeRoute(gridSize, newGoldPosition);
        setSafePaths(mySafePaths);

        //posiciona o Wumpus 
        const newWumpusPositions = placeWumpus(gridSize, mySafePaths);
        setWumpusPosition(newWumpusPositions);

        //posiciona os Pits
        const newPitPositions = placePits(gridSize, mySafePaths, newWumpusPositions);
        setPitPosition(newPitPositions);
    };

    return (
        <div className={playstyles.containerGeral}>
            <div className={playstyles.gameContainer}>
                <GameMap/>
                <div className={playstyles.controlContainer}>
                    <Controller/>
                    <div className={playstyles.controlButtonsContainer}>
                        <button onClick={populateMap}>Jogar</button>
                        <button onClick={handleSair}>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    )
}