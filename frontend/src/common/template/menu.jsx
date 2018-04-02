import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className='sidebar-menu'>
  <MenuItem path='#' label='Entregas' icon='truck'/>
  <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='#' label='Arquivo EDI' icon='file' />
      <MenuItem path='#' label='Arquivo ocorrencias' icon='file' />

  </MenuTree>
  <MenuItem path='#' label='Valores' icon='money'/>
  <MenuItem path='#' label='Sobre' icon='info-circle'/>
  <MenuItem path='#' label='Dúvidas' icon='question-circle-o'/>
</ul>
);
