import React from 'react';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton'

export default props => {
  const makeRows = () => {
    const tax = props.tax || []
    return tax.map(doc => (
      <tbody key={doc._id}>
        <tr className='text-center'>
            <td >{doc.estadoOrig}</td>
            <td>{doc.cidadeOrig}</td>
            <td>{doc.estadoDest}</td>
            <td >{doc.cidadeDest}</td>
            <td >{doc.transp}</td>
            <td ><span className='tag label label-primary'>{doc.previsao}</span></td>
            <td><span className='teste'><IconButton style='warning' icon='undo'
            onClick={() => props.openModal()}>
            </IconButton></span></td>
        </tr>
      </tbody>
      
    ))
}

  return (

  <Grid cols='8 8 8'>
  <table className='table table-bordered table-hover table-striped'>
      <thead>
          <tr className='text-center'>
              <th>Estado origem</th>
              <th>Cidade origem</th>
              <th>Estado destino</th>
              <th>Cidade destino</th>
              <th>Transportadora</th>
              <th>Prazo</th>
              <th>Atualizar</th>
          </tr>
      </thead>
    {makeRows()}
  </table>
</Grid>
  )
}
