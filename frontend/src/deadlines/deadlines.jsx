import React, { Component } from 'react';
import axios from 'axios';

import DeadlineHeader from '../deliveries/dashboardHeader';
import Row from '../common/layout/row';
import DeadlineData from './deadlineData';
import TaxForm from '../deliveries/dashboardForm';



const URL = 'http://localhost:3000/tax/';


export default class Deadline extends Component {
    constructor(props) {
        super(props)
        this.state = {cidade: '', tax: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.getTax();
    }

    handleChange(e) {
      this.setState({ cidade: e.target.value })
  
    }
    handleSearch() {
    this.getTax(this.state.cidade)
  }

    getTax(cidade = '') {
      if(cidade == '') {
        search = `${URL}`
        
      } else {
        search = `${URL}/${cidade}`
      }
      axios.get(`${search}`)
            .then(resp => this.setState({...this.state,tax: resp.data }))
    }
        render() {
            return (
                <section className='content'>
                  <DeadlineHeader name='Dashboard' small=' Prazos' />
                  <TaxForm placeholder='Busca cidade destino' handleChange={this.handleChange} nota={this.state.tax} handleSearch={this.handleSearch}/>
                  <DeadlineData tax={this.state.tax} />
                </section>
            )
        }
}
