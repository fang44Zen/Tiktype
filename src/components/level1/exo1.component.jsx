import { useEffect, useState, useContext, useReducer} from "react";
import { KeyBoardOneContext } from "../../context/keyboard-1-context/keyboard1-context.context";
import KeyboardOne from "../keyboards/keyboard-lelve1/keyboard-1.component";
import './exo1.styles.scss';

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


const FirstExo = () =>{

    const [letters, setLetters] = useState([]);
    const [playButton, setPlayButton] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const keysList = ['Q','S','D','F','J','K','L','M'];
    const {setKeyActive} = useContext(KeyBoardOneContext);
    const [updatedWords, dispatch] = useReducer(reducer, letters);

    const resetArray = () =>{
        setLetters([]);
        setInputValue("");
        setPlayButton(false);
    }

    //updating state of the useReducer 
    useEffect(()=>{
       dispatch({type: "set-changes", payload:letters})
    }, [letters]);

    const printRandom = () =>{
       resetArray();
        for(var i = 0; i < 24; i++){
            let string = [];
            let random = Math.floor(Math.random() * keysList.length);
            string = {str: string+keysList[random], color: "normal-answer"};
            setLetters(letters => [...letters, string]);
        }
        setPlayButton(true);
    };

    const inputListener = (event) =>{
        const str = event.target.value;
        setInputValue(str);
    };

    
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
    
    useEffect(()=>{
        var charRandom =   letters.map(elem =>elem.str);
        var index =  inputValue.length;
        setKeyActive(charRandom[index]);
    });

    return(
        <div className="exo1-main" >
            <h1>qsdf - jklm</h1>
            <KeyboardOne />
            {playButton&& 
            <div className="char-nav">
                <div className="charac-zone">
                    {updatedWords.map((elem, id) =>(
                        <span className={`${elem.color} charac-list`} key={id}>{elem.str}</span>
                    ))}
                </div>
                <button className="button-ex1-style" onClick={resetArray}>Reset</button>
            </div>}
            {playButton?
            <input className="input-exo1" type="text" autoFocus onChange={inputListener} value={inputValue} />:
            <button className="button-ex1-style" type="submit" onClick={printRandom}>Start</button>}
            
            
        </div>
    )
}

export default FirstExo;
