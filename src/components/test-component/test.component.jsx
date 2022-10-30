import "./test.styles.scss"
import { useEffect, useReducer, useState } from "react";



const TestComponent = () =>{
    const [inputValue, setInputValue] = useState('');
    // const [updatedWords, setUpdatedWords] = useState(words);
    const [words] = useState([{str: 'A', color: 'color-one'}, {str: "B", color:"color-one"}, {str: "C", color: "color-one"}]);

    const reducer = (state, action) =>{
        switch(action.type){
            case "good-answer":
                return{...words, color: "color-two"};
            case "wrong-answer":
                return{...words, color: "color-three"};
            default:
                throw new Error("l'acion "+action.type + "n'existe pas");
        }
    }

    const [updateWords, dispatch] = useReducer(reducer, words);
    
    const inputHandler =(event) =>{
        const string = event.target.value;
        setInputValue(string);
        
    }

    useEffect(()=>{
        const charWords = words.map(word => word.str);
        const charInput = inputValue.charAt(inputValue.length-1);
        if(charInput === charWords[inputValue.length-1]){
            // const goodAnswer = words.map((elem,i)=>{
            //     if(i === inputValue.length-1){
            //         return{...elem, color: "color-two",};
            //     }else{
            //         return elem;
            //     }
            // })
            // setUpdatedWords(goodAnswer);
            dispatch({type: "good-answer"});
        }else{
            if(charInput ===""){
    
            }else{
            //     const wrongAnswer = words.map((elem,i)=>{
            //     if(i === inputValue.length-1){
            //         return {...elem, color: "color-three",}
            //     }else{
            //         return elem;
            //     }
            // })
            // setUpdatedWords(wrongAnswer);
            // }
            dispatch({type: "wrond-answer"});
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