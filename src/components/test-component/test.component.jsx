import "./test.styles.scss"
import { useEffect, useState } from "react";

const TestComponent = () =>{
    const [inputValue, setInputValue] = useState('');
    const [words] = useState([{str: 'A', color: 'color-one'}, {str: "B", color:"color-one"}, {str: "C", color: "color-one"}]);
    const [updatedWords, setUpdatedWords] = useState(words);
    
    const inputHandler =(event) =>{
        const string = event.target.value;
        setInputValue(string);
    }
    
    useEffect(()=>{
        const charWords = words.map(word => word.str);
        const charInput = inputValue.charAt(inputValue.length-1);
        if(charInput === charWords[inputValue.length-1]){
            const goodAnswer = words.map((elem,i)=>{
                if(i === inputValue.length-1){
                    return{...elem, color: "color-two",};
                }else{
                    return elem;
                }
            })
            setUpdatedWords(goodAnswer);
        }else{
            if(charInput ===""){
    
            }else{
                const wrongAnswer = words.map((elem,i)=>{
                if(i === inputValue.length-1){
                    return {...elem, color: "wrong-answer",}
                }else{
                    return elem;
                }
            })
            setUpdatedWords(wrongAnswer);
            }
        }
        
    }, [inputValue, words]);
    
    return(
        <div>
            {updatedWords.map((elem)=>(
                <label className={elem.color}>{elem.str}</label>
            ))}   
            <input value={inputValue} onChange={inputHandler}/>
        </div>
    )
}
    export default TestComponent;