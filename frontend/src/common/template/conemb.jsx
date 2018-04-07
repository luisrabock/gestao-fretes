import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Conemb extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Upload de arquivo CONEMB'/>
                <br />
                <Content />
            </div>
        )
    }
}



export default Conemb;