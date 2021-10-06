import DATE_RANGE_ACTIONS, { DateRangePickerAction } from './actions'

export interface DateRangePickerState {
  dateStart: Date | null
  dateEnd: Date | null
  presetMode: boolean
}

export const initialState: DateRangePickerState = {
  dateStart: null,
  dateEnd: null,
  presetMode: false,
}

const reducer = (
  state: DateRangePickerState,
  action: DateRangePickerAction,
): DateRangePickerState => {
  switch (action.type) {
    case DATE_RANGE_ACTIONS.CHANGE_DATE_START:
      return {
        ...state,
        dateStart: action.payload,
        presetMode: false,
      }
    case DATE_RANGE_ACTIONS.CHANGE_DATE_END:
      return {
        ...state,
        dateEnd: action.payload,
        presetMode: false,
      }
    case DATE_RANGE_ACTIONS.CHANGE_DATE_RANGE:
      return {
        ...state,
        dateStart: action.payload.dateRange.dateStart || null,
        dateEnd: action.payload.dateRange.dateEnd || null,
        presetMode: action.payload.presetMode,
      }
    default:
      return state
  }
}

export default reducer
