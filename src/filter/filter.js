import {useState} from "react";



function Filter({ data }) {

  const [fData,setData] = useState(data);

  function show(e) {
    setData(data.filter((dat) => (dat.name.indexOf(e.target.value))>-1))
  }

  return (
    <div style={{marginTop : "50px"}}>
      <input type="text" placeholder="filter" onChange={show} />

   { fData.map((dat,index)=> <h4 key={index}>{dat.name}</h4>)}
    </div>
  );
}

export default Filter;