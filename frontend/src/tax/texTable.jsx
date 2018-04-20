import React from 'react';
import Row from '../common/layout/row';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';

import Modal from 'react-awesome-modal';



export default props => {
  const makeRows = () => {
    const tax = props.tax || []
    return tax.map(doc => (
      <tbody key={doc._id}>
        <tr className='text-center'>
            <td >{doc.transp}</td>
            <td>{doc.estadoOrig}</td>
            <td>{doc.cidadeOrig}</td>
            <td >{doc.estadoDest}</td>
            <td >{doc.cidadeDest}</td>
            <td >{doc.pedagio}</td>
            <td>{doc.indice}</td>
            <td >{doc.seguro}</td>
            <td >{doc.trt}</td>
            <td >{doc.tas}</td>
            <td>{doc.tfd}</td>
            <td>{doc.sf}</td>
            <td >{doc.trf}</td>
            <td >{doc.ta}</td>
            <td>{doc.vd}</td>
            <td>{doc.tda}</td>
            <td >{doc.min}</td>
            <td >{doc.perc}</td>
            <td >{doc.pesoUn}</td>
            <td >{doc.pesoMin}</td>
            <td><span className='teste'><IconButton style='warning' icon='undo'
            onClick={() => props.openModal()}>
            </IconButton></span></td>
        </tr>
      </tbody>
      
    ))
}



  return (
  <table className='table table-bordered table-hover'>
  <thead>
      <tr className='text-center'>
      <th>Transportadora</th>
          <th>Estado origem</th>
          <th>Cidade origem</th>
          <th>Estado destino</th>
          <th>Cidade destino</th>
          <th>Pedágio</th>
          <th>Indice</th>
          <th>Seguro</th>
          <th>TRT</th>
          <th>TAS</th>
          <th>TFD</th>
          <th>SF</th>
          <th>TRF</th>
          <th>TA</th>
          <th>VD</th>
          <th>TDA</th>
          <th>MIN</th>
          <th>PERC</th>
          <th>Valor Peso</th>
          <th>Peso mínimo</th>
          <th>Alterar</th>
      </tr>
  </thead>
  {makeRows()}
</table>
  )
}
