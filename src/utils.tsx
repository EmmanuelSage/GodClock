const JUNE_23_IN_MILLISECONDS = 1624402800000;

export const getDateTimeByHoursInADay = (
  hoursInADay: number = 24,
  startindDay: number = JUNE_23_IN_MILLISECONDS
) => {
  const currentDate = new Date();

  const resetDate = new Date(startindDay);

  const currentDateMilliseconds = currentDate.getTime();
  const resetDateMilliseconds = resetDate.getTime();
  const millisecondDifference = currentDateMilliseconds - resetDateMilliseconds;

  const newDateByHoursInADay = new Date(
    new Date(resetDateMilliseconds + millisecondDifference * (24 / hoursInADay))
  );

  return [
    newDateByHoursInADay.toDateString(),
    newDateByHoursInADay.toTimeString().slice(0, 8),
  ];
};
