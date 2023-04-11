import { createContext , useState } from "react";

export const PositionContext= createContext([]);

export const PositionProvider = ({children}) => {
    
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0});
    const [goldPosition, setGoldPosition] = useState({ x: -1, y: -1});
    const [safePaths, setSafePaths] = useState([]);
    const [wumpusPosition, setWumpusPosition] = useState([]);
    const [pitPosition, setPitPosition] = useState([]);
    
    return (
        <PositionContext.Provider 
        value={{
            playerPosition, 
            setPlayerPosition,
            goldPosition,
            setGoldPosition,
            safePaths,
            setSafePaths,
            wumpusPosition,
            setWumpusPosition,
            pitPosition,
            setPitPosition
            }}>
            {children}
        </PositionContext.Provider>
    );
};