import React, { Component } from 'react';
import Row from '../layout/row'
import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Conemb extends Component {
    render() {
        return (
            <div>
                <section>
                <ContentHeader title='Upload de arquivo CONEMB'/>
                <br />
                <Content />
                </section>
            </div>
        )
    }
}



export default Conemb;