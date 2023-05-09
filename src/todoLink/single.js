import React from 'react'
import {useLocation} from "react-router-dom";

function Single() {

  const location = useLocation();

  console.log(location);

  const obj = location.state;

  return (
   <div>
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
    </div>
  )
}

export default Single;