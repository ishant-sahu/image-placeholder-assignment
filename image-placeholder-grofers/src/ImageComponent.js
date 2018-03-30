import React ,{Component} from 'react';


class ImageComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			imageLoad : false
		}
		
	}
	componentDidMount(){

		const {obj} = this.props;
		if(obj != undefined && obj.src != undefined){
			var img = new Image();
			img.src = obj.src;
			var self = this;
			img.onload = function() {
				self.setState({imageLoad : true });
			};
		}
		
	}

	returnImage(){
		const {obj} = this.props;
		let returnDiv = <img {...obj} />
		return <div>{returnDiv}</div>
	}

	render(){
		var self = this;
		if(this.state.imageLoad == false)
			return <div> Loading ... </div>
		else
			return  this.returnImage()
		
	}
}

export default ImageComponent;