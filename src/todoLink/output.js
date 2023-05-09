import { React, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import {mainDataContext} from "./context.js";

function OutputSingle({ obj }) {

const navigate = useNavigate();


  return (
    <div className="output-container">
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
      <button onClick={()=>{navigate("/single",{ state : obj})}}>Read More</button>
    </div>
  );
}

function Output() {

  const mainData = useContext(mainDataContext);


  return (
    <div className="output-wrapper">
      {mainData.mainData.map((singleData, index) => {
        return (
          <div key={singleData.title}>
            <OutputSingle obj={singleData}></OutputSingle>
          </div>
        );
      })}
    </div>
  );
}

export default Output;
