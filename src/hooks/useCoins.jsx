import { createContext, useState, useContext, useEffect } from "react";

const CoinsContext = createContext();

export function CoinsProvider({ children }){
    const [coins,setCoins] = useState(() => {
        const stored = localStorage.getItem("coins");
        return stored !== null ? Number(stored): 100;
    });

    useEffect(() => {
        localStorage.setItem("coins", coins);
    }, [coins]);

    return (
        <CoinsContext.Provider value={{ coins, setCoins}}>
            {children}
        </CoinsContext.Provider>
    );
}

export function useCoins() {
    const context = useContext(CoinsContext);
    if (!context) throw new Error("useCoins must be used within CoinsProvider");
    return context;
}