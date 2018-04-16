import React from 'react';
import Grid from '../common/layout/grid'

export default props => (
    <header className='page-header'>
        <h2>{props.name}<small>{props.small}</small></h2>
    </header>
);
