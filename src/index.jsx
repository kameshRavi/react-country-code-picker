import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CountryCodeJSON from './country-data.json';
import SearchIcon from './icons.jsx';

export default class CountryCode extends PureComponent {
  static propTypes = {
    countryCode: PropTypes.string,
    onChangeOfCountryCode: PropTypes.func
  }

  static defaultProps = {
    countryCode: undefined,
    onChangeOfCountryCode: undefined
  }

  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  onSelect = (countryCode) => {
    if (countryCode) {
      const { searchValue } = this.state;
      if (searchValue) {
        this.setState({
          searchValue: ''
        });
      }
      const { onChangeOfCountryCode } = this.props;
      if (typeof onChangeOfCountryCode === 'function') {
        onChangeOfCountryCode(countryCode);
      }
    }
  }

  onSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchValue });
  }

  render() {
    const { searchValue } = this.state;
    let { countryCode } = this.props;
    if (countryCode && !countryCode.startsWith('+')) {
      countryCode = `+${countryCode}`;
    }
    let countryCodeList = CountryCodeJSON;
    if (searchValue) {
      countryCodeList = countryCodeList.filter(({ name, dial_code }) => (name.toLowerCase().startsWith(searchValue) || dial_code.includes(searchValue)));
    }
    return (
      <div className="dropdown-field  ft-left intl-tel-input">
        <div className="dropdown-button">
          <button type="button" data-toggle="dropdown ex" className="button-default selected">
            {countryCode}
            <i className="drop-arrow" />
          </button>
        </div>
        <div className="dropdownmenu bottom arrow-left">
          <div className="search-container">
            <div className="ignore-click">
              <SearchIcon />
              <input type="text" value={searchValue} name="Search" placeholder="Search Country" onChange={this.onSearch} />
            </div>
          </div>
          <ul className="country-list">
            {countryCodeList.map(eachList => (
              <li key={Math.random()} className="country" onClick={() => { this.onSelect(eachList.dial_code); }}>
                <code className="brand-bg" />
                <div className="flag-box"><div className={`iti-flag ${eachList.code.toLowerCase()}`} /></div>
                <div className="country-name">{eachList.name}</div>
                <div className="dial-code">{eachList.dial_code}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
