
import React from "react"
import Greet from './component/Greet'

class App extends React.component{
	render(){
		return(
			<div className = "App">
				<Greet active="KAPIL GARG"  activeStatus = "CSE"/>
			</div>
		);
	}
}
export default App;
