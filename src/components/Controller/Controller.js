import { GridContext } from '@/contexts/GridProvider';
import { PositionContext } from '@/contexts/PositionProvider';
import { useContext } from 'react';
import controllerstyle from '../../styles/Controller.module.css';

export default function Controller () {

    const { playerPosition, setPlayerPosition } = useContext(PositionContext);
    const { gridSize } = useContext(GridContext);

    const handleUpButton = () => {
        if(playerPosition.y > 0){
            setPlayerPosition({ ...playerPosition, y: playerPosition.y - 1 });
        }
    };

    const handleRightButton = () => {
        if(playerPosition.x < gridSize - 1){
            setPlayerPosition({ ...playerPosition, x: playerPosition.x + 1})
        }
    };

    const handleDownButton = () => {
        if(playerPosition.y < gridSize - 1){
        setPlayerPosition({ ...playerPosition, y: playerPosition.y + 1})
        }
    };

    const handleLeftButton = () => {
        if(playerPosition.x > 0){
            setPlayerPosition({ ...playerPosition, x: playerPosition.x - 1})
        }
    };

    return (
        <div className={controllerstyle.gridContainer}>
            <div className={controllerstyle.gridItem}></div>
            <div onClick={handleUpButton} className={`${controllerstyle.gridItem} ${controllerstyle.button}`}></div>
            <div className={controllerstyle.gridItem}></div>
            <div onClick={handleLeftButton} className={`${controllerstyle.gridItem} ${controllerstyle.button}`}></div>
            <div className={controllerstyle.gridItem}></div>
            <div onClick={handleRightButton} className={`${controllerstyle.gridItem} ${controllerstyle.button}`}></div>
            <div className={controllerstyle.gridItem}></div>
            <div onClick={handleDownButton} className={`${controllerstyle.gridItem} ${controllerstyle.button}`}></div>
            <div className={controllerstyle.gridItem}></div>
        </div>
    );
}