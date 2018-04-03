import React, { Component } from 'react';

import ContentHeader from '../template/contentHeader';
import Content from '../template/content';

class Home extends Component {
    render() {
        return (
            <section className="content">

         
            <div className="row">
                <div className="col-lg-3 col-xs-6">
                  
                    <div className="small-box bg-aqua">
                        <div className="inner">
                            <h3>
                                150
                            </h3>
                            <p>
                                New Orders
                            </p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-6">
                    
                    <div className="small-box bg-green">
                        <div className="inner">
                            <h3>sty
                                53<sup>%</sup>
                            </h3>
                            <p>
                                Bounce Rate
                            </p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-6">
                 
                    <div className="small-box bg-yellow">
                        <div className="inner">
                            <h3>
                                44
                            </h3>
                            <p>
                                User Registrations
                            </p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-6">
                 
                    <div className="small-box bg-red">
                        <div className="inner">
                            <h3>
                                65
                            </h3>
                            <p>
                                Unique Visitors
                            </p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}



export default Home;