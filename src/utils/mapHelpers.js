export const placeGold = (gridSize) => {

    let goldX, goldY;

    do {
        goldX = Math.floor(Math.random()*gridSize);
        goldY = Math.floor(Math.random()*gridSize);
    } while (Math.abs(goldX - 0) + Math.abs(goldY - 0) < 3);

    return { x: goldX , y: goldY };

};

export const placeSafeRoute = (gridSize, goldPosition) => {

    let safePathCount;

    if(gridSize === 4){
        safePathCount = 1;
        } else if (gridSize === 6){
        safePathCount = 2;
        } else {
        safePathCount = 3;
    }


    const safePaths =[];
    const visited = new Set();

    const isValid = (x,y) => {
        return x >=0 && y >= 0 && x < gridSize && y < gridSize;
    };

    const createPath = (x,y,path) => {
        if(!isValid(x,y) || visited.has(`${x}-${y}`)){
            return;
        }
        path.push({ x , y});
        visited.add(`${x}-${y}`);

        if(x === goldPosition.x && y === goldPosition.y && safePaths.length < safePathCount){
        safePaths.push([...path]);
            } else {
                createPath(x + 1, y, path);
                createPath(x, y + 1, path);
            }

            path.pop();
            visited.delete(`${x}-${y}`);
        };

        createPath(0,0,[]);

        return safePaths;
};

const isValidPosition = (x, y, gridSize, positionsToAvoid, safePaths, occupiedPositions) => {
   
    const isSafePath = (x,y) => {
        return safePaths.some((path) => {
            return path.some((cell) => cell.x === x && cell.y === y);
        });
    };

    const isAdjacentToInitial = (x,y) => {
        return (
            (x === 0 && y === 1) ||
            (x === 1 && y === 0) ||
            (x === 0 && y === gridSize - 1) ||
            (x === gridSize - 1 && y === 0)
        );
    };

    const isInPositionsToAvoid = (x,y) => {
        return positionsToAvoid.some((pos) => pos.x === x && pos.y === y);
    };

    const isOccupiedPosition = (x,y) => {
        return occupiedPositions.some((pos) => pos.x === x && pos.y === y);
    };

    return (
        !isSafePath(x,y) &&
        !isInPositionsToAvoid(x, y) &&
        !isAdjacentToInitial(x, y) &&
        !isOccupiedPosition(x, y)
    );
};

export const placeWumpus = (gridSize, safePaths) => {

    let numberOfWumpus;

    switch(gridSize){
        case 4:
            numberOfWumpus = 2;
            break;
        case 6:
            numberOfWumpus = 4;
            break;
        case 8:
            numberOfWumpus = 6;
            break;
        default:
            numberOfWumpus = 2;
            break;
    }

    const wumpusPositions = [];

    while(wumpusPositions.length < numberOfWumpus){

        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);

        if(isValidPosition( x , y , gridSize , [] , safePaths, wumpusPositions)){
            wumpusPositions.push({x,y});
        }
    }

    return wumpusPositions;

};

export const placePits = (gridSize, safePaths, wumpusPositions) => {

    let numberOfPits;

    switch(gridSize){
        case 4:
            numberOfPits = 2;
            break;
        case 6:
            numberOfPits = 4;
            break;
        case 8:
            numberOfPits = 6;
            break;
        default:
            numberOfPits = 2;
            break;
    }

    const pitPositions = [];

    while(pitPositions.length < numberOfPits){

        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);

        if(isValidPosition( x , y , gridSize , wumpusPositions , safePaths , pitPositions )){
            pitPositions.push({x,y});
        }        
    }

    return pitPositions;

};

