import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className='sidebar-menu'>
  <MenuItem path='#' label='Entregas' icon='truck'/>
  <MenuItem path='#' label='Valores' icon='money'/>
  <MenuTree label='Cadastro' icon='edit'>
    <MenuItem path='#/notfis' label='Arquivo NOTFIS' icon='plus-circle' />
    <MenuItem path='#/conemb' label='Arquivo CONEMB' icon='plus-circle' />
    <MenuItem path='#/ocorren' label='Arquivo OCORREN' icon='plus-circle' />
    <MenuItem path='#/prefat' label='Arquivo PREFAT' icon='plus-circle' />
    <MenuItem path='#/doccob' label='Arquivo DOCCOB' icon='plus-circle' />
    <MenuItem path='#/individual' label='Inserção individual' icon='plus-circle' />
  </MenuTree>
  <MenuTree label='Taxas e tarifas' icon='percent'>
    <MenuItem path='#' label='Cadastro' icon='plus-circle'/>
    <MenuItem path='#' label='Consulta e edição' icon='search'/>
  </MenuTree>
  <MenuTree label='Prazos de entrega' icon='clock-o'>
    <MenuItem path='#' label='Cadastro' icon='plus-circle'/>
    <MenuItem path='#' label='Consulta e edição' icon='search'/>
  </MenuTree>
  <MenuItem path='#' label='Sobre' icon='info-circle'/>
  <MenuItem path='#' label='Dúvidas' icon='question-circle-o'/>
</ul>
);
