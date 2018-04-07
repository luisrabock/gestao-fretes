import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Prefat extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Upload de arquivo PREFAT'/>
                <br />
                <Content />
            </div>
        )
    }
}



export default Prefat;