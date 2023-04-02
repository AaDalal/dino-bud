import './App.css';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tokenReducer from './reducer/tokenReducer';
import userReducer from './reducer/userReducer';
import axios from './Axios/axios.js';
import ProtectedRoutes from './components/protectedRoutes';
import UserContext from './context/UserContext';
import Login from './components/Login';
import SignUp from './components/SignUp';

import React from "react";
import "./App.css";
import LearningAssistant from "./components/LearningAssistant";
import LearningAssistantcopy from "./components/LearningAssistant-copy";




function App() {
  const _token = JSON.parse(localStorage.getItem("authToken"));
  const [token, tokenDispatch] = useReducer(tokenReducer, _token)
  const [user, userDispatch] = useReducer(userReducer, null)
  
  // try to set the user every time the token changes
  useEffect(() => {
    console.log("token changed")
    if (token) {
      (async () => {
          try {
            const res = await axios.get("/user/getUser", { headers: { Authorization: `Bearer ${token}` } })
            userDispatch({ type: "user/setUser", payload: res.data.user })
          } catch (error) {
            userDispatch({ type: "user/unsetUser" })
          }
        }
      )();
    }
  }, [token])

  return (
    <UserContext.Provider value={{ token, tokenDispatch, user, userDispatch}}>
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<div style={{ height: "100%", width: "100%", maxHeight: "100vh", display: "flex", alignItems: "center" }}><LearningAssistantcopy/></div>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' exact={false} element={<ProtectedRoutes/>}>
              <Route path="/page" element={<div>Hello</div>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
