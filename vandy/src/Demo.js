import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';



const Demo=(props) => {
return <div className="main">
	<h1>Hello world 1	{props.name}</h1>
<p>I am pradeep</p>
</div>

}

 // class Demo extends Component{
// render(){
// 	return <div className="main">
// 	<h1>Hello world 1	{this.props.name}</h1>
// <p>I am pradeep</p>
// </div>




export default Demo