import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout/index';
import layout from './layout/testsidebar';
import layout2 from './layout/student/layout2';
import Video_student from './components/student/video/index';
import Dashboard from './components/teacher/dashboard/index';
import Video from './components/teacher/Video/index';
import assignment from './components/teacher/Assignment/index';
import Assignment_student from './components/student/Assignment/index.js';
import Submit from './components/student/submit/index.js';
import Grading from './components/teacher/grading_assignment/index.js'
import Login from './components/login/login.js'
import SignUp from './components/signup/signUp.js'
import View_assignment from './components/teacher/view_assignment/index';
import Home from './home.js';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <Home 
        path="/home"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={layout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Video}
        exact
        layout={layout}
        path="/video"
      />
      <RouteWithLayout
        component={assignment}
        exact
        layout={layout}
        path="/assignment"
      />
      <RouteWithLayout
        component={Video_student}
        exact
        layout={layout2}
        path="/student-video"
      />
      <RouteWithLayout
        component={Assignment_student}
        exact
        layout={layout2}
        path="/student-assignment"
      />
      <RouteWithLayout
        component={Submit}
        exact
        layout={layout2}
        path="/submit"
      />
      <RouteWithLayout
        component={Grading}
        exact
        layout={layout}
        path="/grading"
      />
      <Login
        path="/login"
      />
      <SignUp
        path="/signup"
      />
      <View_assignment 
        path="/view-assignment"        
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
