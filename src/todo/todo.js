import { useState } from "react";

function AppTodo() {
  //
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);

  function typeHandler(e) {
    setActivity(e.target.value);
  }

  function inputArea(e) {
    if (e.key === "Enter") {
      addActivity();
    }
  }

  function addActivity() {
    if (activity != "") {
      setList([...list, activity]);
      setActivity("");
    }
  }

  function removeActivity(index) {
    const updateList = list.filter((elem, id) => {
      return index != id;
    });
    setList(updateList);
  }

  function removeAllActivity() {
    setList([]);
  }




  //
  //

  return (
    <>
      <h1>TODO LIST</h1>

      <input
        type="text"
        placeholder="add activity"
        value={activity}
        onChange={typeHandler}
        onKeyPress={inputArea}
      />
      <button onClick={addActivity}>ADD TODO</button>
      <br />

      {list.length > 0 &&
        list.map((li, index) => {
          return (
            <>
              <p key={li}>
                {li}
                <button onClick={() => removeActivity(index)}>Remove</button>
              </p>
            </>
          );
        })}

      {list.length >= 1 ? (
        <button onClick={removeAllActivity}>Remove All</button>
      ) : null}

      <br />
      <br />
    </>
  );
}

export default AppTodo;