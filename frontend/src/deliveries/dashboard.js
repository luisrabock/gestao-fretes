import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from './dashboardHeader';
import DashboardForm from './dashboardForm';
import DashboardData from './dashboardData';



const URL = 'http://localhost:3000/data/';
const URL_NOTA = 'http://localhost:3000/data/nota/';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { nota: '', list: [] };
        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
        this.refresh();
    }

  refresh(nota = '') {
    console.log('entra')
    let search = ''
    if(nota === '') {
      search = `${URL}\data`
      
    } else {
      search = `${URL_NOTA}${nota}`
    }
    console.log(search)
    axios.get(`${search}`)
          .then(resp => this.setState({...this.state, nota: '', list: resp.data}))
  }


  markAsDone(nota) {
    var payload = [
      {"propName": "entrega", "value": "true"}
    ]
    axios.patch(`${URL}${nota._id}`, { payload})
          .then(resp => this.refresh())
  }

  handleSearch() {
    this.refresh(this.state.nota)
  }

  handleClear() {
    this.refresh()
  }

  handleChange(e) {
    this.setState({ nota: e.target.value })
    console.log(nota)
  }
        render() {
            return (
                <section className='content'>
                    <DashboardHeader name='Dashboard' small=' Entregas'></DashboardHeader>
                    <DashboardForm nota={this.state.nota}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    />
                    <div className='row'>
                    <DashboardData list={this.state.list} handleChange={this.handleChange} nota={this.state.nota}
                    markAsDone={this.markAsDone}
                    />
                    </div>
                </section>
            )
        }
}
