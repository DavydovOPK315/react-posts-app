import { useMemo } from "react";

export const usePages = (totalPages) => {
    const pagesArray = useMemo(() => {
        const pagesArray2 = [];
        for (let i = 0; i < totalPages; i++) {
            pagesArray2.push(i + 1);
        }
        return pagesArray2;
    }, [totalPages])
    
    return pagesArray;
}