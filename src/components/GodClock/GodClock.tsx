import React, { useState, useEffect } from "react";
import { getDateTimeByHoursInADay } from "../../utils";
import { InputForm } from "../NumberInput/Input";
import "./GodClock.css";

const GodClock = (props: {
  hoursInADay: number;
  changeHourSlug: (e: any) => void;
}) => {
  const { hoursInADay, changeHourSlug } = props;
  const [newDate, newTime] = getDateTimeByHoursInADay(hoursInADay);
  const [time, setTime] = useState(newTime);
  const [date, setDate] = useState(newDate);
  const [input, setInput] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeHourSlug(Number(input));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const [newDate, newTime] = getDateTimeByHoursInADay(
        hoursInADay
      );
      setTime(newTime);
      setDate(newDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [newDate, newTime, hoursInADay]);

  return (
    <div className="container">
      <InputForm
        placeholder={String(hoursInADay)}
        value={input}
        onChange={onChange}
        onSubmit={handleInputSubmit}
      />
      <p className="text">This is a {hoursInADay} Hour in a day Clock</p>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default GodClock;
