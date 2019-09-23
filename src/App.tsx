import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux";
import Background from "./Components/Background";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";
import {ViewChangeReducer, ViewDataReducer} from "./Redux/Reducers";
import thunk from "redux-thunk";

const App: React.FC = () => {
    const reducers = combineReducers({view:ViewChangeReducer, viewData:ViewDataReducer});
    const store = createStore(reducers, applyMiddleware(thunk));
  return (
      <Provider store={store}>
        <div className="App">
          <Background/>
          <HomePage/>
          <Navigation/>
        </div>
      </Provider>
  );
};

export default App;
