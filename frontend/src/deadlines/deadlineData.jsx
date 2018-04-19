import React from 'react';
import Grid from '../common/layout/grid';

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
          </tr>
      </thead>
    {makeRows()}
  </table>
</Grid>
  )
}
