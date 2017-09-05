import styled, {css} from 'styled-components';
import { Flex, Box } from '../styled-grid';
import hoc from '../Shared/hoc'
import theme from '../theme.js';
import Container from '../Shared/Container.js';

const Root = hoc(Box).extend`
  font-family: inherit;

  ${props => props.bg && css`
    background-color: ${theme.colors[props.color]};
  `}

  ${props => props.border && css`
    border-top: 1px solid ${theme.colors.text10};
  `}
`;

Root.Section = Root.withComponent('section')

const Block = (props) => (
  <Root.Section
    bg={props.bg}
    border={props.border}
    pt={props.pt || [ 4, 4, 5, 5, 6 ]}
    pb={props.pb || [ 4, 4, 5, 5, 6 ]}
    style={props.style}
    id={props.id}
  >
    <Container
      mw={props.mw}
      textCenter={props.textCenter}
    >
      {props.children}
    </Container>
  </Root.Section>
);

export default Block;