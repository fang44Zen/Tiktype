import 'animate.css';
import { useContext} from 'react';
import { KeyBoardOneContext } from '../../../context/keyboard-1-context/keyboard1-context.context';
import './keyboard.styles.scss';

const KeyboardOne = () =>{
    const {keyActive} = useContext(KeyBoardOneContext)
    const keysList = ['Q','S','D','F','J','K','L','M'];
     return(
        <div className='keyboard-one-group'>
            <span className={keyActive===keysList[0] ? 'animate__animated animate__flash animate__infinite key-style oriculaire-keys' :
                'key-style oriculaire-keys'}>{keysList[0]}</span>
            <span className={keyActive===keysList[1] ? 'animate__animated animate__flash animate__infinite key-style annulaire-keys' :
                'key-style annulaire-keys'}>{keysList[1]}</span>
            <span className={keyActive===keysList[2] ? 'animate__animated animate__flash animate__infinite key-style majeur-keys' :
                'key-style majeur-keys'}>{keysList[2]}</span>
            <span className={keyActive===keysList[3] ? 'animate__animated animate__flash animate__infinite key-style left-index-keys' :
        'key-style left-index-keys'}>{keysList[3]}</span>
            <span className='key-style blank-keys'></span>
            <span className='key-style blank-keys'></span>
            <span className={keyActive===keysList[4] ? 'animate__animated animate__flash animate__infinite key-style right-index-keys' :
        'key-style right-index-keys'}>{keysList[4]}</span>
            <span className={keyActive===keysList[5] ? 'animate__animated animate__flash animate__infinite key-style majeur-keys' :
                'key-style majeur-keys'}>{keysList[5]}</span>
            <span className={keyActive===keysList[6] ? 'animate__animated animate__flash animate__infinite key-style annulaire-keys' :
                'key-style annulaire-keys'}>{keysList[6]}</span>
            <span className={keyActive===keysList[7] ? 'animate__animated animate__flash animate__infinite key-style oriculaire-keys' :
                'key-style oriculaire-keys'} >{keysList[7]}</span>
        </div>
    )
}

export default KeyboardOne;