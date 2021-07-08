const CURRENT_DATE_FOR_RESET_DATE = new Date();

export const getDateTimeByHoursInADay = (hoursInADay: number = 24) => {
  const currentDate = new Date();
  const resetDate = CURRENT_DATE_FOR_RESET_DATE;

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
