import React from 'react'
import DialPadKey from "./DialPadKey";

import './DialPad.css'

const DialPad = () => {
    const numbers:string[] = ["1","2","3","4","5","6","7","8","9","*","0","#"];
    let numberElements = numbers.map((value) =>
    <DialPadKey value={value}/>);
    return <div className="DialPad">{numberElements}</div>
};

export default DialPad