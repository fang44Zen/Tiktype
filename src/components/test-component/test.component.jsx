import { useEffect, useState } from "react";
const TestComponent = () =>{
    const [inputValue, setInputValue] = useState('');
    const [valueSplitted, setValueSplitted] = useState('')
    const str = "ABCDEF";
    const obj = [
        {
            nom: "maurice",
            alias: "coco"
    },
    {
        nom: "Alfred",
        alias: "kiki"
    }
]
    const inputChangeListener = event =>{
        setInputValue(event.target.value);
        
    };

    useEffect(()=>{
        var valueChar1 = inputValue.charAt(inputValue.length-1);
        var valueChar2 = str.charAt(inputValue.length-1);
        if(inputValue.length>str.length){
            setInputValue("");
        }
        if(valueChar1 === valueChar2){
            if(valueChar1 ===""){
                // console.log("je ne fais rien");
            }else{
                console.log("yey!");
            }
            
        }else{
            console.log("Nope")
        }
    }, [inputValue]);

    
    return(
        <div>
            <input type="text" onChange={inputChangeListener} value={inputValue}/>
            <h3>{obj[1].alias}</h3>
        </div>
    )
}
export default TestComponent;