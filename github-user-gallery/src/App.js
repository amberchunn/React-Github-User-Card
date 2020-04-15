import React from 'react';
import User from './Components/User.js';
import Followers from './Components/Followers.js';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			gitData: [],
			gitFollowers: [],
		};
	}

	componentDidMount() {
		fetch(`https://api.github.com/users/amberchunn`)
			.then((res) => res.json())
			.then((gitData) => {
				// console.log('Data: ', gitData);
				this.setState({ gitData: gitData });
			})
			.catch((err) => {
				console.log('Err: ', err);
			});
		fetch(`https://api.github.com/users/amberchunn/followers`)
			.then((res) => res.json())
			.then((gitFollowers) => {
				// console.log('Followers: ', gitFollowers);
				this.setState({ gitFollowers: gitFollowers });
			})
			.catch((err) => {
				console.log('Err: ', err);
			});
	}

	render() {
		// console.log(this.state);
		return (
			<div className="App">
				<User gitData={this.state.gitData} />
				<Followers gitFollowers={this.state.gitFollowers} />
			</div>
		);
	}
}

export default App;
