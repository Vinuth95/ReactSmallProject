import { React, createContext, useState } from "react";

const addTaskSignal = createContext();
const mainDataContext = createContext();

function Context({ children }) {
  const [addTaskBoolean, setAddTaskBoolean] = useState(false);
  const [mainData, setMainData] = useState([]);

  return (
    <addTaskSignal.Provider value={{ addTaskBoolean, setAddTaskBoolean }}>
    <mainDataContext.Provider value={{ mainData, setMainData }}>
      {children}
    </mainDataContext.Provider>
    </addTaskSignal.Provider>
  );
}

export { Context, addTaskSignal, mainDataContext };