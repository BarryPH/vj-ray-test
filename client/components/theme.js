import { lighten } from 'polished'

// text70: ${lighten(0.2, '#585870')},
// wrappers: [700, 960, 1140]

// color, fontSize, space & width are for `styled-system` & `grid-styled`.

export default {
  breakpoints: [32, 48, 64, 96],
  colors: {
    text: '#585870',
    text70: '#8b8a9b',
    brand: '#D3145A',
    beige: '#F7F2EC',
    success: '#42db41',
    error: '#D91E1F',
  },
  containers: {
    sm: '700px',
    rg: '960px',
    lg: '1140px',
  },
  fonts: {
    displayLight: 'GT-Eesti-Pro-Display-Light',
    displayMedium: 'GT-Eesti-Pro-Display-Medium',
    textBook: 'GT-Eesti-Pro-Text-Book',
  },
  fontSizes: [12, 16, 18, 21, 24, 29, 40, 58],
  letterSpacing: {
    tight: '-0.02em',
    touch: '0.02em',
    meta: '0.05em',
  },
  lineHeight: {
    display: '0.95',
    headline: '1.05',
    subheadline: '1.333333',
    text: '1.5',
  },
  space: [0, 8, 16, 24, 48, 96, 192],

}