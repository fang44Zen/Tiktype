import './game-creator.styles.scss';
import { useReducer, useEffect } from 'react';

const reducer = (state, action) =>{
    switch(action.type){
        case "set-changes":
            return action.payload;
        case "good-answer":
            return state.map((elem, i) =>{
                if(i===action.id){
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

const GameCreator = ({letters, resetArray, inputValue}) =>{
    const [updatedWords, dispatch] = useReducer(reducer, letters);

    //updating state of the useReducer 
    useEffect(()=>{
        dispatch({type: "set-changes", payload:letters})
     }, [letters]);
 
     useEffect(()=>{
        const charRandom = letters.map(elem =>elem.str);
        const charInput = inputValue.charAt(inputValue.length-1);

        if(charInput === charRandom[inputValue.length-1]){
            dispatch({type: "good-answer", id: inputValue.length-1});
        }else{
            if(charInput.length ===0){
                return;
            }else{
            dispatch({type: "wrong-answer", id:  inputValue.length-1});
        }
    }
    }, [inputValue, letters]);

    return(
        <div className="char-nav">
            <div className="charac-zone">
                {updatedWords.map((elem, id) =>(
                    <span className={`${elem.color} charac-list`} key={id}>{elem.str}</span>
                ))}
            </div>
            <button className="button-ex1-style" onClick={resetArray}>Reset</button>
        </div>
    )
}

export default GameCreator;