import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'

interface Calendar {
  date: Date
  key: number
}

export const getNextSetOfCalendarMonthsToView = (
  calendars: Calendar[],
  count = 1,
): Calendar[] => {
  const newCalendars = [...calendars]
  newCalendars.splice(0, 0, {
    date: subMonths(calendars[0].date, count),
    key: calendars[0].key - count,
  })
  newCalendars.pop()

  return newCalendars
}

export const getPreviousSetOfCalendarMonthToView = (
  calendars: Calendar[],
  count = 1,
): Calendar[] => {
  const newCalendars = [...calendars]
  const secondCalendar = calendars[calendars.length - 1]
  newCalendars.shift()
  newCalendars.push({
    date: addMonths(secondCalendar.date, count),
    key: secondCalendar.key + count,
  })

  return newCalendars
}

export default getNextSetOfCalendarMonthsToView
