import React from 'react'
import StudentItem, { StudentTag } from './StudentItem'

const students = ['Viviana', 'Filip', 'Tudor', 'Andrei', 'Maria', 'Gabriela']

export class MyComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
		    active: false
		}
		this.username_input = React.createRef()
	}

	onSubmitClick = () => {
		console.log(`your username input value is ${this.username_input.current.value}`)
	}

	onUserNameChange = ( newValue ) => {
		console.log(newValue)
	}

	render() {
		const studentsList = students.map((student, index) => {
			return <StudentItem
				onUserNameChange={this.onUserNameChange}
				key={index}
				someProperty={"aaa"}
				studentName={student}
			/>
		})

		return (
			<div>
				<h1>My name is: {this.state.name}</h1>
				<div className={'Form-container'}>
					<label>username</label>
					<input ref={this.username_input} type="text" />
					<label>password</label>
					<input type="password" />

					<div
						style={{
							backgroundColor: 'yellowgreen',
							padding: '5px 10px'
						}}
						onClick={this.onSubmitClick}
					>
						Submit
					</div>
				</div>

				<div className="parent-list">
					{studentsList}
				</div>
			</div>
		)
	}
}

