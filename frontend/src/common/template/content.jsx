import React from 'react';
import ReactFileReader from 'react-file-reader';

class Content extends React.Component {
    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
        // Use reader.result
        var p = (reader.result)
        console.log(p.split("\r\n"));
        }
      reader.readAsText(files[0]);
    }
    render() {
        return (
        <ReactFileReader handleFiles={this.handleFiles}>
        <button className='btn btn-success'>Processar</button>
        </ReactFileReader>
       )
    }
  }

export default Content;