import React from 'react'
import { DateIOFormats } from '@date-io/core/IUtils'
import { DatePickersAdapter } from '../hooks/useUtils'

export const DateRangePickerAdapterContext =
  React.createContext<DatePickersAdapter | null>(null)

export interface DateRangePickerProviderProps {
  children: React.ReactNode
  dateAdapter: new (...args: any) => DatePickersAdapter
  dateFormats?: Partial<DateIOFormats>
  dateLibInstance?: any
  locale?: any
}

export const DateRangePickerProvider: React.FC<DateRangePickerProviderProps> =
  ({ children, dateAdapter: Utils, dateFormats, dateLibInstance, locale }) => {
    const utils = React.useMemo(
      () =>
        new Utils({ locale, formats: dateFormats, instance: dateLibInstance }),
      []
    )

    return (
      <DateRangePickerAdapterContext.Provider value={utils}>
        {children}
      </DateRangePickerAdapterContext.Provider>
    )
  }

export default DateRangePickerProvider
