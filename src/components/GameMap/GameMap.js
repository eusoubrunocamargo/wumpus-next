import { GridContext } from '@/contexts/GridProvider';
import { PositionContext } from '@/contexts/PositionProvider';
import { useContext, useEffect } from 'react';
import gamestyles from '../../styles/Game.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GameStateContext } from '@/contexts/GameStateProvider';


const GameMap = () => {

    const router = useRouter();
    
    const { gridSize } = useContext(GridContext);

    const { 
        playerPosition, 
        goldPosition, 
        // safePaths,
        wumpusPosition, 
        pitPosition,
        visitedCells,
        setVisitedCells,
    } = useContext(PositionContext);
    
    const { resetGame, gameState } = useContext(GameStateContext);

    const rooms = [];

    const isPlayerPosition = (x,y) => {
        return (playerPosition.x === x && playerPosition.y === y);
    }

    const isVisited = (x,y) => {
        return visitedCells.has(`${x}-${y}`);
    };

    const maskedCell = (x,y) => {
        return !isVisited(x,y)?{
            backgroundColor: 'gray',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
        } : {};
    };

    const isGoldPosition = (x,y) => {
        return (goldPosition.x === x && goldPosition.y === y);
    };

    // const isSafePath = (x,y) => {
    //     return safePaths.some((path) => {
    //         return path.some((cell) => cell.x === x && cell.y === y);
    //     });
    // };

    const isWumpusPosition = (x,y) => {
        return wumpusPosition.some((pos) => pos.x === x && pos.y === y);
    };

    const isPitPosition = (x,y) => {
        return pitPosition.some((pos) => pos.x === x && pos.y === y);
    };

    const isAdjacentWumpus = (x,y) => {
        return (
            !isWumpusPosition(x,y) &&
            !isGoldPosition(x,y) && 
            !isPitPosition(x,y) && 
            wumpusPosition.some((pos) => 
            (pos.x === x + 1 && pos.y === y) ||
            (pos.x === x - 1 && pos.y === y) ||
            (pos.x === x && pos.y === y + 1) ||
            (pos.x === x && pos.y === y - 1)
        )
        );
    };

    const isAdjacentPit = (x,y) => {
        return (
            !isWumpusPosition(x,y) &&
            !isGoldPosition(x,y) && 
            !isPitPosition(x,y) && 
            pitPosition.some((pos) => 
            (pos.x === x + 1 && pos.y === y) ||
            (pos.x === x - 1 && pos.y === y) ||
            (pos.x === x && pos.y === y + 1) ||
            (pos.x === x && pos.y === y - 1)
        )
        );
    };

    const isFindGold = () => {
        return isGoldPosition(playerPosition.x, playerPosition.y);
    };

    const isFindWumpusOrPit = () => {
        return (
            isWumpusPosition(playerPosition.x, playerPosition.y)||
            isPitPosition(playerPosition.x, playerPosition.y)
        );
    };

    useEffect(() => {
        if(gameState){
        setVisitedCells((prev) => {
            const newVisited = new Set(prev);
            newVisited.add(`${playerPosition.x}-${playerPosition.y}`);
            return newVisited;
        })}
        if(isFindGold()){
            resetGame();
            router.push('/win');
        }
        if(isFindWumpusOrPit()){
            resetGame();
            router.push('/lose');
        }
    },[playerPosition,router]);

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            
            let content = ' ';

            // const isSafe = isSafePath(x,y);

            if(isPlayerPosition(x,y)){
                content = <Image style={{ position: 'absolute', left: 0, marginLeft: '0.3rem'}}alt='character' priority src='/swordsman.png' width={50} height={50}></Image>
            }

            if(isGoldPosition(x,y)){
                content = <Image alt='gold' priority src='/ingots.png' width={70} height={70}></Image>
            }

            if(isWumpusPosition(x,y)){
                content = <Image alt='wumpus' priority src='/monster.png' width={70} height={70}></Image>
            }

            if(isPitPosition(x,y)) {
                content = <Image alt='pit' priority src='/hole.png' width={78} height={78}></Image>
            }

            if(isAdjacentWumpus( x , y )){
                content = (
                    <>
                    {content}
                    <Image 
                        alt='danger' 
                        priority 
                        src='/danger.png' 
                        width={25} 
                        height={25}
                        style={{position: 'absolute', top: 0, right: 0, margin: '0.5rem'}}></Image>
                    </>
                );
            }
            
            if(isAdjacentPit( x , y )){
                content = (
                    <>
                    {content}
                    <Image 
                        alt='wind' 
                        priority 
                        src='/wind.png' 
                        width={25} 
                        height={25}
                        style={{position: 'absolute', bottom: 0, right: 0, margin: '0.5rem'}}></Image>
                    </>
                );
            }

            rooms.push(<div 
                key={`${x}-${y}`} 
                // className={`${gamestyles.roomStyle} ${isSafe ? gamestyles.safePath : ''}`}
                className={gamestyles.roomStyle}
                style={{ position: 'relative'}}>
                    {content}
                    {gameState && <div style={maskedCell(x,y)}></div>}
                    </div>
            );
        }
    }

    return (
        <div className={gamestyles.gridContainer}>{rooms}</div>
    );

};

export default GameMap;