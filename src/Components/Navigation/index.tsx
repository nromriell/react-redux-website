import React from 'react'
import Redux from 'redux'
import './Navigation.css'
import NavigationItem from "./NavigationItem";
import {connect} from "react-redux";
import {ViewData} from "../../Redux/Reducers";
import NavigationIcon from "./NavigationIcon";

type NavigationProps = {
  viewData:ViewData[] | null | undefined
}

const Navigation = ({viewData}:NavigationProps) => {
  let itemElements:React.ReactElement[] = [];
  if(viewData != null){
    itemElements = viewData.map((data)=>
      <NavigationItem title={data.name} identifier={data.identifier}/>
    );
  }
  return <div className="Navigation">{itemElements}</div>
};

const mapStateToProps = (state:any) => {
  return {viewData: state.viewData}
};

Navigation.defaultProps = {
  viewData:null
};

export default connect(mapStateToProps, null)(Navigation);