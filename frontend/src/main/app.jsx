import React, {Component} from 'react';

import Header from '../common/template/header';
import '../common/template/dependencias';
import Footer from '../common/template/footer';
import Sidebar from '../common/template/sidebar';


export default class App extends Component {

    render() {

        return (
            <div className='wrapper'>
                <Header />
                <Footer />
                <Sidebar />
            </div>
        );
    }
}
