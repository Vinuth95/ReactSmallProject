import {React, useState, useContext} from "react";
import {mainDataContext} from "./context.js";

function Input() {

  const mainData = useContext(mainDataContext);

  const [entryData, setEntryData] = useState({});
  return (
    <>
      <input type="text" name="title" id="" placeholder="title" onChange={(e)=>{setEntryData({...entryData, [e.target.name] : e.target.value })}} />
      <input type="text" name="description" id="" placeholder="description" onChange={(e)=>{setEntryData({...entryData, [e.target.name] : e.target.value })}} />
      <button onClick={(e)=>{mainData.setMainData([...mainData.mainData, entryData])}}>Add Task</button>
      {console.log(mainData)}
    </>
  );

}

export default Input;