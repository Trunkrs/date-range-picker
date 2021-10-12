import { useState, useContext, useEffect } from 'react'

import useUtils from './useUtils'
import DateRange from '../components/DateRangePicker/DateRange'

export interface DateHighlightResult {
  isHighlighted: boolean
  isStart: boolean
  isEnd: boolean
}

const useDateHighlight = (
  date: Date,
  outsideDayType: boolean | 'prev' | 'next',
  calendarMonth?: Date
): DateHighlightResult => {
  const { isWithinRange, isEqual, isBefore, isAfter, isSameMonth, endOfMonth } =
    useUtils()

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
          isBefore(endOfMonth(calendarMonth), dateRange.dateEnd)
      }
    } else {
      isDateWithinSelectedRange = isWithinRange(date, [
        dateRange.dateStart,
        dateRange.dateEnd
      ])

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
    dateRange.dateStart
  ])

  return { isHighlighted, isStart, isEnd }
}

export default useDateHighlight
