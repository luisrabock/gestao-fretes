import React from 'react';

export default props => (
    <button type="button" className={`btn btn-${props.classe} btn-xs botao`}><i className={'fa fa-'+ props.icone}></i></button>
)