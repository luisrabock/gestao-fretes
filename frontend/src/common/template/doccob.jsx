import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Doccob extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Upload de arquivo Doccob'/>
                <Content />
            </div>
        )
    }
}



export default Doccob;