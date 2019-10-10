import React from 'react'
import {connect} from 'react-redux'
import AboutMeSection from "./AboutMeSection";
import Skill, {SkillInfo} from "./Skill";
import Project, {ProjectInfo} from "./Project";

export type AboutMeSectionProps = {
  objective:string;
  hardSkills:SkillInfo[];
  projects:ProjectInfo[];
}

const AboutMe = ({objective, hardSkills, projects}:AboutMeSectionProps) => {
  return <div className="AboutMe">
    <AboutMeSection sectionName="objective" active={false}>{objective}</AboutMeSection>
    <AboutMeSection sectionName="hardskills" active={true}><h2>Skills</h2>{hardSkills.map((skill) => <Skill key={skill.title} title={skill.title} level={skill.level}/>)}</AboutMeSection>
    <AboutMeSection sectionName="softskills" active={false}/>
    <AboutMeSection sectionName="projects" active={true}><h2>Projects</h2>{projects.map((project) => <Project key={project.title} title={project.title} companyName={project.companyName} details={project.details} roles={project.roles}/>)}</AboutMeSection>
    <div className="spacing-5rem show-on-small"/>
  </div>
};

AboutMe.defaultProps = {
  objective: "",
  hardSkills: [],
  projects: [],
};

const mapStateToProps = (state:any) =>{
  return state.aboutMe;
};

export default connect(mapStateToProps, null)(AboutMe)