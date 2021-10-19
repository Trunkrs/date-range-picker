import React from 'react'

import DateRangePicker, {
  DateRangePickerProvider,
  DateFnsAdapter
} from 'date-range-picker'

const App = () => {
  return (
    <DateRangePickerProvider dateAdapter={DateFnsAdapter}>
      <DateRangePicker initialDate={new Date()} showWeekends showOutsideDays />
    </DateRangePickerProvider>
  )
}

export default App
