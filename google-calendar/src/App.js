import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import MainCalendar from './components/MainCalendar';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={MainCalendar}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
