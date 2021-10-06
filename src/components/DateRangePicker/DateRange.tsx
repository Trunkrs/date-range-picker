import { createContext } from 'react'

export interface DateRangeContext {
  dateStart?: Date | null
  dateEnd?: Date | null
}

export const DateRange = createContext<DateRangeContext>({
  dateStart: null,
  dateEnd: null,
})

export default DateRange
