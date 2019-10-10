import React from 'react'
import '../../Theme.css'
import {connect} from "react-redux";

type BackgroundProps = {
  selectedView:string;
  children: React.ReactNode;
}

const Background = ({children,selectedView}:BackgroundProps) => {
  return <div className={"Background "+selectedView}><div className="BackgroundOverlay">{children}</div></div>
};

Background.defaultProps = {
  selectedView: "Home",
  children: []
};

const mapStateToProps = (state:any) =>
{
  return {selectedView:state.view}
};

export default connect(mapStateToProps, null)(Background);