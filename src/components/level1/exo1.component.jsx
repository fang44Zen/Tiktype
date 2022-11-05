import { useEffect, useState, useContext} from "react";
import { KeyBoardOneContext } from "../../context/keyboard-1-context/keyboard1-context.context";
import GameCreator from "../game-creator/game-creator.component";
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
            <GameCreator letters={letters} resetArray={resetArray} inputValue={inputValue}/>}
            {playButton?
            <input className="input-exo1" type="text" autoFocus onChange={inputListener} value={inputValue} />:
            <button className="button-ex1-style" type="submit" onClick={printRandom}>Start</button>}
        </div>
    )
}

export default FirstExo;
