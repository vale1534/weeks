import * as weeks from './weeks';

const cstTimezoneOffsetMS = -8 * 3600 * 1000;

it('week of date n day of week', () => {
  weeks.setTimezoneOffsetMS(cstTimezoneOffsetMS);

  const tue = new Date('Tue Jul 04 2017 23:59:59 GMT+0800');
  const wed = new Date('Wed Jul 05 2017 00:00:00 GMT+0800');
  const thu = new Date('Wed Jul 05 2017 24:00:00 GMT+0800');
  expect(weeks.weekOfDate(tue)).toEqual(2479);
  expect(weeks.weekOfDate(wed)).toEqual(2479);
  expect(weeks.weekOfDate(thu)).toEqual(2479);
  expect(weeks.dayOfWeek(tue)).toEqual(2);
  expect(weeks.dayOfWeek(wed)).toEqual(3);
  expect(weeks.dayOfWeek(thu)).toEqual(4);

  const ten = new Date('Mon Jul 10 2017 00:00:00 GMT+0800');
  expect(weeks.weekOfDate(ten)).toEqual(2480);
  expect(weeks.dayOfWeek(ten)).toEqual(1);
});

it('days in week', () => {
  weeks.setTimezoneOffsetMS(cstTimezoneOffsetMS);

  const mon = new Date('Jul 10 2017 00:00:00 GMT+0800');
  const sun = new Date('Jul 09 2017 00:00:00 GMT+0800');
  expect(weeks.mondayOfWeek(2480)).toEqual(mon);
  expect(weeks.sundayOfWeek(2480)).toEqual(sun);
});

it('local day', () => {
  weeks.setTimezoneOffsetMS(null);
  const today = new Date();
  expect(weeks.dayOfWeek(today)).toEqual(today.getDay());
});

it('start of week', () => {
  weeks.setTimezoneOffsetMS(cstTimezoneOffsetMS);
  weeks.setStartOfWeek(1);

  const wed = new Date('Wed Jul 05 2017 00:00:00 GMT+0800');
  expect(weeks.weekOfDate(wed)).toEqual(2479);
  expect(weeks.dayOfWeek(wed)).toEqual(2);

  const mon = new Date('Mon Jul 10 2017 00:00:00 GMT+0800');
  const sun = new Date('Sun Jul 16 2017 00:00:00 GMT+0800');
  expect(weeks.mondayOfWeek(2480)).toEqual(mon);
  expect(weeks.sundayOfWeek(2480)).toEqual(sun);
});

it('first n last day of week', () => {
  weeks.setTimezoneOffsetMS(cstTimezoneOffsetMS);
  weeks.setStartOfWeek(1);

  const firstDay = new Date('Mon Jul 10 2017 00:00:00 GMT+0800');
  const lastDay = new Date('Sun Jul 16 2017 00:00:00 GMT+0800');
  expect(weeks.firstDayOfWeek(2480)).toEqual(firstDay);
  expect(weeks.lastDayOfWeek(2480)).toEqual(lastDay);

  weeks.setStartOfWeek(0);
  const sun = new Date('Sun Jul 09 2017 00:00:00 GMT+0800');
  const sat = new Date('Sat Jul 15 2017 00:00:00 GMT+0800');
  expect(weeks.firstDayOfWeek(2480)).toEqual(sun);
  expect(weeks.lastDayOfWeek(2480)).toEqual(sat);
});
