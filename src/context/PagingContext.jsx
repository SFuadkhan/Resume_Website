import React, { createContext, useContext, useEffect, useState } from 'react'
const PagingContext = createContext();
function PagingContextProvider({children}) {
    const [page,setPage] = useState(1)
    useEffect(() => {
        console.log(page);
        
    }, [page,setPage])
    
    const goToNextPage = ()=>{
        setPage(page+1)
    }
    const goToPrevPage = ()=>{
        setPage(page-1)
    }
  return (
    <PagingContext.Provider value={{goToPrevPage,goToNextPage,page}}>
        {children}
    </PagingContext.Provider>
  )
}

export default PagingContextProvider
export const usePagingContext= ()=>{
    return useContext(PagingContext)
}