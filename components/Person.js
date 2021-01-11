import React from 'react';
class Person extends React.Component {
constructor() {
	super();

	this.state = {
		Name: "Tahiru",
		Age: 21,
		Hobies: ["coding","Reading","swimming","playing and interacting"]
	};
}

	render() {
		const Hob = this.state.Hobies.map(item => <ul> <li> {item}</li></ul>) 
		return (
			<div>
			  <p>Learn some information about this person</p>
			{this.state.Age <=  21 ? <h3>have a drink!</h3>: <h3>you must be 21</h3>}
			 <h1>Hobbies</h1>
		     {Hob}
				
			</div>
		) 
	}
}

export default Person
