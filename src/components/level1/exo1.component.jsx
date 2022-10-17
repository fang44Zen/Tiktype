import { useState } from "react";
import './exo1.styles.scss';

const FirstExo = () =>{
    const [letters, setLetters] = useState([]);
    const [value, setValue] = useState("");
    const keysList = ['Q','S','D','F','J','K','L','M'];

    const resetArray = () =>{
        setLetters([]);
    }

    const printRandom = () =>{
       resetArray();
        for(var i = 0; i < 7; i++){
            let string = [''];
            while(string.length<4){
                let random = Math.floor(Math.random() * keysList.length);
                string = string+keysList[random];
            }
            setLetters(letters => [...letters, {str: string+" ", color: "normal-answer"}]);
        }
    }

    const inputListener = (event) =>{
        const str = event.target.value;
        setValue(str)
    }

    const keyHandler = (event) =>{
        if(event.code === "Space"){
            setLetters(current=>
            current.map(elem =>{
                if(value+' ' === elem.str){
                    console.log("oui")
                    return{...elem, color:"good-answer"};
                }else if(value+' ' != elem.str){
                    return{...elem, color:"wrong-answer"};
                }
                // return elem;
            }));
            
        }
    }
    const setRed = () =>{
        setLetters([{...letters, color: "wrong-answer"}]);
    }

    return(
        <div>
            <h1>qsdf - jklm</h1>
            <div>
            {letters.map((elem, id) =>(
                    <label className={elem.color} key={id}>{elem.str}</label>
                ))}
                <button onClick={printRandom}>Start</button>
                <button onClick={resetArray}>Reset</button>
                <button onClick={setRed}>set red</button>
            </div>
            <input type="text" onChange={inputListener} value={value} onKeyPress={(e) =>keyHandler(e)}/>
        </div>
    )
}

export default FirstExo;