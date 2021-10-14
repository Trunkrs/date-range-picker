import React from 'react'

import useUtils from '../../../hooks/useUtils'
import Day from '../Day'

export interface DaysProps {
  month: number
  year: number
  onDateClick?: (date: Date) => void
}

export const Days: React.FC<DaysProps> = ({ month, year, onDateClick }) => {
  const { getDaysInMonth } = useUtils()

  const numberOfDays = getDaysInMonth(new Date(year, month))
  const daysArray = Array.from(Array(numberOfDays).keys())

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default React.memo(Days)
