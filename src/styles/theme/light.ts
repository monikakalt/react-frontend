import { darken } from 'polished'
import { Theme } from '../../utils/styled'
import brandColors from '../colors/brandColors'

const lightTheme: Theme = {
  colors: {
    background: 'white',
    body: brandColors.gray75,
    headings: brandColors.black,
    black: brandColors.black,
    white: brandColors.white,
    borders: darken(0.05, brandColors.gray5),
    tableOdd: darken(0.025, brandColors.gray5),
    brand: brandColors.red,
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  },
  fonts: {
    headings:
      // eslint-disable-next-line max-len
      'Avenir, Arial, sans-serif',
    body:
      // eslint-disable-next-line max-len
      'Avenir, Arial, sans-serif',
    monospace: 'Avenir, Courier New, monospace, monospace'
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem'
  },
  containerPadding: '1.5rem',
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  widths: {
    md: '720px',
    lg: '960px',
    xl: '1140px'
  }
}

export default lightTheme
