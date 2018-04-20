import React, { Component } from 'react';
import axios from 'axios';

import DeadlineHeader from '../deliveries/dashboardHeader';
import Row from '../common/layout/row';
import DeadlineData from './deadlineData';
import TaxForm from '../deliveries/dashboardForm';
import Modal from 'react-awesome-modal';



const URL = 'http://localhost:3000/tax/';


export default class Deadline extends Component {
    constructor(props) {
        super(props)
        this.state = {cidade: '', tax: [], visible: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.openModal = this.openModal.bind(this);
        this.getTax();
    }

    handleChange(e) {
      this.setState({ cidade: e.target.value.toUpperCase() })
  
    }
    handleSearch() {
    this.getTax(this.state.cidade)
  }

    getTax(cidade = '') {
      let search = '';
      if(cidade == '') {
        search = `${URL}`
      } else {
        search = `${URL}${cidade}`
      }
      axios.get(`${search}`)
            .then(resp => this.setState({...this.state,tax: resp.data }))
    }
    handleClear() {
      this.getTax()
    }

    openModal() {
      this.setState({
          visible : true
      });
  }
  
  closeModal() {
    this.setState({
        visible : false
    });
  }
        render() {
            return (
                <section className='content'>
                  <DeadlineHeader name='Dashboard' small=' Prazos' />
                  <TaxForm placeholder='Busca cidade destino' handleChange={this.handleChange} handleClear={this.handleClear} nota={this.state.cidade} handleSearch={this.handleSearch}/>
                  <DeadlineData tax={this.state.tax} openModal={this.openModal} />
                  <Modal 
                    visible={this.state.visible}
                    width="600"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
                </section>
            )
        }
}
