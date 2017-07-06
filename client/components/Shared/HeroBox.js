import styled from 'styled-components'
import { Box } from '../styled-grid';
import theme from '../theme.js';

const HeroBox = styled(Box)`
  --Header-height: 121px;
  --Hero-height: 50vh;

  align-items: center;
  background-color: ${theme.colors.beige};
  height: calc(var(--Hero-height) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;
`

export default HeroBox