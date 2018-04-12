import React from 'react';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';
import Row from '../common/layout/row';

export default props => (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Busca por NF'
                    onChange={props.handleChange}
                    value={props.nota}
                    ></input>
            </Grid>
            <Grid cols='12 3 2'>
            <Row>
                <IconButton style='primary' icon='search'></IconButton>
                <IconButton style='default' icon='close'></IconButton>
            </Row>
            </Grid>
        </div>
        
    )
