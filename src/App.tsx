import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import {RouteName} from './RouteName';
//common component
import Login from './components/common/Login';
import Register from './components/common/Register';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//pages
import Dashboard from './components/pages/dashboard/index';
import Forum from './components/pages/forum/index';
import Lessons from './components/pages/lessons/index';
import Library from './components/pages/library/index';
import MySection from './components/pages/mySection/index';
import Setting from './components/pages/setting/index';
import Bookmark from './components/pages/bookmark/index';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is for static website */}
        {/* <Route exact path="/home" /> */}
        <Route path="/home" />
        <Route path="/contact" />
        <Route path="/why" />
        <Route path="/about" />
        {/* <Routes>
        <Route path="/login" element={<Login />}/> */}
        
        {/* </Routes> */}
        </Routes>  
        <Routes>
          <Route path={RouteName.LOGIN} element={<Login />}/> 
          <Route path={RouteName.REGISTER} element={<Register />}/> 
        </Routes>
        <Routes>
          {/* <Header/> */}
          <Route path={RouteName.DASHBOARD} element={<Dashboard />}/>  
          <Route path={RouteName.FORUM} element={<Forum />}/>  
          <Route path={RouteName.LESSONS} element={<Lessons />}/>  
          <Route path={RouteName.LIBRARY} element={<Library />}/>  
          <Route path={RouteName.MYSECTION} element={<MySection />}/>  
          <Route path={RouteName.SETTING} element={<Setting />}/>
          <Route path={RouteName.BOOKMARK} element={<Bookmark />}/>
          {/* <Footer/> */}
        </Routes>
        {/* <Route path="/login" >
          <Login/>
        </Route> */}
    </Router>
  );
}

export default App;
