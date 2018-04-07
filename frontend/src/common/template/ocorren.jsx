import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Ocorren extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Upload de arquivo OCORREN'/>
                <br />
                <Content />
            </div>
        )
    }
}



export default Ocorren;