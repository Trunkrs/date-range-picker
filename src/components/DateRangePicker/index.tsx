import React, { useCallback, useEffect, useMemo, useReducer } from 'react'

import useUtils from '../../hooks/useUtils'
import Picker from './Picker'
import DateRange, { DateRangeContext } from './DateRange'
import reducer, { initialState } from './reducer'
import DATE_RANGE_ACTIONS from './actions'
import useRefValue from '../../hooks/useRefValue'

export interface DateRangePickerProps {
  initialDate: Date
  presetDates?: DateRangeContext
  onUpdate?: (date1: Date | null, date2: Date | null) => void
  showWeekends?: boolean
  showOutsideDays?: boolean
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  initialDate,
  showWeekends = false,
  showOutsideDays = false,
  onUpdate,
  presetDates
}) => {
  const { isBefore, isSameDay, getDiff, isWithinRange } = useUtils()

  const [state, dispatch] = useReducer(reducer, initialState)
  const prevPreset = useRefValue(presetDates)

  const handleDateClick = useCallback(
    (date: Date) => {
      const { dateStart, dateEnd } = state

      //  if date is sameday with dateStart or dateEnd, we reset dateStart
      if (
        dateStart &&
        dateEnd &&
        (isSameDay(date, dateStart) || isSameDay(date, dateEnd))
      ) {
        dispatch({
          type: DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE,
          payload: {
            presetMode: false,
            dateRange: {
              dateStart: date,
              dateEnd: null
            }
          }
        })
        return
      }

      if (!dateStart) {
        dispatch({
          type: DATE_RANGE_ACTIONS.CHANGE_DATE_START,
          payload: date
        })
        return
      }

      // if user clicked before the startDate and dateEnd is not available
      if (isBefore(date, dateStart) && !dateEnd) {
        dispatch({
          type: DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE,
          payload: {
            presetMode: false,
            dateRange: {
              dateStart: date,
              dateEnd: dateStart
            }
          }
        })
        return
      }

      // if user clicked before the startDate and dateEnd is available
      if (isBefore(date, dateStart) && dateEnd) {
        if (getDiff(dateStart, date, 'days') < 14) {
          dispatch({
            type: DATE_RANGE_ACTIONS.CHANGE_DATE_START,
            payload: date
          })
        } else {
          dispatch({
            type: DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE,
            payload: {
              presetMode: false,
              dateRange: {
                dateStart: date,
                dateEnd: null
              }
            }
          })
        }
        return
      }

      // if user clicked within the existing dateRange
      if (
        dateEnd &&
        isWithinRange(date, [dateStart, dateEnd]) &&
        getDiff(date, dateStart, 'days') < 10
      ) {
        dispatch({
          type: DATE_RANGE_ACTIONS.CHANGE_DATE_START,
          payload: date
        })
        return
      }

      // we are only setting the dateEnd
      dispatch({
        type: DATE_RANGE_ACTIONS.CHANGE_DATE_END,
        payload: date
      })
    },
    [state]
  )

  // update parent
  useEffect(() => {
    const { dateStart, dateEnd, presetMode } = state
    if (!onUpdate || presetMode) return

    onUpdate(dateStart, dateEnd)
  }, [state, onUpdate])

  // get dateEnd, when using preset
  const dateEndPreset = useMemo(() => {
    if (!presetDates || !presetDates.dateStart) return null

    const endDate = presetDates.dateEnd
      ? new Date(presetDates.dateEnd)
      : presetDates.dateStart

    return new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    )
  }, [presetDates])

  // determine if we are using preset
  useEffect(() => {
    if (prevPreset !== presetDates) {
      dispatch({
        type: DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE,
        payload: {
          presetMode: true,
          dateRange: {
            dateStart: presetDates?.dateStart,
            dateEnd: dateEndPreset
          }
        }
      })
    }
  }, [prevPreset, presetDates, dateEndPreset])

  return (
    <DateRange.Provider
      value={{ dateStart: state.dateStart, dateEnd: state.dateEnd }}
    >
      <Picker
        initialDate={initialDate}
        showOutsideDays={showOutsideDays}
        showWeekends={showWeekends}
        onDateClick={handleDateClick}
      />
    </DateRange.Provider>
  )
}

export default DateRangePicker
