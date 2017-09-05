import React from 'react';
import PropTypes from 'prop-types';
import Formsy, { HOC } from 'formsy-react';
import styled, { css } from 'styled-components'

import { Box } from '../styled-grid'
import theme from '../theme'
import LaddaButton from '../Shared/LaddaButton.js'
import { Text } from '../Shared/Text'
import {
  Form,
  SuccessMessage,
} from '../Shared/Form';


const Root = styled(Box)`
  background-color: white;
  border: 1px solid ${theme.colors.brandAlt};

  ${props => props.brand && css`
    border: 1px solid ${theme.colors.brand};
  `}
`;

// `

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      messageSent: false,
      canSubmit: false,
      loading: false,
    };
  }

  async handleSubmit(model) {
    this.setState({
      loading: true,
    });

    await this.props.submit(model);

    this.setState({
      messageSent: true,
      loading: false,
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render(props) {
    return (
      <Root brand={this.props.brand}>
        <Box p={[ 2, 3 ]}>
          <Form
            onValidSubmit={this.handleSubmit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            method={this.props.method}
            action={this.props.action}
          >
            {this.props.children}

            <Text align='right'>
              { this.state.messageSent &&
                <SuccessMessage>Thanks! We'll contact you within 48 hours.</SuccessMessage>
              }
              <LaddaButton primary loading={this.state.loading} type='submit' disabled={!this.state.canSubmit}>
                { this.state.messageSent ? 'Sent' : 'Send'}
              </LaddaButton>
            </Text>
          </Form>
        </Box>
      </Root>
    );
  }
}

FormContainer.propTypes = {
  brand: PropTypes.bool,
  children: PropTypes.element.isRequired,
  submit: PropTypes.func.isRequired,
};

export default FormContainer;