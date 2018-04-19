import React from 'react';
import Row from '../common/layout/row';
import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';

import Modal from 'react-awesome-modal';



export default props => (
  <table className='table table-bordered table-hover'>
  <thead>
      <tr className='text-center'>
          <th>Transportadora</th>
          <th>Origem</th>
          <th>Destino</th>
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
  <tbody>
    <tr className='text-center'>
      <td>Mercurio</td>
      <td>Jaraguá do Sul</td>
      <td>Belo Horizonte</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td><IconButton value='Open' style='warning' icon='undo'  onClick={() => props.openModal()}></IconButton></td>
    </tr>
  </tbody>
</table>
)
