import React from 'react'

export type ProjectInfo = {
    title:string;
    companyName:string;
    roles:string[];
    details:string[];
}

const Project = ({title, companyName, roles, details}:ProjectInfo) => {
    return <div className="Project">
        <div className="ProjectTitle">{title} - {companyName} - {roles.join(", ")}</div>
        <ul>
            {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
    </div>
};

Project.defaultProps = {
    title:"",
    companyName:"",
    roles:[],
    details:[]
};

export default Project;