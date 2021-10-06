import React from 'react'
import Day from '../Day'

export interface DaysProps {
  month: number
  year: number
  showOutsideDays: boolean
}

export const NextDays: React.FC<DaysProps> = ({
  month,
  year,
  showOutsideDays,
}) => {
  const nextDaysArray = Array.from(Array(14).keys())
  return (
    <>
      {nextDaysArray.map((day) => {
        const display = day + 1
        return (
          <Day
            date={new Date(year, month + 1, display)}
            key={`nextDay${display}`}
            show={showOutsideDays}
            outsideDayType="next"
            calendarMonth={new Date(year, month)}
          >
            {display}
          </Day>
        )
      })}
    </>
  )
}

export default React.memo(NextDays)
