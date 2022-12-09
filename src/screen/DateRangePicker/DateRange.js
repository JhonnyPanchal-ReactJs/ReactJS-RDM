import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar   } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import {Row, Col, Form} from 'react-bootstrap';


function DateRange() {

  const nameMapper = {
    ar: 'Arabic',
    enUS: 'English (United States)',
    hi: 'Hindi',
    ja: 'Japanese',
  };

  const localeOptions = Object.keys(locales)
  .map(key => ({
    value: key,
    label: `${key} - ${nameMapper[key] || ''}`
  }))
  .filter(item => nameMapper[item.value]);

  const [locale, setLocale] = React.useState('ja');
  const [date, setDate] = useState(null);

  return (
    <>
      <Row>
        <Col md={4}>
          <Form.Select
            style={{ margin: '20px auto', display: 'block' }}
            onChange={e => setLocale(e.target.value)}
            value={locale} className="" >
            {localeOptions.map((option, i) => (
              <option value={option.value} key={i}>
                {option.label}
              </option>
            ))}
          </Form.Select>

          <Calendar style={{ display: 'block'}} onChange={item => setDate(item)}
            locale={locales[locale]} date={date} />
        </Col>
      </Row>
    </>
  )
}

export default DateRange