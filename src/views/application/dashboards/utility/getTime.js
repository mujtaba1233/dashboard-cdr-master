import moment from "moment";

export const lastFifteenMinutes = () => {
  return moment().subtract(15, 'minutes').format()
};

export const lastThirtyMinutes = () => {
  return moment().subtract(30, 'minutes').format()
};

export const lastOneHour = () => {
  return moment().subtract(1, 'hour').format()
};

export const getLastDay = () => {
  return moment().subtract(1, 'day').format()
};

export const lastSevenDays = () => {
  return moment().subtract(7, 'days').format()
}

export const lastThirtyDays = () => {
  return moment().subtract(30, 'days').format()
};

export const lastNinetyDays = () => {
  return moment().subtract(90, 'days').format()
};

export const lastOneYear = () => {
  return moment().subtract(1, 'year').format()
};

export const lastFourYears = () => {
  return moment().subtract(4, 'years').format()
};
