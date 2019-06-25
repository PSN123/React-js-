import React from 'react';


const Avatarlist=(props) =>{


		return(
		<div className="AvatarStyle ma4 bg-light-purple dib pa4 tc grow">

	<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Not found"/>
<h1 className="tc">{props.name}</h1>
<p className="tc">{props.work}</p>


</div>

		)
}
export default Avatarlist;