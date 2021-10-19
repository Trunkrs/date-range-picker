import React from 'react'

import DateRangePicker, {
  DateRangePickerProps
} from './components/DateRangePicker'
import dateFnsAdapter from './adapters/date-fns'
import dateRangePickerProvider from './providers/DateRangePickerProvider'
import ThemeProvider from './theme/Provider'

export const DateFnsAdapter = dateFnsAdapter
export const DateRangePickerProvider = dateRangePickerProvider

export const WithMUI: React.FC<DateRangePickerProps> = (props) => {
  return (
    <ThemeProvider>
      <DateRangePicker {...props} />
    </ThemeProvider>
  )
}

export default WithMUI
