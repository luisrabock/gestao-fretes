import React, { Component } from 'react';
import axios from 'axios';
import Row from '../common/layout/row';
import TaxTable from './texTable';
import TaxForm from '../deliveries/dashboardForm';
import TaxHeader from '../deliveries/dashboardHeader';

class Tax extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section div className='content'>
        <TaxHeader name='Dashboard' small=' taxas' />
        <TaxForm />
        <TaxTable />
      </section>

    )
  }
}

export default Tax;
