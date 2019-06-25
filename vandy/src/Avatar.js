import React,{Component} from 'react';
import './Avatar.css'
import 'tachyons';
import Avatarlist from './Avatarlist';

// const Avatar = (props) => {
// }
class Avatar extends Component{

	constructor(){
		super();
		this.state={
			name:"Welcome to the world of React"
		}
	}

	nameChange(){
		this.setState({
name:"OR kya haal hai"
		})

	}
render(){
const avarray=[
{
	id:1,
	name:"pradeep",
	work:"Associate Software Engineer"
},
{
	id:2,
	name:"Arpit",
	work:"Associate Software Engineer"
},
{
	id:3,
	name:"Pankaj",
	work:"Associate Software Engineer"
},
{
	id:4,
	name:"Monika",
	work:"Associate Software Engineer",
Achivements:"Employee of the Month "
}
]		
return(
<div>
<p className="Main">{this.state.name}</p>
<Avatarlist id="1" name={avarray[0].name} work={avarray[0].work}/>
<Avatarlist id="2" name={avarray[1].name} work={avarray[1].work}/>
<Avatarlist id="3" name={avarray[2].name} work={avarray[2].work}/>
<Avatarlist id="4" name={avarray[3].name} work={avarray[3].work}/>
<button onClick={()=>this.nameChange() } >change state</button>
</div>

	)
}
}






////////////// const arrayavtarcard= Avatarlist.map((avtarcard,i)=>{
// return <Avatarlist id={avarray[i].name} 
// name={avarray[i].name}
//                         work={avarray[i].work} 
//                  Achivements={avarray[i].Achivements}/>

// })
//}

export default Avatar;