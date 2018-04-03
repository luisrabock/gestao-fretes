import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';
import InfoBox from '../template/infoBox';
import Map from '../template/map';

class Home extends Component {
    render() {
        return (
     <section className="content">
        <div className="row">
        <InfoBox icon='bg-red'icons='hourglass-end' title='Lead-Time do mês' value='9.21 Dias'/>
        <InfoBox icon='bg-green'icons='bolt' title='Eficiência do mês' value='90%'/>
        <InfoBox icon='bg-blue'icons='money' title='Gasto do mês' value='R$ 100.132,00'/>
        <InfoBox icon='bg-yellow'icons='percent' title='Percentual do mês' value='2.25'/>

        </div>
        <div className='row'>
        </div>
     </section>
        )
    }
}



export default Home;