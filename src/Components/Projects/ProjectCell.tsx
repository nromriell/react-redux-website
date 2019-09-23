import React from 'react'

type ProjectCellProps = {
    title:string;
    image:string;
}

const ProjectCell = ({title,image}:ProjectCellProps) => {
    return <div className="ProjectCell"><
                div className="ProjectCellTitle">{title}</div>
                <div style={{backgroundImage:"url("+image+")"}} />
            </div>
};