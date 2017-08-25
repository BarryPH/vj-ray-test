import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'
import { LargeText, LineBreak } from '../styled-elements/Text'
import { Display, Headline, MobileSubheadline } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


// #cbd7fc,
const StyledHeroBox = styled(HeroBox)`
  background-color: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );

  background-image: initial;
  background-color: #ebe5df;

  @media (max-width: 512px) {
    &:after {
      background-color: rgba(0, 153, 209, 0.96);
      background-color: rgba(64, 64, 112, 0.1);
      background-color: rgba(0, 0, 0, 0.25);
      background-color: rgba(121, 122, 154, 0.5);
      background-color: rgba(42, 43, 73, 0.5);
      background-color: initial;
      background-image:
        linear-gradient(
          to right,
          rgba(223, 212, 184, 0.5),
          rgba(223, 212, 184, 0.25) 70%
        );
    }
  }

`

const HeroWhat = props => (
  <StyledHeroBox>
    <CoverImage constrain what src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618862/hero-what-_i582ye.png' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <HeroTitleBox
          w={[ 6/12, 5/12, 4/10, 1/2 ]}
          mb={[ 3, 4 ]}
        >
          <MobileSubheadline color='brandAlt' children='Services' />
          <Display color='brand' mb={2}>
            What we do for you.
          </Display>
          <LargeText hideAtMobile>
            We’ll go further to help you <LineBreak>find peace of mind.</LineBreak>
          </LargeText>

        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroWhat