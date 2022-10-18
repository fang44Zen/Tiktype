import 'animate.css';
import { useState } from 'react';
import './keyboard.styles.scss';

const KeyboardOne = ({keyValue}) =>{
    const [characValue, setCharacValue] = useState(keyValue);
    const keysList = ['Q','S','D','F','J','K','L','M'];
     return(
        <div className='keyboard-one-group'>
            {/* <h1 class="animate__animated animate__flash animate__infinite">An animated element</h1> */}
            <span className={keyValue===keysList[0]?'animate__animated animate__flash animate__infinite key-style oriculaire-keys':
        'key-style oriculaire-keys'}>{keysList[0]}</span>
            <span className='key-style annulaire-keys' >{keysList[1]}</span>
            <span className='key-style majeur-keys'>{keysList[2]}</span>
            <span className='key-style left-index-keys' >{keysList[3]}</span>
            <span className='key-style blank-keys'></span>
            <span className='key-style blank-keys'></span>
            <span className='key-style right-index-keys' >{keysList[4]}</span>
            <span className='key-style majeur-keys' >{keysList[5]}</span>
            <span className='key-style annulaire-keys'>{keysList[6]}</span>
            <span className='key-style oriculaire-keys' >{keysList[7]}</span>
        </div>
    )
}

export default KeyboardOne;