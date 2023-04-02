import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from './Axios/axios.js';
import ProtectedRoutes from './components/protectedRoutes';
import UserContext from './context/UserContext';
import Login from './components/Login';
import SignUp from './components/SignUp';

import React from "react";
import "./App.css";
import LearningAssistant from "./components/LearningAssistant";
import LearningAssistantcopy from "./components/LearningAssistant-copy";
import CreateTopic from './components/createTopic';


function App() {
  const _token = JSON.parse(localStorage.getItem("authToken"));
  const [token, setToken] = useState(_token);
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/user/getUser", { headers: { Authorization: `Bearer ${token}` } })
        setUser(res.data.user)
      } catch (error) {
        setUser(null)
      }
    })();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser}}>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' exact={false} element={<ProtectedRoutes/>}>
              <Route path="/" exact element={<CreateTopic/>}/>
              <Route path='/:topicId' exact element={<div style={{ height: "100%", width: "100%", maxHeight: "100vh", display: "flex", alignItems: "center" }}><LearningAssistantcopy/></div>}/>
              <Route path="/page" element={<div>Hello</div>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
