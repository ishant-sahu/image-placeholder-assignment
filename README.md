# image-placeholder-assignment

This project shows the HTML Loader Element until the image is not fully loaded .Once the image is loaded ,the HTML Loader
Element is replaced by image with the desired styles passed.

Steps to follow:

1) git clone this project
2) Create your react project inside the image-placeholder-assignment
3) npm install --save ../image-placeholder-grofers

4) Wherever you want to use this image-placeholder , import it
    import ImageComponent from 'image-palceholder';

5) Create the object for the image tag which contains the styles for the corresponding images
    Example :
    
    let obj = {
      "src" : "http://freebigpictures.com/wp-content/uploads/2009/09/cumulonimbus.jpg",
      "width" : "500 px",
      "height" : "700px "
  }
  
6) Use this component (I am using at root level passing the created obj )
    ReactDOM.render(<ImageComponent obj={obj} />, document.getElementById('app'));
  

