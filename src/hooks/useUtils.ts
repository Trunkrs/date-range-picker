import React from 'react'
import { IUtils } from '@date-io/core/IUtils'
import { DateRangePickerAdapterContext } from '../providers/DateRangePickerProvider'

export type DatePickersAdapter<TDate = Date> = IUtils<TDate>

export const useUtils = () => {
  const utils = React.useContext(DateRangePickerAdapterContext)

  return utils
}

export default useUtils
