import React, { Component } from 'react';
import axios from 'axios';
import DashboardHeader from '../deliveries/dashboardHeader';
import GridData from './gridData';
import Row from '../common/layout/row';




const URL = 'http://localhost:3000/data/';

export default class Dashboard1 extends Component {
    constructor(props) {
        super(props)
        this.state = {notes: [] };
        this.markAsPending = this.markAsPending.bind(this);
        this.getNotas();
    }

    markAsPending(nota) {
      console.log('entra200')
      var payload = [
        {"propName": "entrega", "value": "false"}
      ]
      axios.patch(`${URL}${nota._id}`, { payload})
            .then(resp => this.getNotas())
    }
  

    getNotas() {
      axios.get(`${URL}`)
            .then(resp => this.setState({...this.state,notes: resp.data }))
    }
    render() {
        return (
            <section className='content'>
                <DashboardHeader name='Dashboard' small=' Notas'></DashboardHeader>
                <Row>
                <GridData notes={this.state.notes} markAsPending={this.markAsPending} />
                </Row>
            </section>
        )
    }
}
