import React from 'react';
import ReactDOM from 'react-dom';
import ImageComponent from './ImageComponent';
let obj = {
  "src" : "http://freebigpictures.com/wp-content/uploads/2009/09/cumulonimbus.jpg",
  "width" : "500 px",
   "height" : "700px "
}

ReactDOM.render(<ImageComponent obj={obj} />, document.getElementById('app'));
