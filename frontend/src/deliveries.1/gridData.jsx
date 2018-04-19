import React, { Component } from 'react';
import moment from 'moment';

import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';
import Small from '../common/template/button';


export default (props) => {
  const makeRows = () => {
    const notes = props.notes || []
    return notes.map(doc => (
      <tbody key={doc._id}>
        <tr className='text-center'>
            <td >{doc.nota}</td>
            <td>{doc.serie}</td>
            <td>{doc.cgcTransp}</td>
            <td >{doc.volumes}</td>
            <td>{moment(doc.emissao).format('DD/MM/YYYY')}</td>
            <td>{moment(doc.embarque).format('DD/MM/YYYY')}</td>
            <td>{moment(doc.previsao).format('DD/MM/YYYY')}</td>
            <td >{doc.estado}</td>
            <td>{doc.cidade}</td>
            <td>{doc.estadoDest}</td>
            <td >{doc.cidadeDest}</td>
            <td >{doc.entrega == true ? <Small onClick={() => props.markAsPending(doc)} className='teste' classe='success teste' icone='check'/> : <Small classe='danger teste' icone='close'/> }</td>
            <td className='teste'><span className='teste'><IconButton style='warning' icon='undo'
            onClick={() => props.markAsPending(doc)}
                ></IconButton></span></td>
        </tr>
      </tbody>
      
    ))
}
return (
  <div className='content'>
  <Grid cols='12 9 12'>
    <table className='table table-bordered table-hover table-striped'>
        <thead>
            <tr className='text-center'>
                <th>Nota</th>
                <th>Serie</th>
                <th>Transportador</th>
                <th>Volumes</th>
                <th>Emissão</th>
                <th>Embarque</th>
                <th>Previsão</th>
                <th>Estado</th>
                <th className='text-center'>Cidade</th>
                <th>Estado Destino</th>
                <th>Cidade Destino</th>
                <th>Entrega</th>
                <th>Rollback</th>
            </tr>
        </thead>
      {makeRows()}
    </table>
  </Grid>
  </div>
)
}
