import "./test.styles.scss"


const TestComponent = () =>{
    const [inputValue, setInputValue] = useState('');
    const [words, setWords] = useState([{str: 'A', color: 'color-one'}, {str: "B", color:"color-one"}, {str: "C", color: "color-one"}]);
    
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
                    return {...elem, color: "color-two",}
                }else{
                    return elem;
                }
            })
            setWords(goodAnswer);
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
            setWords(wrongAnswer);
            }
        }
    }, [inputValue]);
    
    return(
        <div>
        
                    
        </div>
    )
    }
    export default TestComponent;