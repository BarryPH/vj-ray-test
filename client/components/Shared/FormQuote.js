import React from 'react'
import Formsy, { HOC } from 'formsy-react';

import gql from 'graphql-tag'
import apollo from '../../lib/apollo.js'

import insertGoogleTags from '../../lib/insert-google-tags.js';

import theme from '../theme'
import FormContainer from '../Shared/FormContainer'
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
} from '../Shared/Form';

class FormQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/xgaewyjx', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model),
    });

    insertGoogleTags(document, `
      /* <![CDATA[ */
      var google_conversion_id = 1049342091;
      var google_conversion_language = "en";
      var google_conversion_format = "3";
      var google_conversion_color = "ffffff";
      var google_conversion_label = "sKdhCN_pv3UQi-Gu9AM";
      var google_remarketing_only = false;
      /* ]]> */
    `);
  }

  render() {
    return (
      <FormContainer brand submit={this.submit.bind(this)}>
        <FormGroup>
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

          <Input
            placeholder='Your name'
            name='name'
            required
          />
          <Input
            placeholder='Your email'
            name='email'
            validations={{
              isEmail: true
            }}
            validationErrors={{
              isEmail: 'Not a valid email'
            }}
            required
          />
          <Input
            placeholder='Your phone number'
            name='phoneNumber'
            validations='isExisty'
            required
          />
        </FormGroup>

        <FormGroup>
          <FormGroupHeadline>Strata details (required)</FormGroupHeadline>

          <Input
            placeholder='Your strata address'
            name='address'
            required
          />
          <Input
            placeholder='Your postcode'
            name='postcode'
            required
          />

          <Select
            name='unitsInScheme'
            defaultValue=''
            required
          >
            <option value='' selected hidden>Total units in your strata</option>
            <option value="1-10">up to 10</option>
            <option value="10-20">10-20</option>
            <option value="20-40">20-40</option>
            <option value="40+">40+</option>
          </Select>

          <Textarea
            placeholder='What&#39;s the problem we can help you with?'
            name='comments'
            rows='7'
            required
          />

        </FormGroup>

        {/* Formspree filters */}
        <input type="text" name="_gotcha" style={{display: "none" }} />
        <input type="hidden" name="_subject" value="Strata website new business submission" />
      </FormContainer>
    );
  }
}

export default FormQuote;