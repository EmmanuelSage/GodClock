import React, { useState, useEffect } from "react";
import { getDateTimeByHoursInADay } from "../utils";

const GodClock = (props: { hoursInADay: number }) => {
  const { hoursInADay } = props;
  const [newDate, newTime] = getDateTimeByHoursInADay(hoursInADay);
  const [time, setTime] = useState(newTime);
  const [date, setDate] = useState(newDate);

  useEffect(() => {
    setInterval(() => {
      const [newDate, newTime] = getDateTimeByHoursInADay(hoursInADay);
      setTime(newTime);
      setDate(newDate);
    }, 1000);
  }, [newDate, newTime, hoursInADay]);

  return (
    <div className="container">
      <p className="text">This is a {hoursInADay} Hour in a day Clock</p>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default GodClock;
