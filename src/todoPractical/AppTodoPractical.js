import { React, useState } from "react";
import List from "./list";

//
//
//

function AppTodoPractical() {
  //
  const sports = ["cricket", "football", "tennis", "chess", "badminton"];

  const [events, setEvents] = useState(sports);

  function deleteItem(id) {
    setEvents(
      events.filter((sport, index) => {
        return index !== id;
      })
    );
  }

  return (
    <>
      <ul>
        {events.map((event, index) => {
          return (
            <List
              key={event}
              sport={event}
              deleteItem={deleteItem}
              index={index}
            ></List>
          );
        })}
      </ul>
    </>
  );
}

export default AppTodoPractical;
