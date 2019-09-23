import React from "react"
//import {setFrequenciesFromValue} from "../ThreejsScene";

type DialPadKeyProps = {
    value:string
}

const DialPadKey = ({value}:DialPadKeyProps) => {
    return <div className="DialPadKey" data-value={value}>{value}</div>
};

export default DialPadKey