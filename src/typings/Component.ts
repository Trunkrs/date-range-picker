import React from 'react'

export type Component<P = unknown> =
  | React.FunctionComponent<P>
  | React.ComponentClass<P>
  | string
