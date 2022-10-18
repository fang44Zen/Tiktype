import { useEffect, useState } from "react";
import './exo1.styles.scss';

const FirstExo = () =>{
    const [letters, setLetters] = useState([]);
    const keysList = ['Q','S','D','F','J','K','L','M'];

    const resetArray = () =>{
        setLetters([]);
        setInputValue("");
    }
    useEffect(() =>{
        for(var i = 0; i < 8; i++){
            let string = [];
            let random = Math.floor(Math.random() * keysList.length);
            string = {str: string+keysList[random], color: "normal-answer"};
            while(string.length<4){
                
                
            }
            setLetters(letters => [...letters, string]);
            
        }
    },[]);
    
    const printRandom = () =>{
       resetArray();
        for(var i = 0; i < 8; i++){
            let string = [];
            let random = Math.floor(Math.random() * keysList.length);
            string = {str: string+keysList[random], color: "normal-answer"};
            while(string.length<4){
                
                
            }
            setLetters(letters => [...letters, string]);
            
        }
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
       var charRandom =  letters.map(elem =>elem.str);
        if(charInput === charRandom[inputValue.length-1]){
            const goodAnswer = letters.map((elem,i)=>{
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
                const wrongAnswer = letters.map((elem,i)=>{
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


    const keyHandler = (event) =>{
            
            // for(var i = 0; i<inputValue.length; i++){
            //     const inputRead =  inputValue.charAt(i).toUpperCase();
            //     letters.map(elem =>{
            //         if(elem.str.charAt(i) == inputRead){
            //             // console.log(inputValue.length);
            //             // console.log(inputValue.charAt(i));
            //             console.log("oui");
            //         }else{
            //             console.log(inputRead);
            //             // console.log(inputValue.length);
            //             // console.log(elem.str.charAt(i) +" n'est pas "+inputValue.charAt(i));
            //         }
            //     })
            // }
            
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
            <input type="text" onChange={inputListener} value={inputValue} onKeyDown={keyHandler} />
        </div>
    )
}

export default FirstExo;