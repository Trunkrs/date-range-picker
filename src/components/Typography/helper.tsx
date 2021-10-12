export interface TrunkrsVariants {
  header: 'h1'
  headerRegular: 'h2'
  textBold: 'body2'
  text: 'body1'
  link: 'body1'
  placeholder: 'body1'
  phoneNumber: 'body1'
  button: 'button'
  badge: 'caption'
  textRegular: 'body2'
  inputLabel: 'body2'
  tableHeader: 'overline'
  packageText: 'caption'
}

export type VariantProps =
  | 'header'
  | 'headerRegular'
  | 'textBold'
  | 'text'
  | 'button'
  | 'placeholder'
  | 'link'
  | 'phoneNumber'
  | 'tableHeader'
  | 'badge'
  | 'inputLabel'
  | 'packageText'

export const VariantMapper: TrunkrsVariants = {
  header: 'h1',
  headerRegular: 'h2',
  textBold: 'body2',
  text: 'body1',
  link: 'body1',
  placeholder: 'body1',
  phoneNumber: 'body1',
  button: 'button',
  badge: 'caption',
  textRegular: 'body2',
  inputLabel: 'body2',
  tableHeader: 'overline',
  packageText: 'caption',
}
