import {List, List2} from "./listStyle.js";

import data from "../data.js";

function AppListStyle() {
  return (
    <>
      <List pattern="square" value={data}></List>
      <List2 pattern="number" value={data} sub="origin"></List2>
      <List2 pattern="upper-roman" value={data} sub="collection"></List2>
      <List2 pattern="lower-alpha" value={data} sub="release date"></List2>
    </>
  );
}

export default AppListStyle;
