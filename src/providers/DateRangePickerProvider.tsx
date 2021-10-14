import React from 'react'
import { DatePickersAdapter } from '../hooks/useUtils'

export const DateRangePickerAdapterContext =
  React.createContext<DatePickersAdapter | null>(null)

export interface DateRangePickerProviderProps {
  children: React.ReactNode
  dateAdapter: new (...args: any) => DatePickersAdapter
}

export const DateRangePickerProvider: React.FC<DateRangePickerProviderProps> =
  ({ children, dateAdapter: Utils }) => {
    const utils = React.useMemo(() => new Utils(), [Utils])

    return (
      <DateRangePickerAdapterContext.Provider value={utils}>
        {children}
      </DateRangePickerAdapterContext.Provider>
    )
  }

export default DateRangePickerProvider
