import React from 'react';

// undestructured
const Greet = props =>{

	// Destructuring
	// const {active, activeStatus} = props;
	return (
		<div>
			<div className="XYZ">
				<h3> {props.active} </h3>
			</div>

			<div className="PQR">
				<h1>{props.activeStatus}</h1>
			</div>
		</div>
	)
}




export default Greet;
