import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from '../deliveries/dashboardHeader';
import DashboardForm from '../deliveries/dashboardForm';
import DashboardData from '../regions/regionsData';
import Row from '../common/layout/row';



const URL = 'http://localhost:3000/regions/';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { region: '', list: [] };
        this.markAsRemove = this.markAsRemove.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.refresh();
    }

  refresh(region = '') {
    let search = '';
    if(region === '') {
      search = `${URL}`
    } else {
      search = `${URL}${region}`
    }
    axios.get(`${search}`)
          .then(resp => this.setState({...this.state,region:'', list: resp.data}))
  }

  markAsRemove(regions) {
    axios.delete(`${URL}${regions._id}`)
          .then(resp => this.refresh())
  }

  handleSearch() {
    this.refresh(this.state.region)
  }

  handleClear() {
    this.refresh()
  }

  handleChange(e) {
    this.setState({ region: e.target.value })

  }
        render() {
            return (
                <section className='content'>
                    <DashboardHeader name='Dashboard' small=' Regiões'></DashboardHeader>
                    <DashboardForm nota={this.state.region}
                    placeholder='Busca por região' handleChange={this.handleChange}
                    handleSearch={this.handleSearch} handleClear={this.handleClear}/>
                    <Row>
                    <DashboardData list={this.state.list} markAsRemove={this.markAsRemove}/>
                    </Row>
                </section>
            )
        }
}
