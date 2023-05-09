import { React, useState, useEffect } from "react";

import "./clockstyle.css";

function time() {

  const info = new Date();
  let date = info.getDate();
  
  const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthsList[info.getMonth()];
  let year = info.getFullYear();
  let hour = info.getHours();
  let hourFormat = hour > 12 ? "PM" : "AM";
  if (hour > 12) {
    hour = hour - 12;
  }
  let minute = info.getMinutes();
  let second = info.getSeconds();
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = daysList[info.getDay()];

  let obj = {
    date: date,
    month: month,
    day: day,
    year: year,
    hour: hour,
    minute: minute,
    second: second,
    hourFormat: hourFormat,
  };

  return obj;
}

function AppClock() {
  const [info, setInfo] = useState({});

  function update() {
    setInfo(time());
  }

  setInterval(update, 1000);

  return (
    <>
      <div className="container">
        <div className="square">
          {info.hour}:{info.minute}:{info.second} {info.hourFormat} <br />
          {info.date} {info.month} {info.day}
        </div>
      </div>
    </>
  );
}

export default AppClock;
