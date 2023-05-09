import { useState } from "react";

//
//
//

function List({ sport, deleteItem, index }) {
  const [deleteSignal, setDeleteSignal] = useState(false);

  return (
    <>
      <li>
        <input
          type="checkbox"
          id={sport}
          onChange={(e) => {
            e.target.checked ? setDeleteSignal(true) : setDeleteSignal(false);
          }}
        />
        <label htmlFor={sport}>{sport}</label>

        {deleteSignal && (
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            Delete
          </button>
        )}
      </li>
    </>
  );
}

export default List;
