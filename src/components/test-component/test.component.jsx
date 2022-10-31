import "./test.styles.scss"
import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) =>{
    switch(action.type){
        case "good-answer":
            return state.map((elem,i) =>{
                if(i === action.id){
                    return{...elem, color: "color-two"};
                }else{
                    return elem;
                }
            });
        case "wrong-answer":
            return state.map((elem,i) =>{
                if(i === action.id){
                    return{...elem, color: "color-three"};
                }else{
                    return elem;
                }
            });
        default:
            throw new Error("l'acion "+action.type + "n'existe pas");
    }
}

const TestComponent = () =>{
    const [inputValue, setInputValue] = useState('');
    const [words] = useState([{str: 'A', color: 'color-one'}, {str: "B", color:"color-one"}, {str: "C", color: "color-one"}]);
    const [updateWords, dispatch] = useReducer(reducer, words);
    
    const inputHandler =(event) =>{
        const string = event.target.value;
        setInputValue(string);
    }

    useEffect(()=>{
        const charWords = words.map(word => word.str);
        const charInput = inputValue.charAt(inputValue.length-1);
        
        if(charInput === charWords[inputValue.length-1]){
            dispatch({type: "good-answer", id: inputValue.length-1});
        }else{
            if(charInput ===""){
    
            }else{
            dispatch({type: "wrong-answer", id:  inputValue.length-1});
        }
    }
    }, [inputValue, words]);
    
    return(
        <div>
            {updateWords.map((elem)=>(
                <label className={elem.color}>{elem.str}</label>
            ))}   
            <input value={inputValue} onChange={inputHandler}/>
        </div>
    )
}
    export default TestComponent;