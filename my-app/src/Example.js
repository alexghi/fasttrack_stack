import React from 'react'

export class Example extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
		this.user_input = React.createRef()
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		const onClick = () => {
			this.setState(
				{ count: this.state.count + 1 }
			)
		}
		const numberofTimesClicked = this.state.count

		return (
			<div style={{
				backgroundColor: 'burlywood',
				marginTop: 20,
				height: 300
			}}>
				<input ref={this.user_input}/>
				<div
					style={{
						padding: 20,
						backgroundColor: 'brown'
					}}
					onClick={onClick}>
					click me
				</div>
				<div>
					{numberofTimesClicked}
				</div>
			</div>
		)
	}
}
