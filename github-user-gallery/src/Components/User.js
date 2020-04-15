import React from 'react';
import styled from 'styled-components';

const UserPhoto = styled.img`
	max-width: 200px;
	border: 2px solid #333;
	border-radius: 50%;
`;

function User(props) {
	return (
		<div className="user-cont">
			<h1>{props.gitData.name}</h1>
			<UserPhoto src={props.gitData.avatar_url} alt={props.gitData.login} />
			<p>{props.gitData.location}</p>
		</div>
	);
}

export default User;
