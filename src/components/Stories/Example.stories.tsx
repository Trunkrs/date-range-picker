import React from 'react'
import { Meta, Story } from '@storybook/react'
import DateRangePicker, { DateRangePickerProps } from '../DateRangePicker'

const meta: Meta = {
  title: 'Base/DateRangePicker',
  component: DateRangePicker,
}

const Template: Story<DateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
)

export const SandBox = Template.bind({})
SandBox.args = {
  initialDate: new Date(),
  showOutsideDays: true,
  showWeekends: true,
} as DateRangePickerProps

export default meta
