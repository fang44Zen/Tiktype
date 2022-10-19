import { createContext, useState } from "react";



export const KeyBoardOneContext = createContext({
    keyActive: '',
    setKeyActive: () => {}
});

export const KeyBoardOneProvider = ({children}) =>{
    const [keyActive, setKeyActive] = useState('');
    const value= {keyActive, setKeyActive};
    return(
        <KeyBoardOneContext.Provider value={value}>{children}</KeyBoardOneContext.Provider>
    )
}