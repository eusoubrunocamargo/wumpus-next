import { createContext , useContext, useState } from "react";
import { PositionContext } from "./PositionProvider";

export const GameStateContext= createContext([]);

export const GameStateProvider = ({children}) => {
    
    const [gameState, setGameState] = useState(false);

    const { 
        setPlayerPosition, 
        setGoldPosition,
        setSafePaths,
        setWumpusPosition,
        setPitPosition
    } = useContext(PositionContext);

    const resetGame = () => {
        setPlayerPosition({ x: 0, y: 0});
        setGoldPosition({ x: -1, y: -1});
        setSafePaths([]);
        setWumpusPosition([]);
        setPitPosition([]);
    };
    
    return (
        <GameStateContext.Provider 
        value={{ gameState, setGameState, resetGame }}>
            {children}
        </GameStateContext.Provider>
    );
};