import React from 'react'
import '../../Theme.css'


export type ProjectCellProps = {
    title:string;
    image:string;
    url:string;
}

const ProjectCell = ({title,image, url}:ProjectCellProps) => {
    return <a href={url} className="ProjectCell" style={{backgroundImage:"url("+image+")"}}>
                <div className="ProjectCellTitle">{title}</div>
            </a>
};

export default ProjectCell