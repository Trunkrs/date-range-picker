import React, { useMemo } from 'react'

import clsx from 'clsx'
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import format from 'date-fns/format'

import Typography from '../../Typography'

import useStyles from './useStyles'

export interface WeekdaysProps {
  showWeekends?: boolean
}

export const Weekdays: React.FC<WeekdaysProps> = ({ showWeekends = true }) => {
  const classes = useStyles()

  const firstDOW = startOfWeek(new Date())
  const shortWeekDaysArray = useMemo(
    () =>
      Array.from(Array(7)).map((_e, i) =>
        format(addDays(firstDOW, i), 'EEEEEE'),
      ),
    [firstDOW],
  )

  return (
    <div
      className={clsx(classes.weekdays, showWeekends && classes.showWeekends)}
    >
      {shortWeekDaysArray.map((weekdayName) => (
        <Typography
          variant="textBold"
          className={classes.weekdayName}
          key={weekdayName}
        >
          {weekdayName}
        </Typography>
      ))}
    </div>
  )
}

export default React.memo(Weekdays)
