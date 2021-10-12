import React from 'react'

import useUtils from '../../../hooks/useUtils'
import Day from '../Day'

export interface DaysProps {
  month: number
  year: number
  showOutsideDays: boolean
}

export const PreviousDays: React.FC<DaysProps> = ({
  month,
  year,
  showOutsideDays
}) => {
  const { getDaysInMonth } = useUtils()

  const firstDayOfTheMonth = new Date(year, month, 1)
  const firstDayIndex = firstDayOfTheMonth.getDay()
  const prevMonthLastDay = getDaysInMonth(new Date(year, month - 1, 15))
  const startDay = prevMonthLastDay - firstDayIndex
  const prevDaysArray = Array.from(Array(prevMonthLastDay - startDay).keys())

  return (
    <>
      {prevDaysArray.map((day) => {
        const display = startDay + day + 1
        return (
          <Day
            date={new Date(year, month - 1, display)}
            key={`prevDay${display}`}
            show={showOutsideDays}
            outsideDayType='prev'
            calendarMonth={new Date(year, month)}
          >
            {display}
          </Day>
        )
      })}
    </>
  )
}

export default React.memo(PreviousDays)
