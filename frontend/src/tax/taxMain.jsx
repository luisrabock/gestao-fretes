import React, { Component } from 'react';
import axios from 'axios';
import Row from '../common/layout/row';
import TaxTable from './texTable';
import TaxForm from '../deliveries/dashboardForm';
import TaxHeader from '../deliveries/dashboardHeader';
import Modal from 'react-awesome-modal';

class Tax extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible : false
    }
    this.openModal = this.openModal.bind(this);
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
      <section div className='content'>
        <TaxHeader name='Dashboard' small=' taxas' />
        <TaxForm placeholder='Busca por transportadora'/>
        <TaxTable openModal={this.openModal}/>
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

export default Tax;
