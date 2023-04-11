import { createContext , useEffect, useState } from "react";

export const GridContext= createContext([]);

export const GridProvider = ({children}) => {
    
    const [pageWidth, setPageWidth] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const [gridSize, setGridSize] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth);
            setPageHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

        if (pageWidth <= 600 && pageHeight > 500) { 
            setGridSize(4);
        } else if (pageWidth > 600 && pageHeight < 500) { 
            setGridSize(4);
        } else if (pageWidth >= 768 && pageHeight > pageWidth) {
            setGridSize(6);
        } else if (pageWidth <= 1024 && pageHeight < pageWidth) {
            setGridSize(6);
        } else if (pageWidth > 1024) {
            setGridSize(8);
        }
    }, [pageWidth]);
   
    return (
        <GridContext.Provider value={{gridSize}}>
            {children}
        </GridContext.Provider>
    );
};