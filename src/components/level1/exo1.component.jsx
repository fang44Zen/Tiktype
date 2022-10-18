import { useEffect, useState } from "react";
import './exo1.styles.scss';

const FirstExo = () =>{

    const [letters, setLetters] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const keysList = ['Q','S','D','F','J','K','L','M'];

    const resetArray = () =>{
        setLetters([]);
        setInputValue("");
    }

    const printRandom = () =>{
       resetArray();
        for(var i = 0; i < 24; i++){
            let string = [];
            let random = Math.floor(Math.random() * keysList.length);
            string = {str: string+keysList[random], color: "normal-answer"};
            setLetters(letters => [...letters, string]);
        }
        console.log(letters.map(e =>e.str));
    };

    const inputListener = (event) =>{
        const str = event.target.value;
        setInputValue(str);
    };

    const setRed = () =>{
        const colorUpdate = letters.map((elem, i) =>{
            if(i !== 4){
                return elem;
            }else{
                return {...elem, color: "wrong-answer",}
            }
        })
        setLetters(colorUpdate)
    }

    useEffect(()=>{
        var charInput = inputValue.charAt(inputValue.length-1);
        const copyLetter = letters;
        var charRandom =  copyLetter.map(elem =>elem.str);
        if(charInput === charRandom[inputValue.length-1]){
            const goodAnswer = copyLetter.map((elem,i)=>{
                if(i === inputValue.length-1){
                    return {...elem, color: "good-answer",}
                }else{
                    return elem;
                }
            })
            setLetters(goodAnswer);
        }else{
            if(charInput ===""){

            }else{
                const wrongAnswer = copyLetter.map((elem,i)=>{
                if(i === inputValue.length-1){
                    return {...elem, color: "wrong-answer",}
                }else{
                    return elem;
                }
            })
            setLetters(wrongAnswer);
            }
        }
    }, [inputValue]);

    const keyHandler = (event) =>{}

    return(
        <div>
            <h1>qsdf - jklm</h1>
            <div>
            {letters.map((elem, id) =>(
                id % 5 ===0 & id > 1 ? <span> </span>:
                <span className={`${elem.color} charac-list`} key={id}>{elem.str}</span>
                
            ))}
                <button onClick={printRandom}>Start</button>
                <button onClick={resetArray}>Reset</button>
                <button onClick={setRed}>set red</button>
            </div>
            <input type="text" onChange={inputListener} value={inputValue} onKeyDown={keyHandler}  />
        </div>
    )
}

export default FirstExo;