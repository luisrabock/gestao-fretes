import React from 'react';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';

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
                <IconButton style='primary' icon='search'></IconButton>
            </Grid>
        </div>
    )
