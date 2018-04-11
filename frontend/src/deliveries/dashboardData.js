import React from 'react'
import moment from 'moment'
import Grid from '../common/layout/grid'


export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(doc => (
      <tbody key={doc._id}>
        <tr>
            <td >{doc.nota}</td>
            <td>{doc.serie}</td>
            <td>{doc.cgc}</td>
            <td>{moment(doc.emissao).format('MM/DD/YYYY')}</td>
            <td>{moment(doc.embarque).format('MM/DD/YYYY')}</td>
            <td>{moment(doc.previsao).format('MM/DD/YYYY')}</td>
            <td>{doc.estadoDest}</td>
            <td>{doc.cidadeDest}</td>
            <td>{doc.situacao} <small className="label label-danger"><i className="fa fa-clock-o"></i>1 dia</small></td>
        </tr>
      </tbody>
    ))
}

    return (
      <Grid cols='12 9 10'>
        <table className='table table-bordered table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th>Nota</th>
                    <th>Serie</th>
                    <th>CNPJ</th>
                    <th>Emissao</th>
                    <th>Embarque</th>
                    <th>Previsão</th>
                    <th>UF</th>
                    <th>Cidade</th>
                    <th>Situação</th>
                </tr>
            </thead>
          {renderRows()}
        </table>
      </Grid>
    )
}
