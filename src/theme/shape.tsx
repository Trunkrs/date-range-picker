import { ShapeOptions } from '@material-ui/core/styles/shape'

declare module '@material-ui/core/styles/shape' {
  interface Shape {
    radius4: 4
    radius8: 8
    radius16: 16
  }
}

const shape: ShapeOptions = {
  radius4: 4,
  radius8: 8,
  radius16: 16,
  borderRadius: 8,
}

export default shape
