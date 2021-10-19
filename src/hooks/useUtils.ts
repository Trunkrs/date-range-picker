import React from 'react'
import { IUtils } from '@date-io/core/IUtils'
import { DateRangePickerAdapterContext } from '../providers/DateRangePickerProvider'

export type DatePickersAdapter<TDate = Date> = IUtils<TDate>

export const useUtils = (): DatePickersAdapter => {
  const utils = React.useContext(DateRangePickerAdapterContext)

  if (!utils) {
    throw new Error(
      'Cannot find utils in context. To fix this wrap your component in DateRangeProvider'
    )
  }

  return utils
}

export default useUtils
