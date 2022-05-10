import React from 'react'

const StudentItem = ({studentName: name, onUserNameChange}) => {


	return (
		<div>
			<input
				value={name}
				onChange={(e) => {
					return onUserNameChange(e.currentTarget.value)
				}}
			/>
			<div style={{
				backgroundColor: 'teal', height: '40px'
			}}>
				{name}
			</div>
		</div>

)}

export const StudentTag = ( props) => {
	const studentTag = props.tag

	return <div>{studentTag}</div>
}

export default StudentItem
