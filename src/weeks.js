const msOfOneDay = 24 * 3600 * 1000;
const msOfOneWeek = msOfOneDay * 7;

let msOfTimezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;

/**
 * Set local timezone offset in milliseconds
 * @param {number} ms timezone offset in milliseconds
 */
export function setTimezoneOffsetMS(ms) {
  msOfTimezoneOffset = ms || (new Date()).getTimezoneOffset() * 60 * 1000;
}

/**
 * Returns the time-zone offset in milliseconds
 */
export function getTimezoneOffsetMS() {
  return msOfTimezoneOffset;
}

let startOfWeek = 0;
let msOfWeekOffset = msOfOneDay * 4;

/**
 * Get start day of week
 */
export function getStartOfWeek() {
  return startOfWeek;
}

/**
 * Set the start day of week
 * @param {number} days shift day of start of week
 */
export function setStartOfWeek(days) {
  if (days === 0 || days === 1) {
    startOfWeek = days;
    msOfWeekOffset = msOfOneDay * (4 - days);
  } else {
    throw new Error('Invalid days for start of week, only 0 or 1 supported.');
  }
}

/**
 * Get the week since January 1, 1970
 * @param {Date} date specified day
 */
export function weekOfDate(date) {
  const ms = date.getTime() + msOfWeekOffset - msOfTimezoneOffset;
  return Math.floor(ms / msOfOneWeek);
}

/**
 * Get the day of week (0~6)
 * @param {Date} date specified day
 */
export function dayOfWeek(date) {
  const ms = date.getTime() + msOfWeekOffset - msOfTimezoneOffset;
  const remain = ms % msOfOneWeek;
  return Math.floor(remain / msOfOneDay);
}

/**
 * Sunday of the specified week
 * @param {number} week specified week since January 1, 1970
 */
export function sundayOfWeek(week) {
  let ms = msOfOneWeek * week;
  ms += msOfTimezoneOffset - msOfWeekOffset;
  if (startOfWeek > 0) {
    ms += msOfOneDay * (7 - startOfWeek);
  }
  return new Date(ms);
}

/**
 * Monday of the specified day
 * @param {number} week specified week since January 1, 1970
 */
export function mondayOfWeek(week) {
  let ms = msOfOneWeek * week + msOfOneDay;
  ms += msOfTimezoneOffset - msOfWeekOffset;
  if (startOfWeek > 1) {
    ms += msOfOneDay * (7 - startOfWeek);
  } else if (startOfWeek > 0) {
    ms -= msOfOneDay * startOfWeek;
  }

  return new Date(ms);
}

/**
 * Get the first day of sepecified day
 * @param {number} week specified week since January 1, 1970
 */
export function firstDayOfWeek(week) {
  let ms = msOfOneWeek * week;
  ms += msOfTimezoneOffset - msOfWeekOffset;
  return new Date(ms);
}

/**
 * Get the last day of sepecified day
 * @param {number} week specified week since January 1, 1970
 */
export function lastDayOfWeek(week) {
  let ms = msOfOneWeek * week + 6 * msOfOneDay;
  ms += msOfTimezoneOffset - msOfWeekOffset;
  return new Date(ms);
}