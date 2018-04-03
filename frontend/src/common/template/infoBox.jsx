import React from 'react';
import Grid from '../layout/grid'

export default props => (
    <Grid cols='12 6 3'>
    <div className="info-box">
    <span className={`info-box-icon ${props.icon}`}><i className={`fa fa-${props.icons}`}></i></span>

  <div className="info-box-content">
    <span className="info-box-text">{props.title}</span>
    <span className="info-box-number">{props.value}</span>
  </div>
</div>
<div className="clearfix visible-sm-block"></div>
    </Grid>
)