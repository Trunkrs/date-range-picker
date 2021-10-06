import React, { useCallback } from 'react'

import clsx from 'clsx'

import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '../../Typography'

import useStyles from './useStyles'
import useDateHighlight from '../../../hooks/useDateHighlight'

export interface DayProps {
  children: number
  date: Date
  show?: boolean
  calendarMonth?: Date
  onClick?: (value: Date) => void
  outsideDayType?: 'prev' | 'next'
}

export const Day: React.FC<DayProps> = ({
  outsideDayType = false,
  calendarMonth,
  show = true,
  children,
  onClick,
  date,
}) => {
  const { isHighlighted, isStart, isEnd } = useDateHighlight(
    date,
    outsideDayType,
    calendarMonth,
  )
  const classes = useStyles()

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(date)
    }
  }, [onClick, date])

  const theDate = React.useMemo(
    () => (
      <Typography
        className={clsx(
          (isStart || isEnd) && !outsideDayType && classes.selectedDay,
        )}
        variant="text"
        color={outsideDayType ? 'grey' : 'indigo'}
      >
        {children}
      </Typography>
    ),
    [classes, children, isStart, isEnd, outsideDayType],
  )

  return (
    <ButtonBase
      disabled={!!outsideDayType}
      className={clsx(
        classes.day,
        !isHighlighted &&
          !outsideDayType &&
          !isStart &&
          !isEnd &&
          classes.hovering,
        outsideDayType && classes.outsideDay,
        isHighlighted && classes.selected,
        isStart && classes.start,
        isEnd && classes.end,
        !show && classes.hidden,
      )}
      onClick={handleClick}
    >
      {theDate}
    </ButtonBase>
  )
}

export default React.memo(Day)
