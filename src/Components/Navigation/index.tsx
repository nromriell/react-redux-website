import React, {Fragment} from 'react'
import '../../Theme.css'
import NavigationItem from "./NavigationItem";
import {connect} from "react-redux";
import {ViewData} from "../../Redux/Reducers";

type NavigationProps = {
  viewData:ViewData[] | null | undefined
}

const Navigation = ({viewData}:NavigationProps) => {
  let itemElements:React.ReactElement[] = [];
  if(viewData != null){
    itemElements = viewData.map((data)=>
      <NavigationItem title={data.name} identifier={data.identifier} key={data.identifier}/>
    );
  }
  return <Fragment>
    <div className="Navigation hide-on-small">{itemElements}</div>
    <div className="Navigation-Small show-on-small">{itemElements}</div>
  </Fragment>
};

const mapStateToProps = (state:any) => {
  return {viewData: state.viewData}
};

Navigation.defaultProps = {
  viewData:null
};

export default connect(mapStateToProps, null)(Navigation);