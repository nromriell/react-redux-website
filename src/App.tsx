import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import Background from "./Components/Background";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";
import {ViewChangeReducer, ViewDataReducer, ProjectsReducer, AboutMeReducer} from "./Redux/Reducers";
import thunk from "redux-thunk";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";

const App: React.FC = () => {
    const reducers = combineReducers({view:ViewChangeReducer, viewData:ViewDataReducer, projects:ProjectsReducer, aboutMe:AboutMeReducer});
    const store = createStore(reducers, applyMiddleware(thunk));
  return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <Background>
              <Switch>
                  <Route path="/aboutme">
                      <AboutMe/>
                  </Route>
                  <Route path="/projects">
                      <Projects/>
                  </Route>
                  <Route path="/blog">
                      <Blog/>
                  </Route>
                  <Route path="/">
                      <HomePage/>
                  </Route>
              </Switch>
              </Background>
              <Navigation/>
            </div>
          </Router>
      </Provider>
  );
};

export default App;
