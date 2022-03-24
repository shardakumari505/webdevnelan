import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard-page/dashboard-page.component';
import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';
import SigninPage from './pages/signin-page/signin-page';
import SignupPage from './pages/signup-page/signup-page';
import UserHomePage from './pages/user-home/user-home-page';
import UserRooms from './pages/user-rooms/user-rooms';
import CodeEditor from './pages/code-editor/code-editor';
import Share from './pages/user-blog-page/Share'
import {UserProvider} from './userauth';

 

class App extends Component {



  render(){
   
  return (
      <div className="App">
        <UserProvider>
          <Router>
            <Navbar/>
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/signin" element={<SigninPage/>} />
                  <Route path="/signup" element={<SignupPage/>} />
                  <Route path="/userhome" element={<UserHomePage/>} />
                  <Route path="/userrooms" element={<UserRooms/>} />
                  <Route path="/codeeditor" element={<CodeEditor/>} />
                  <Route path="/techblog" element={<Share/>} />
              </Routes>
              {/* <Footer /> */}
          </Router>
        </UserProvider>     
      
      </div>
    );
}
}

export default App;
