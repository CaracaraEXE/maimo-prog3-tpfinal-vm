"use client"

import axios from "axios";
import { useCallback,useContext,createContext,useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const [lugares, setLugares] = useState([]);
    const [eventos, setEventos] = useState([]);
    const [barrios, setBarrios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getLugares = useCallback(async() => {
            try{
                const response = await axios.get(`https://maimo-prog3-2025-vm-api.vercel.app/lugares`);
                setLugares(response.data.lugares);
                setLoading(false);
            } catch(error){
                setError(true);
                return ("FAIL");
            }
        },[]);

        const getEventos = useCallback(async() => {
            try{
                const response = await axios.get("https://maimo-prog3-2025-vm-api.vercel.app/eventos");
                setEventos(response.data.eventos);
                setLoading(false);
            }catch(error){
                setError(true);
                alert("WARNING, DIDN'T WORK!");
            }
        },[])

        const getBarrios = useCallback(async() => {
            try{
                const response = await axios.get("https://maimo-prog3-2025-vm-api.vercel.app/barrios");
                setBarrios(response.data.barrios);
            }catch(error){
                setError(true);
                alert("BARRIO HAS FAILED")
            }
        },[])

    return (
    <AppContext.Provider
        value={{
            getLugares, lugares, loading, error, getEventos, eventos, barrios, getBarrios
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