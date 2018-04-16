import BootstrapTable from 'react-bootstrap-table-next';
import React, { Component } from 'react';
import Grid from '../common/layout/grid'

var products = [{
  id: 1,
  name: "Product1",
  price: 120,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
}, {
  id: 2,
  name: "Product2",
  price: 80,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
},{
  id: 3,
  name: "Product3",
  price: 200,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
},{
  id: 4,
  name: "Product4",
  price: 500,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
},{
  id: 5,
  name: "Product5",
  price: 80,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
},{
  id: 6,
  name: "Product6",
  price: 80,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
},{
  id: 7,
  name: "Product7",
  price: 80,
  ovos: 100,
  ovos1: 100,
  ovos2: 100,
  ovos3: 100,
  ovos4: 100,
  ovos5: 100,
  ovos6: 100,
  ovos7: 100,
  ovos8: 100,
  ovos9: 100,
  ovos10: 100,
  ovos11: 100,
  ovos12: 100,
  ovos13: 100,
  ovos14: 100,
  ovos15: 100
}];


const columns = [{
  dataField: 'id',
  text: 'Product',
  sort: true,
  headerStyle: (colum, colIndex) => {
    return { width: '200px' };
  }
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true,
  headerStyle: (colum, colIndex) => {
    return { width: '200px', background: 'green'};
  }
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true,
  headerStyle: (colum, colIndex) => {
    return { width: '200px'};
  }
},{
  dataField: 'ovos',
  text: 'Product Price1',
  sort: true,
  headerStyle: (colum, colIndex) => {
    return { width: '200px'};
  }
},{
  dataField: 'ovos1',
  text: 'Product Price1',
  headerStyle: (colum, colIndex) => {
    return { width: '200px'};
  }
},{
  dataField: 'ovos2',
  text: 'Product Price1'
},{
  dataField: 'ovos3',
  text: 'Product Price1'
},{
  dataField: 'ovos4',
  text: 'Product Price1'
},{
  dataField: 'ovos5',
  text: 'Product Price1'
},{
  dataField: 'ovos6',
  text: 'Product Price1'
},{
  dataField: 'ovos7',
  text: 'Product Price1'
},{
  dataField: 'ovos8',
  text: 'Product Price1'
},{
  dataField: 'ovos9',
  text: 'Product Price1'
},{
  dataField: 'ovos10',
  text: 'Product Price1'
},{
  dataField: 'ovos11',
  text: 'Product Price1'
},{
  dataField: 'ovos12',
  text: 'Product Price1'
},{
  dataField: 'ovos13',
  text: 'Product Price1'
},{
  dataField: 'ovos14',
  text: 'Product Price1'
},{
  dataField: 'ovos15',
  text: 'Product Price1'
}];
 
export default () => (
  <div className='table1'>
  <BootstrapTable keyField='id' data={ products } columns={ columns } />
  </div>
)