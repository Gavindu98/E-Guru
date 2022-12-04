import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { RouteName } from "./RouteName";
import { AuthProvider } from "./context/AuthProvider";
//common component
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

//pages
import Dashboard from "./components/pages/dashboard/index";
import Forum from "./components/pages/forum/index";
import Lessons from "./components/pages/lessons/index";
import Library from "./components/pages/library/index";
import MySection from "./components/pages/mySection/index";
import Setting from "./components/pages/setting/index";
import Bookmark from "./components/pages/bookmark/index";
import CreateArticle from "./components/pages/createArticle/createArticle";
import CreateLessons from "./components/pages/createArticle/createLessons";
import UploadToLibrary from "./components/pages/createArticle/uploadToLibrary";
import SinglePost from "./components/pages/singlePost/index";
import SingleBook from "./components/pages/library/sinlgeBook";

function App() {
  const [shownavBar, setShownavBar] = useState(true);

  const HandleClickShowNavbar = () => {
    setShownavBar(true);
  };
  const HandleClickClose = () => {
    setShownavBar(false);
  };
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
      {/* <Routes>
        
      </Routes> */}
      <Fragment>
        <AuthProvider>
          <Header />
          <Routes>

            <Route path={RouteName.LOGIN} element={<Login />} />
            <Route path={RouteName.REGISTER} element={<Register />} />
            <Route path={RouteName.DASHBOARD} element={<Dashboard />} />
            <Route path={RouteName.FORUM} element={<Forum />} />
            <Route path={RouteName.LESSONS} element={<Lessons />} />
            <Route path={RouteName.LIBRARY} element={<Library />} />
            <Route path={RouteName.SINGLE_POST} element={<SinglePost />} />
            {/* <Route path={RouteName.MYSECTION} element={<MySection />} />
          <Route path={RouteName.SETTING} element={<Setting />} /> */}
            <Route path={RouteName.BOOKMARK} element={<Bookmark />} />
            <Route path={RouteName.CREATE_ARTICLE} element={<CreateArticle />} />
            <Route path={RouteName.MODIFY_ARTICLE} element={<CreateArticle />} />
            <Route path={RouteName.CREATE_LESSONS} element={<CreateLessons />} />
            <Route path={RouteName.UPLOAD_LIBRARY} element={<UploadToLibrary />} />
            <Route path={RouteName.SINGLE_LIBRARY} element={<SingleBook />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Fragment>

      {/* <Route path="/login" >
          <Login/>
        </Route> */}
    </Router>
  );
}

export default App;
