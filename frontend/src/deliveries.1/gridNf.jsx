import React, { Component } from 'react';
import axios from 'axios';
import DashboardHeader from '../deliveries/dashboardHeader';
import GridData from './gridData';




const URL = 'http://localhost:3000/data/';
const URL_NOTA = 'http://localhost:3000/data/nota/';

export default class Dashboard1 extends Component {
    constructor(props) {
        super(props)
        this.state = {list: [] };
    }
    render() {
        return (
            <section className='content'>
                <DashboardHeader name='Dashboard' small=' Notas'></DashboardHeader>
                <GridData />
            </section>
        )
    }
}
