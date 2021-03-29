import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default function ReactDayPicker(props) {
  const [date, setDate] = useState(new Date());

  function onChange(date) {
    setDate(date);
    props.onChange(date);
    console.log(date.getTime()/1000);
  }

  return <DayPickerInput onDayChange={onChange} />;
}