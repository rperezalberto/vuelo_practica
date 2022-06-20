import React, {createContext, useState, useEffect} from 'react';


export const DataContent = createContext();
export const LoginContents = ({children}) => {

    const [logSession, setLogSession] = useState({});
    

  return (
    <DataContent.Provider value={{
        logSession, setLogSession
    }}>
        {children}
    </DataContent.Provider>
  )
}
