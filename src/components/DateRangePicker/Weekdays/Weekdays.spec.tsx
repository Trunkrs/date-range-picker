import React from 'react'

import { createShallow } from '@material-ui/core/test-utils'

import Weekdays, { WeekdaysProps } from '.'

const createProps = (merge: Partial<WeekdaysProps> = {}): WeekdaysProps =>
  ({
    ...merge,
  } as WeekdaysProps)

describe('<Weekdays />', () => {
  const shallow = createShallow()

  it('should match snapshot', () => {
    const wrapper = shallow(<Weekdays {...createProps()} />)

    expect(wrapper).toMatchSnapshot()
  })
})
