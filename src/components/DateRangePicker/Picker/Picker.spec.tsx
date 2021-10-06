import React from 'react'

import { Globals } from 'react-spring'
import { createShallow } from '@material-ui/core/test-utils'

import Picker, { PickerProps } from '.'
import Calendar from '../Calendar'

jest.unmock('react-spring')
Globals.assign({
  skipAnimation: true,
})

const createProps = (merge: Partial<PickerProps> = {}): PickerProps =>
  ({
    initialDate: new Date(2020, 9),
    onDateClick: jest.fn(),
    ...merge,
  } as PickerProps)

describe('<Picker />', () => {
  const shallow = createShallow()

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Picker {...createProps({ showWeekends: false })} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should navigate to next calendar(month) on mouse wheel', (done) => {
    const wrapper = shallow(<Picker {...createProps()} />)
    wrapper.simulate('wheel', { deltaY: 1 })
    wrapper.update()

    setTimeout(() => {
      expect(wrapper.find(Calendar).at(1).prop('month')).toBe(10)
      done()
    }, 100)
  })

  it('should navigate to previous calendar(month) on mouse wheel', (done) => {
    const wrapper = shallow(<Picker {...createProps()} />)
    wrapper.simulate('wheel', { deltaY: -1 })
    wrapper.update()

    setTimeout(() => {
      expect(wrapper.find(Calendar).at(1).prop('month')).toBe(8)
      done()
    }, 100)
  })
})
