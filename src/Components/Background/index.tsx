import React from 'react'
import './Background.css'
import {connect} from "react-redux";

type BackgroundProps = {
  selectedView:string;
}

const Background = ({selectedView}:BackgroundProps) => {
  return <div className={"Background "+selectedView}/>
};

Background.defaultProps = {
  selectedView: "Home"
};

const mapStateToProps = (state:any) =>
{
  return {selectedView:state.view}
};

export default connect(mapStateToProps, null)(Background);