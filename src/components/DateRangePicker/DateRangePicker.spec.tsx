import React from 'react'

import { Globals } from 'react-spring'
import { createMount } from '@material-ui/core/test-utils'

import DateRangePicker, { DateRangePickerProps } from '.'
import Day from './Day'
import Calendar from './Calendar'

jest.unmock('react-spring')
Globals.assign({
  skipAnimation: true,
})

const createProps = (
  merge: Partial<DateRangePickerProps> = {},
): DateRangePickerProps =>
  ({
    showWeekends: true,
    showOutsideDays: true,
    initialDate: new Date(2020, 9),
    onUpdate: jest.fn(),
    ...merge,
  } as DateRangePickerProps)

describe('<DateRangePicker />', () => {
  const mount = createMount()

  it('should call onUpdate with correct params when a date is clicked', () => {
    const props = createProps()
    const wrapper = mount(<DateRangePicker {...props} />)

    const selected = wrapper.find(Calendar).at(1).find(Day).at(15)

    selected.find('button').simulate('click')
    wrapper.update()

    expect(props.onUpdate).toHaveBeenCalledWith(selected.prop('date'), null)
  })

  it('should set date2 on date click when date1 is already set', () => {
    const props = createProps()
    const wrapper = mount(<DateRangePicker {...props} />)

    const selected = wrapper.find(Calendar).at(1).find(Day).at(15)
    selected.find('button').simulate('click')
    wrapper.update()

    const newSelected = wrapper.find(Calendar).at(1).find(Day).at(20)
    newSelected.find('button').simulate('click')
    wrapper.update()

    expect(props.onUpdate).toHaveBeenCalledWith(
      selected.prop('date'),
      newSelected.prop('date'),
    )
  })
})
