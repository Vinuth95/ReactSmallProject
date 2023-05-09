import Filter from "./filter.js";

import data from "../data.js";

function AppFilter() {
  return (
    <>
      <h1>Filter</h1>
      <Filter data={data}></Filter>
    </>
  );
}

export default AppFilter;