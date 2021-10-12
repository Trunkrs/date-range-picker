import React from 'react'

import { createMount } from '@material-ui/core/test-utils'
import { Typography } from '.'

describe('<TrunkrsTypograpgy />', () => {
  const shallow = createMount()

  it('should match snapshot', () => {
    const element = shallow(<Typography classes={{} as any} />)

    expect(element).toMatchSnapshot()
  })
})
