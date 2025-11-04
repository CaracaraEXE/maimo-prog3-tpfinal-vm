"use client"

import axios from "axios";
import { useCallback,useContext,createContext,useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const [lugares, setLugares] = useState([]);
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getLugares = useCallback(async() => {
            try{
                const response = await axios.get(`https://maimo-prog3-2025-vm-api.vercel.app/lugares`);
                setLugares(response.data.lugares);
                setLoading(false);
                console.log("this worked!");
            } catch(error){
                setError(true);
                setLoading(false);
                console.log("this didn't work");
                return ("FAIL");
            }
        });

    return (
    <AppContext.Provider
        value={{
            getLugares, lugares, loading, error
        }}
    >
        {children}
    </AppContext.Provider>
);
}




export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("use AppContext must be used within a AppContextProvider");
  }
  return context;
};

export default AppContext;