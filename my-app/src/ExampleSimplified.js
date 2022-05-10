import React, { useState, useEffect, useRef } from 'react'


const ExampleSimplified = (props) => {
	const [numberOfTimesClicked, setCounter] = useState(0)

	const ref =  useRef()
	useEffect(() => {
		console.log('RENDER')

		return function () {
			console.log('UNMOUNT')
		}
	}, [])

	return (<div>
		<input ref={ref}/>
		<div onClick={() => {
			setCounter(numberOfTimesClicked + 1)
		}}
		>
			click me
		</div>
		<div>
			{numberOfTimesClicked}
		</div>
	</div>)
}

export default ExampleSimplified
