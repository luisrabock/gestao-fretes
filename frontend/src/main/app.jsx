import React, {Component} from 'react';

import '../common/template/custom.css'
import Header from '../common/template/header';
import '../common/template/dependencias';
import Footer from '../common/template/footer';
import Sidebar from '../common/template/sidebar';
import Routes from '../main/routes'

import '../common/layout/custom.css'


export default class App extends Component {

    render() {

        return (
            <div className='wrapper'>
                <Header/>
                <Sidebar/>
                <div className='content-wrapper' >
                    <Routes />
                </div>
                <Footer/>
            </div>
        );
    }
}
