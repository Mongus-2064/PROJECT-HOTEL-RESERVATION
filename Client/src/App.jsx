import React from "react";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./Layouts/Authlayout";
import Mainlayout from "./Layouts/Mainlayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Home from "./pages/Main/Home";
import About from "./pages/Main/About";
import Contact from "./pages/Main/Contact";
import Hotels from "./pages/Main/Hotels";
import Protectedroutes from "./ProtectedRoutes/Protectedroute.jsx"
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Authlayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Mainlayout />}>
          <Route path="" element={<Home />} />
          <Route
            path="/About"
            element={
              <Protectedroutes>
                <About />
              </Protectedroutes>
            }
          />
          <Route
            path="/Contact"
            element={
              <Protectedroutes>
                <Contact />
              </Protectedroutes>
            }
          />
          <Route
            path="/Hotels"
            element={
              <Protectedroutes>
                <Hotels />
              </Protectedroutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
