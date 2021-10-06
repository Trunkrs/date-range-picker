import { DateRangeContext } from './DateRange'

export enum DATE_RANGE_ACTIONS {
  CHANGE_DATE_START,
  CHANGE_DATE_END,
  CHANGE_DATE_RANGE,
  ENABLE_PRESET_MODE,
  DISABLE_PRESET_MODE,
}

export type DateRangePickerAction =
  | {
      type: DATE_RANGE_ACTIONS.CHANGE_DATE_START
      payload: Date
    }
  | {
      type: DATE_RANGE_ACTIONS.CHANGE_DATE_END
      payload: Date
    }
  | {
      type: DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE
      payload: {
        dateRange: DateRangeContext
        presetMode: boolean
      }
    }

export default DATE_RANGE_ACTIONS
