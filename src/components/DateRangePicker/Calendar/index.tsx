import React from 'react'

import clsx from 'clsx'
import format from 'date-fns/format'

import Weekdays from '../Weekdays'
import Typography from '../../Typography'

import useStyles from './useStyles'
import Days from './Days'
import PreviousDays from './PreviousDays'
import NextDays from './NextDays'

export interface CalendarProps {
  month: number
  year: number
  className?: string
  showWeekends?: boolean
  showOutsideDays?: boolean
  hideWeekdayNames?: boolean
  onDateClick?: (date: Date) => void
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      month,
      year,
      className,
      showOutsideDays = false,
      showWeekends = false,
      hideWeekdayNames = false,
      onDateClick,
    },
    ref,
  ) => {
    const classes = useStyles()

    return (
      <div ref={ref} className={clsx(classes.container, className)}>
        <div className={classes.calendar}>
          <div className={classes.month}>
            <Typography variant="textBold">
              {format(new Date(year, month), 'MMMM yyyy')}
            </Typography>
          </div>

          {hideWeekdayNames ? (
            <div className={classes.spacer} />
          ) : (
            <Weekdays showWeekends={showWeekends} />
          )}

          <div
            className={clsx(
              classes.dateGrid,
              showWeekends && classes.showWeekends,
            )}
          >
            <PreviousDays
              month={month}
              year={year}
              showOutsideDays={showOutsideDays}
            />
            <Days month={month} year={year} onDateClick={onDateClick} />
            <NextDays
              month={month}
              year={year}
              showOutsideDays={showOutsideDays}
            />
          </div>
        </div>
      </div>
    )
  },
)

export default React.memo(Calendar)
