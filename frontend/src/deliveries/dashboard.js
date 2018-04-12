import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from './dashboardHeader';
import DashboardForm from './dashboardForm';
import DashboardData from './dashboardData';



const URL = 'http://localhost:3000/data';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { nota: '', list: [] };
        
        
        this.handleChange = this.handleChange.bind(this)
        this.refresh();
    }

    refresh() {
      axios.get(`${URL}`)
           .then(resp => this.setState({...this.state, list: resp.data}))

    }

    handleChange(e) {
      this.setState({ nota: e.target.value })
  }
        render() {
            return (
                <section className='content'>
                    <DashboardHeader name='Dashboard' small=' Entregas'></DashboardHeader>
                    <DashboardForm nota={this.state.nota}
                    handleChange={this.handleChange}/>
                    <div className='row'>
                    <DashboardData list={this.state.list} handleChange={this.handleChange} nota={this.state.nota}/>
                    </div>
                </section>
            )
        }
}
