import { useEffect, useState, useContext, useMemo} from "react";
import { KeyBoardOneContext } from "../../context/keyboard-1-context/keyboard1-context.context";
import KeyboardOne from "../keyboards/keyboard-lelve1/keyboard-1.component";
import './exo1.styles.scss';

const FirstExo = () =>{

    const [letters, setLetters] = useState([]);
    const [playButton, setPlayButton] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const keysList = ['Q','S','D','F','J','K','L','M'];
    const {setKeyActive} = useContext(KeyBoardOneContext);

    const resetArray = () =>{
        setLetters([]);
        setInputValue("");
        setPlayButton(false);
    }

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

    const letterMemo = useMemo(()=>{
        var charRandom = letters.map(elem =>elem.str);
        var charInput = inputValue.charAt(inputValue.length-1);
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
    }, [letters])

    // useEffect(()=>{
    //     var charRandom = letters.map(elem =>elem.str);
    //     var charInput = inputValue.charAt(inputValue.length-1);
    //     if(charInput === charRandom[inputValue.length-1]){
    //         const goodAnswer = letters.map((elem,i)=>{
    //             if(i === inputValue.length-1){
    //                 return {...elem, color: "good-answer",}
    //             }else{
    //                 return elem;
    //             }
    //         })
    //         setLetters(goodAnswer);
    //     }else{
    //         if(charInput ===""){

    //         }else{
    //             const wrongAnswer = letters.map((elem,i)=>{
    //             if(i === inputValue.length-1){
    //                 return {...elem, color: "wrong-answer",}
    //             }else{
    //                 return elem;
    //             }
    //         })
    //         setLetters(wrongAnswer);
    //         }
    //     };
    // }, [inputValue]);
    
    useEffect(()=>{
        var charRandom =   letters.map(elem =>elem.str);
        var index =  inputValue.length;
        setKeyActive(charRandom[index]);
    });

    return(
        <div className="exo1-main" >
            <h1>qsdf - jklm</h1>
            <KeyboardOne />
            {playButton&& <div className="char-nav">
                <div className="charac-zone">
                    {letters.map((elem, id) =>(
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
