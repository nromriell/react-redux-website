import React, {ReactNode} from 'react'

export type SkillInfo = {
    title:string;
    level:number;
};

const Skill = ({title,level}:SkillInfo) => {
    const fills:ReactNode[] = [];
    for(let i = 0; i < 5; i++){
        if(i < level){
            fills.push(<i key={i} className="fas fa-circle"/>);
        }else {
            fills.push(<i key={i} className="far fa-circle"/>);
        }
    }
    return <div className="Skill">
        <div className="SkillTitle">{title}</div>
        <div className="SkillLevel">{fills}</div>
    </div>
};

Skill.defaultProps = {
    skillLevel:0
};

export default Skill;