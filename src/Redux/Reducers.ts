import Redux from 'redux'
import {ProjectCellProps} from '../Components/Projects/ProjectCell'
import {AboutMeSectionProps} from '../Components/AboutMe'

import {CHANGE_VIEW_ACTION, ChangeViewActionType} from "./Actions";

import BoL from '../Images/BoL.png'
import CroquetClash from '../Images/CroquetClash.jpg'
import GuitarVisualizer from '../Images/GuitarVisualizer.png'
import HeistFlight from '../Images/heist-flight.png'
import WerewolfRun from '../Images/WerewolfRun.jpg'
import BrickBuilder from '../Images/BrickBuilder.png'

export const ViewChangeReducer = (state:string = "Home", action:ChangeViewActionType) => {
    if(action.type === CHANGE_VIEW_ACTION){
        return action.payload;
    }
    return state;
};

export type ViewData = {
    name:string;
    identifier:string;
}

const baseViewData:ViewData[] = [
    {name:"Home", identifier:"Home"},
    {name:"Projects", identifier:"Projects"},
    {name:"Blog", identifier:"Blog"},
    {name:"About Me", identifier:"AboutMe"}
];

export const ViewDataReducer = (state:ViewData[] = baseViewData, action:Redux.Action) => {
  return state;
};

const baseStateProjects: ProjectCellProps[] = [
    {title:"Guitar Visualizer", image:GuitarVisualizer, url:"http://strings.nathanromriell.com"},
    {title:"Block Builder", image:BrickBuilder, url:"http://bricks.nathanromriell.com"},
    {title:"Heist Flight", image:HeistFlight, url:"https://play.google.com/store/apps/details?id=com.actop.getaway"},
    {title:"Croquet Clash", image:CroquetClash, url:"https://play.google.com/store/apps/details?id=com.actop.croquet"},
    {title:"Werewolf Run", image:WerewolfRun, url:"https://play.google.com/store/apps/details?id=com.actop.werewolfrun"},
    {title:"Bounce of Legends", image:BoL, url:"https://play.google.com/store/apps/details?id=com.actop.bounce"}
];

export const ProjectsReducer = (state:ProjectCellProps[] = baseStateProjects, action:Redux.Action) => {
  return state;
};

const baseStateAboutMe: AboutMeSectionProps = {
  objective: "",
  hardSkills:[
      {title:"C#", level:5},
      {title:"GIT", level:5},
      {title:"JavaScript", level:4},
      {title:"HTML/SASS", level:3},
      {title:"React JS", level:3},
      {title:"Java", level:3},
      {title:"Objective-C", level:3},
      {title:"C++", level:2},
      {title:"Python", level:1},
      {title:"C", level:1}
      ],
  projects:[
      {
          title:"Heist Flight: Mobile Game",
          companyName:"ActOp",
          roles:["Project Lead", "Software Engineer"],
          details:["Leveraged: C#, HLSL", "Designed and Implemented UI, Wrote gameplay logic, implemented procedural level design, used pre-computed data and algorithm optimizations to provide up to 60 frames per second on mobile platforms"]
      },
      {
          title:"Croquet Clash: Mobile Game",
          companyName:"ActOp",
          roles:["Project Lead", "Software Engineer"],
          details:["Leveraged: C#, Java, CG/HLSL, NoSQL Database (Firebase NoSQL), REST Service", "Led a small team to develop a 3D game. I was the sole developer and wrote all game logic. Developing an AI bot to simulate active players. Architected and implemented a system for real-time multiplayer play with user account management. Worked on all levels of the development stack."]
      },
      {
          title:"Brewtoon Tycoon: Mobile Game",
          companyName:"ActOp",
          roles:["Performance Improvement Engineer"],
          details:["Leveraged: C#, CG/HLSL", "Decreased app size from 1.6GB to 150MB on Android and from 1.8GB to 370MB on iOS. Decreased render time and improved quality by switching image rendering from png to svg data"]
      },
      {
          title:"Werewolf Run: Mobile Game",
          companyName:"ActOp",
          roles:["Project Lead", "Software Engineer"],
          details:["Leveraged: C#, CG/HLSL", "Led a small team developing a 3D game. Wrote the algorithms for procedurally generating the landscape during level progression"]
      },
  ]
};

export const AboutMeReducer = (state:AboutMeSectionProps = baseStateAboutMe, action:Redux.Action) => {
  return state;
};