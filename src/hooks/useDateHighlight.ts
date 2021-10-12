import { useState, useContext, useEffect } from 'react'

import isWithinInterval from 'date-fns/isWithinInterval'
import isEqual from 'date-fns/isEqual'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import isSameMonth from 'date-fns/isSameMonth'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import DateRange from '../components/DateRangePicker/DateRange'

export interface DateHighlightResult {
  isHighlighted: boolean
  isStart: boolean
  isEnd: boolean
}

const useDateHighlight = (
  date: Date,
  outsideDayType: boolean | 'prev' | 'next',
  calendarMonth?: Date,
): DateHighlightResult => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const [isStart, setIsStart] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const dateRange = useContext(DateRange)

  useEffect(() => {
    if (!dateRange.dateStart || !dateRange.dateEnd) return

    let isDateWithinSelectedRange = false

    if (calendarMonth) {
      if (outsideDayType === 'prev') {
        isDateWithinSelectedRange =
          (isBefore(calendarMonth, dateRange.dateEnd) ||
            isSameMonth(calendarMonth, dateRange.dateEnd)) &&
          isAfter(calendarMonth, dateRange.dateStart)
      }

      if (outsideDayType === 'next') {
        isDateWithinSelectedRange =
          (isAfter(calendarMonth, dateRange.dateStart) ||
            isSameMonth(calendarMonth, dateRange.dateStart)) &&
          isBefore(lastDayOfMonth(calendarMonth), dateRange.dateEnd)
      }
    } else {
      isDateWithinSelectedRange = isWithinInterval(date, {
        start: dateRange.dateStart,
        end: dateRange.dateEnd,
      })

      // if date is the start OR end
      setIsStart(isEqual(date, dateRange.dateStart))
      setIsEnd(isEqual(date, dateRange.dateEnd))
    }

    setIsHighlighted(isDateWithinSelectedRange)
  }, [
    date,
    outsideDayType,
    calendarMonth,
    dateRange.dateEnd,
    dateRange.dateStart,
  ])

  return { isHighlighted, isStart, isEnd }
}

export default useDateHighlight
