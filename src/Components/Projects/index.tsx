import React from 'react'
import ProjectCell, {ProjectCellProps} from './ProjectCell'
import {connect} from 'react-redux'
import '../../Theme.css'


type ProjectsProps = {
    projectDefs: ProjectCellProps[]
}

const Projects = ({projectDefs}:ProjectsProps) => {
    const projects = projectDefs.map(
        (project, index) =>
        <ProjectCell key={index} title={project.title} image={project.image} url={project.url}/>
    );
    return <div className="Projects">{projects}</div>
};

Projects.defaultProps = {
  projectDefs: []
};

const mapStateToProps = (state:any) => {
    return {projectDefs: state.projects};
};

export default connect(mapStateToProps, null)(Projects);