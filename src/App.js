import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewBugPage from './Views/Pages/viewBugs';
import SideBar from './Views/SideBar/sideBar';

function App() {
  const {auth} = useSelector(state => state)
  return (
   <Router>
   {!auth.loggedIn ? <Login /> :
   <>
      <h1>Welcome</h1>
      <ViewBugPage />
   </>
   }
   </Router>
  );
}

export default App;
