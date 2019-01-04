import React from 'react';
import { render } from 'react-dom';

import CountryCodePicker from '../index.js';

render(
  <div>
    <h2>React Country Code Picker</h2>
    <CountryCodePicker countryCode="+1" />
  </div>,
  document.getElementById('root')
);
