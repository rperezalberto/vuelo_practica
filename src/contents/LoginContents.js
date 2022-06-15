import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const DataContent = createContext();
export const LoginContents = ({children}) => {

    const [logData, setLogData] = useState({});

    useEffect(() => {
     const dataLogin = async () => {
        try {
            const url = await "http://localhost:3001/login";
            const datos = await axios.get(url);
            setLogData(datos.data);
        } catch (error) {
            console.log(error);
        }
     }
     dataLogin();
    }, []);
    
    


  return (
    <DataContent.Provider value={{
        logData
    }}>
        {children}
    </DataContent.Provider>
  )
}
