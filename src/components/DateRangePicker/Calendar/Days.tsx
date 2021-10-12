import React from 'react'
import { getDaysInMonth } from 'date-fns'

import Day from '../Day'

export interface DaysProps {
  month: number
  year: number
  onDateClick?: (date: Date) => void
}

export const Days: React.FC<DaysProps> = ({ month, year, onDateClick }) => {
  const numberOfDays = getDaysInMonth(new Date(year, month))
  const daysArray = Array.from(Array(numberOfDays).keys())

  return (
    <>
      {daysArray.map((day) => {
        const display = day + 1
        return (
          <Day
            date={new Date(year, month, display)}
            key={`day${display}`}
            onClick={onDateClick}
          >
            {display}
          </Day>
        )
      })}
    </>
  )
}

export default React.memo(Days)
