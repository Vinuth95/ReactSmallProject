import { useState } from "react";
//
//
//

function Option() {
  //
  let defaultData = {
    name: "",
    value: ""
  };

  const [nation, setNation] = useState(defaultData);

  const [target, setTarget] = useState([]);

  function handleInput(e) {
    setNation({ ...nation, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (nation.name && nation.value) {
      setTarget([...target, nation]);
      setNation(defaultData);
    }
    //
    else {
      console.log("please enter both value");
    }
  }

  //
  //
  function handleOption(e) {
    console.log(e.target.value);
  }
  //
  return (

    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={nation.name}
        onChange={handleInput}
      />
      <input
        type="text"
        name="value"
        placeholder="value"
        value={nation.value}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Add Data</button>

      <select name="" id="" onChange={handleOption}>
        <option value="">--select country--</option>

        {target.map((tar, index) => (
          <option value={tar.value} key={index}>
            {tar.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Option;