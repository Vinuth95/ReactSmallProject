import React from "react";
import Nav from "./nav.js";
import Home from "./home.js";
import { Routes, Route } from "react-router-dom";
import Output from "./output";
import Input from "./input";
import Single from "./single.js";
import { Context } from "./context.js";

function Main() {
  return (
    <>
      <Context>
        <Nav></Nav><hr />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/input" element={<Input />}></Route>
          <Route path="/output" element={<Output />}></Route>
          <Route path="/single" element={<Single />}></Route>
        </Routes>

      </Context>
    </>
  );
}

export default Main;
