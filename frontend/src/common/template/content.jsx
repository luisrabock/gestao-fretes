import React from 'react';

export default props => (
    <section className='content'>
        <input type="file" id="file" />
        <input type="hidden" id="image" />
        <br />
        <button id="clicktest" className="btn btn-success">Processar</button>
        <br />
        <br />
        <img id="myimage" src=""/>
    </section>
);