export interface CalendarValue {
  date: Date
  key: number
}

export const getNextSetOfCalendarMonthsToView = (
  calendars: CalendarValue[],
  count = 1,
  addMonths: (value: Date, count: number) => Date
): CalendarValue[] => {
  const newCalendars = [...calendars]
  newCalendars.splice(0, 0, {
    date: addMonths(calendars[0].date, -count) as Date,
    key: calendars[0].key - count
  })
  newCalendars.pop()

  return newCalendars
}

export const getPreviousSetOfCalendarMonthToView = (
  calendars: CalendarValue[],
  count = 1,
  addMonths: (value: Date, count: number) => Date
): CalendarValue[] => {
  const newCalendars = [...calendars]
  const secondCalendar = calendars[calendars.length - 1]
  newCalendars.shift()
  newCalendars.push({
    date: addMonths(secondCalendar.date, count) as Date,
    key: secondCalendar.key + count
  })

  return newCalendars
}

export default getNextSetOfCalendarMonthsToView
