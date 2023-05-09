import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { addTaskSignal } from "./context.js";

function Nav() {
  const navigate = useNavigate();

  const AddTaskSignalContext = useContext(addTaskSignal);

  return (
    <>
      <ul className="nav-container">
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </li>
        <li
          onClick={() => {
            navigate("/output");
          }}
        >
          LIST
        </li>
        <li
          onClick={() => {
            AddTaskSignalContext.setAddTaskBoolean(
              !AddTaskSignalContext.addTaskBoolean
            );
            !AddTaskSignalContext.addTaskBoolean
              ? navigate("/input")
              : navigate("/");
          }}
        >
          ADD TASK
        </li>
      </ul>
    </>
  );
}

export default Nav;
