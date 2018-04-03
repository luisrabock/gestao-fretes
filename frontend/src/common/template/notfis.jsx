import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class InputFile extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Upload de arquivo NOTFIS'/>
                <Content />
            </div>
        )
    }
}



export default InputFile;