import React, { Component } from 'react';
import axios from 'axios';
import Row from '../common/layout/row';
import TaxTable from './texTable';
import TaxForm from '../deliveries/dashboardForm';
import TaxHeader from '../deliveries/dashboardHeader';
import Modal from 'react-awesome-modal';

const URL = 'http://localhost:3000/tax/';

class Tax extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      visible : false,
      tax: [],
      transportadora: ''
    }
    this.openModal = this.openModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
  }
  
openModal() {
  this.setState({
    visible : true
  });
}
handleSearch() {
  this.refresh(this.state.transportadora)
}

handleClear() {
  this.refresh()
}
closeModal() {
  this.setState({
      visible : false
  });
}

refresh(transportadora = '') {
  let search = ''
  if(transportadora === '') {
    search = `${URL}`
    
  } else {
    search = `${URL}transp/${transportadora}`
  }
  console.log(search)
  axios.get(`${search}`)
        .then(resp => this.setState({...this.state, transportadora: '', tax: resp.data}))
}

handleChange(e) {
  this.setState({ transportadora: e.target.value })

}
  render() {
    return (
      <section div className='content'>
        <TaxHeader name='Dashboard' small=' taxas' />
        <TaxForm nota={this.state.transportadora} 
        handleChange={this.handleChange}
        handleSearch={this.handleSearch}
        handleClear={this.handleClear}
        placeholder='Busca transportadora'
        
         />
        <TaxTable openModal={this.openModal} tax={this.state.tax}/>
          <Modal 
              visible={this.state.visible}
              width="600"
              height="500"
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}>
              <div>
                  <h1>Title</h1>
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
              </div>
          </Modal>
      </section>

    )
  }
}

export default Tax;
