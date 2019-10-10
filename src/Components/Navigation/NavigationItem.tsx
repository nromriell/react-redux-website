import React from 'react'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Redux from 'redux'
import {ChangeView} from "../../Redux/Actions";

type NavigationItemProps = {
  title:string;
  identifier:string;
  activeView:string;
  changeView:any;
}

const NavigationItem = ({title, identifier, activeView, changeView}:NavigationItemProps) => {
  return <NavLink to={title.toLowerCase().replace(" ", "")} onClick={changeView} className="NavigationItem" activeClassName="Selected">{title}</NavLink>
};

NavigationItem.defaultProps = {
  title:"",
  identifier:"",
  activeView: "Home",
  changeView: () => null
};

const mapStateToProps = (state:any) => {
  return {activeView:state.view}
};

const mapDispatchToProps = (dispatch:Redux.Dispatch, ownProps:NavigationItemProps) => {
  return {
    changeView: () => dispatch(ChangeView(ownProps.identifier))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem)