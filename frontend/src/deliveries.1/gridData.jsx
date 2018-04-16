import BootstrapTable from 'react-bootstrap-table-next';
import React, { Component } from 'react';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';
import moment from 'moment';
import overlayFactory from 'react-bootstrap-table2-overlay';


const columns = [{
  dataField: 'nota',
  text: 'Nota',
  sort: true,
  headerTitle: true

}, {
  dataField: 'serie',
  text: 'Série'

}, {
  dataField: 'cgc',
  text: 'CNPJ',
  sort: true,

},
{
  dataField: 'cgcTransp',
  text: 'Transportador',
  sort: true,

},
{
  dataField: 'peso',
  text: 'Peso',

},{
  dataField: 'volumes',
  text: 'Volumes',
},{
  dataField: 'emissao',
  text: 'Emissao',
  sort: true,

},{
  dataField: 'embarque',
  text: 'Embarque',
  sort: true,

},{
  dataField: 'previsao',
  text: 'Previsão',
  sort: true,

},{
  dataField: 'estado',
  text: 'Estado',
  sort: true,

},{
  dataField: 'cidade',
  text: 'Cidade',
  sort: true,

},{
  dataField: 'estadoDest',
  text: 'Estado Destino',
  sort: true,

},{
  dataField: 'cidadeDest',
  text: 'Cidade Destino',
  sort: true,

},{
  dataField: 'entrega',
  text: 'Entrega',
  sort: true,
},{
  dataField: 'rollback',
  text: 'Rollback',
}
];

export default (props) => {

  const renderRows = () => {
    let products = []
    const notes = props.notes || []
      notes.map(doc => (
      products.push({nota: doc.nota, serie: doc.serie, cgc: doc.cgc,
         cgcTransp: doc.cgcTransp,peso: doc.peso, volumes: doc.volumes,
          emissao: moment(doc.emissao).format('DD/MM/YYYY'), embarque: moment(doc.embarque).format('DD/MM/YYYY'),
          previsao: moment(doc.previsao).format('DD/MM/YYYY'), estado: doc.estado,
          cidade: doc.cidade, estadoDest: doc.estadoDest, cidadeDest: doc.cidadeDest,
          entrega: doc.entrega == true ? 'Entregue' : 'Pendente' , rollback: doc.entrega == true ? <IconButton style='success' icon='plus' /> : ''})
    ))
    return products
  }

  return (
  <div className='table1'>
  <BootstrapTable classname='table1 table' keyField='id' data={ renderRows() } columns={ columns }  
  />
  </div>
  )
}


