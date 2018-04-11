import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from './dashboardHeader';
import DashboardForm from './dashboardForm';


const URL = 'http://localhost:3020/api/gestaoFretes'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }


        this.refresh()
    }
    refresh() {
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => console.log(resp)  )
    }
        render() {
            return (
                <div>
                    <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                    <TodoForm 
                    list={this.state.list}
                    />
                </div>
            )
        }
}