const padZeros = (numberToPad: number, numOfPadding: number) => {
  let padZero = "";
  for (let i = 0; i < numOfPadding; i++) {
    padZero += "0";
  }
  return (padZero + numberToPad).slice(-numOfPadding);
};

const getDateTimeString = (date: Date) => {
  const hours = padZeros(date.getHours(), 2);
  const minutes = padZeros(date.getMinutes(), 2);
  const seconds = padZeros(date.getSeconds(), 2);

  const newTime = `${hours}:${minutes}:${seconds}`;

  const year = padZeros(date.getFullYear(), 4);
  const month = padZeros(date.getMonth() + 1, 2);
  const day = padZeros(date.getDate(), 2);

  const newDate = `${year}-${month}-${day}`;

  return [newDate, newTime];
};

export const getDateTimeByHoursInADay = (hoursInADay: number = 24) => {
  const currentDate = new Date();

  const resetDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0
  );

  const currentDateMilliseconds = currentDate.getTime();
  const resetDateMilliseconds = resetDate.getTime();
  const millisecondDifference = currentDateMilliseconds - resetDateMilliseconds;

  const newDateByHoursInADay = new Date(
    new Date(resetDateMilliseconds + millisecondDifference * (24 / hoursInADay))
  );

  return getDateTimeString(newDateByHoursInADay);
};
