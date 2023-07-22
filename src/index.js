import React from "react";
import ReactDOM from "react-dom/client";
import AppBorder from "./border/AppBorder";
import AppListStyle from "./listStyle/AppListStyle";
import AppOption from "./option/AppOption";
import AppFilter from "./filter/AppFilter";
import AppTodo from "./todo/todo.js";
import AppClock from "./clock/clock.js";
import AppFetch from "./fetch/fetch.js";
import AppTodoPractical from "./todoPractical/AppTodoPractical";
import Select from "./select/select";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <AppBorder /><hr /> */}
    {/* component for border  */}

    {/* <AppListStyle /><hr /> */}
    {/* handle different list style type from outside*/}

    {/* <AppOption/><hr /> */}
    {/* add option in select menu from input text */}

    {/* <AppFilter /><hr /> */}
    {/* search particular character from array */}

    {/* <AppTodo /><hr /> */}
    {/* add todo from input text, remove one and remove all todo */}

    {/* <AppClock /><hr /> */}
    {/* digital clock */}

    {/* <AppFetch /><hr /> */}
    {/* fetch json data title and when click on title fetch comment */}

    {/* <AppTodoPractical/> <hr /> */}
    {/* when todo tick then delete button show, when delete button click, todo delete */}

    {/* <Select/><hr /> */}
    {/* when first option select then in another select box option change */}

  </>
);
