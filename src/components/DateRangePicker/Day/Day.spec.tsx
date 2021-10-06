import React from 'react'

import { createShallow, createMount } from '@material-ui/core/test-utils'
import ButtonBase from '@material-ui/core/ButtonBase'

import Day, { DayProps } from '.'
import DateRange from '../DateRange'

const createProps = (merge: Partial<DayProps> = {}): DayProps =>
  ({
    children: new Date(2020, 9, 20, 16, 0, 0).getDate(),
    date: new Date(2020, 9, 20, 16, 0, 0),
    onClick: jest.fn(),
    ...merge,
  } as DayProps)

describe('<Day />', () => {
  const shallow = createShallow()
  const mount = createMount()

  it('should match snapshot', () => {
    const wrapper = shallow(<Day {...createProps()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call the onClick fn when day is clicked', () => {
    const props = createProps()
    const wrapper = mount(
      <DateRange.Provider
        value={{
          dateStart: new Date(2020, 9, 20, 0, 0, 0),
          dateEnd: new Date(2020, 9, 23, 0, 0, 0),
        }}
      >
        <Day {...props} />
      </DateRange.Provider>,
    )
    wrapper.find(ButtonBase).simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
})
