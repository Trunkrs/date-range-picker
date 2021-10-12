import React from 'react'

import { createShallow } from '@material-ui/core/test-utils'

import Calendar, { CalendarProps } from '.'
import Day from '../Day'
import Weekdays from '../Weekdays'

const createProps = (merge: Partial<CalendarProps> = {}): CalendarProps =>
  ({
    month: 7,
    year: 2020,
    onDateClick: jest.fn(),
    ...merge,
  } as CalendarProps)

describe('<Calendar />', () => {
  const shallow = createShallow()

  it('should render all the days in a month', () => {
    const wrapper = shallow(<Calendar {...createProps()} />)
    const clickableDays = wrapper
      .find(Day)
      .filterWhere((day) => !!day.prop('onClick'))

    clickableDays.forEach((day, index) => {
      expect(day.prop('children')).toBe(index + 1)
    })
  })

  it('should render the outside days from prev month', () => {
    const wrapper = shallow(
      <Calendar {...createProps({ showOutsideDays: true })} />,
    )
    const prevDays = wrapper
      .find(Day)
      .filterWhere((day) => day.prop('outsideDayType') === 'prev')

    const base = 26
    prevDays.forEach((day, index) => {
      expect(day.prop('children')).toBe(base + index)
    })
  })

  it('should render the outside days from next month', () => {
    const wrapper = shallow(
      <Calendar {...createProps({ showOutsideDays: true })} />,
    )
    const nextDays = wrapper
      .find(Day)
      .filterWhere((day) => day.prop('outsideDayType') === 'next')

    nextDays.forEach((day, index) => {
      expect(day.prop('children')).toBe(index + 1)
    })
  })

  it('should show the weekday names', () => {
    const wrapper = shallow(
      <Calendar
        {...createProps({
          showOutsideDays: true,
          hideWeekdayNames: false,
          showWeekends: true,
        })}
      />,
    )
    expect(wrapper.find(Weekdays).exists()).toBeTruthy()
  })

  it('should hide the weekday names', () => {
    const wrapper = shallow(
      <Calendar
        {...createProps({
          showOutsideDays: true,
          hideWeekdayNames: true,
          showWeekends: false,
        })}
      />,
    )
    expect(wrapper.find(Weekdays).exists()).toBeFalsy()
  })
})
