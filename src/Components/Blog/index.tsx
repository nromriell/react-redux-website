import React, {useEffect, useState} from 'react'
import '../../Theme.css'

import WorkingOnIt from '../../Images/WorkingOnIt.svg'
import Arm from '../../Images/WorkingOnItArm.svg'

const Blog = () => {
    const [stringAdd, setStringAdd] = useState("");
    const [numAdd, setNumAdd] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setNumAdd((numAdd+1)%4);
            let addString = "";
            for(let i = 0; i < numAdd; i++){
                addString += ".";
            }
            setStringAdd(addString);
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    });
    return <div className="Blog">
        <div className="WorkingOnItTitle">{"Work In Progress"+stringAdd}</div>
        <div className="WorkingOnIt">
            <img alt="" className="WorkingOnItMain" src={WorkingOnIt}/>
            <img alt="" className="WorkingOnItArm LeftArm"  src={Arm}/>
            <img alt="" className="WorkingOnItArm RightArm" src={Arm}/>
        </div>
    </div>
};

export default Blog;