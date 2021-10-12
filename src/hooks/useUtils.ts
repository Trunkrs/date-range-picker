import React from 'react'
import { IUtils } from '@date-io/core/IUtils'
import { DateRangePickerAdapterContext } from '../providers/DateRangePickerProvider'

export type DatePickersAdapter<TDate = unknown> = IUtils<TDate>

const checkUtils = (utils: DatePickersAdapter) => {
  if (!utils) {
    throw new Error(
      'Cannot find utils in context. To fix this wrap your component in DateRangeProvider'
    )
  }
}

export const useUtils = <T = unknown>() => {
  const utils = React.createContext(
    DateRangePickerAdapterContext
  ) as unknown as DatePickersAdapter

  checkUtils(utils)

  return utils
}

export default useUtils
