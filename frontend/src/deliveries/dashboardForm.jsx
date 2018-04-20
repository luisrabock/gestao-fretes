import React from 'react';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';
import Row from '../common/layout/row';
//precisa refatorar esse componente para pasta template, sera um componente generico
export default props => {
      const keyHandler = (e) => {
        if (e.key === 'Enter') {
          props.handleSearch()
        } else if (e.key === 'Escape') {
          props.handleClear()
        }
      }
        return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='nota' className='form-control'
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.nota}
                    ></input>
            </Grid>
            <Grid cols='12 3 2'>
            <Row>
                <IconButton style='primary' icon='search'
                onClick={props.handleSearch}
                ></IconButton>
                <IconButton style='default' icon='close'
                onClick={props.handleClear}
                ></IconButton>
            </Row>
            </Grid>
        </div>
    )
} 
