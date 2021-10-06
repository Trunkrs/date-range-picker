import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from 'react'

import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'

import { useTransition, config, animated } from 'react-spring'

import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import isSameMonth from 'date-fns/isSameMonth'
import differenceInMonths from 'date-fns/differenceInMonths'
import ButtonBase from '@material-ui/core/ButtonBase'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Calendar from '../Calendar'
import Weekdays from '../Weekdays'
import useStyles from './useStyles'
import useRefValue from '../../../hooks/useRefValue'
import DateRange from '../DateRange'
import {
  getNextSetOfCalendarMonthsToView,
  getPreviousSetOfCalendarMonthToView,
} from './helper'

export interface PickerProps {
  initialDate: Date
  showWeekends?: boolean
  showOutsideDays?: boolean
  onDateClick?: (date: Date) => void
}

export const Picker: React.FC<PickerProps> = ({
  initialDate,
  showWeekends = true,
  showOutsideDays = true,
  onDateClick,
}) => {
  const [calendars, setCalendars] = useState([
    { date: subMonths(initialDate, 1), key: -1 },
    { date: initialDate, key: 0 },
    { date: addMonths(initialDate, 1), key: 1 },
    { date: addMonths(initialDate, 2), key: 2 },
  ])
  const [adjustment, setAdjustment] = useState(0)
  const dateRange = useContext(DateRange)
  const prevDate1 = useRefValue(dateRange.dateStart)

  const theme = useTheme()
  const classes = useStyles()

  const width = useMemo(() => {
    return showWeekends ? theme.spacing(39) : theme.spacing(29)
  }, [theme, showWeekends])

  const handlePrev = useCallback(
    (_e?: React.SyntheticEvent, count = 1) => {
      const newCalendars = getNextSetOfCalendarMonthsToView(calendars, count)
      setCalendars(newCalendars)
    },
    [calendars],
  )

  const handleNext = useCallback(
    (_e?: React.SyntheticEvent, count = 1) => {
      const newCalendars = getPreviousSetOfCalendarMonthToView(calendars, count)
      setCalendars(newCalendars)
    },
    [calendars],
  )

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (event.deltaY > 0) {
        handleNext()
        return
      }

      handlePrev()
    },
    [handleNext, handlePrev],
  )

  // animate to the correct calendar if date1 is out of view
  useEffect(() => {
    if (!dateRange.dateStart || dateRange.dateStart === prevDate1) return

    const isDateOutOfView =
      !isSameMonth(dateRange.dateStart, calendars[1].date) ||
      !isSameMonth(dateRange.dateStart, calendars[2].date)

    if (isDateOutOfView) {
      const diff = differenceInMonths(dateRange.dateStart, calendars[1].date)
      const skip = Math.abs(diff) - 5

      if (diff > 5) {
        handleNext(undefined, skip)
        setAdjustment(5)
        return
      }

      if (diff < -5) {
        handlePrev(undefined, skip)
        setAdjustment(-5)
        return
      }

      setAdjustment(diff)
    }
  }, [dateRange, calendars, adjustment, prevDate1, handlePrev, handleNext])

  // animate to the correct calendar until there is no more adjustment needed
  useEffect(() => {
    if (adjustment === 0) return

    if (adjustment < 0) {
      handlePrev()
      setAdjustment(adjustment + 1)
      return
    }

    handleNext()
    setAdjustment(adjustment - 1)
  }, [adjustment, handleNext, handlePrev])

  const transition = useTransition(calendars, {
    key: (calendar: any) => calendar.key,
    initial: { width: '100%' },
    from: { width: '0%' },
    enter: { width: '100%' },
    leave: { width: '0%' },
    config: {
      ...config.stiff,
      clamp: true,
    },
  })

  return (
    <div
      className={classes.pickerRoot}
      style={{ width: width * 2 }}
      onWheel={handleWheel}
    >
      <div className={classes.calendars}>
        {transition((value, calendar) => (
          <animated.div style={value}>
            <Calendar
              month={calendar.date.getMonth()}
              year={calendar.date.getFullYear()}
              showWeekends={showWeekends}
              hideWeekdayNames
              showOutsideDays={showOutsideDays}
              onDateClick={onDateClick}
            />
          </animated.div>
        ))}
      </div>

      <div className={clsx(classes.controls, classes.fixedElement)}>
        <ButtonBase onClick={handlePrev}>
          <ChevronLeftIcon className={classes.chevron} />
        </ButtonBase>
        <ButtonBase onClick={handleNext}>
          <ChevronRightIcon className={classes.chevron} />
        </ButtonBase>
      </div>

      <div className={clsx(classes.weekdays, classes.fixedElement)}>
        <Weekdays showWeekends={showWeekends} />
        <Weekdays showWeekends={showWeekends} />
      </div>
    </div>
  )
}

export default Picker
