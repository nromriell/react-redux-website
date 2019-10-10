import React from 'react'

type AboutMeSectionProps = {
    children:React.ReactNode;
    sectionName:string;
    active:boolean;
};

const AboutMeSection = ({children, sectionName, active}:AboutMeSectionProps) => {
    return <div style={{gridArea:sectionName}} className={active ? "AboutMeSection" : "AboutMeSection Unused"}>{children}</div>
};

AboutMeSection.defaultProps = {
  children:undefined
};

export default AboutMeSection