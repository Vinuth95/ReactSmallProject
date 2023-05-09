import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
import "./TodoLink.css";

function TodoLink() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default TodoLink;
