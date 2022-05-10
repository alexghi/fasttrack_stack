function GreetingKnownUser(props) {
	return <h1>hello, userule, te cunosc {props.name}</h1>
}

function GreetingUnknownUser(props) {
	return <h1>hello, please sign up</h1>
}

function Greeting(props) {
	const isLoggedIn = true
	
	if( isLoggedIn ) {
		return <GreetingKnownUser name={props.name}/>
	}

	return <GreetingUnknownUser/>
}

export default Greeting;
