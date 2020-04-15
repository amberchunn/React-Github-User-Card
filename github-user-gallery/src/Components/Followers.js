import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
	border-radius: 50%;
	max-width: 150px;
	border: 2px solid #333;
	margin-bottom: 15px;
`;
const Listing = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	border: 10px dotted #7d5491;
`;
const Card = styled.div`
	width: 20%;
	padding: 25px;
	font-size: 1.25rem;
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 5%;
	a {
		text-decoration: none;
		color: #003366;
		display: block;
		:hover {
			color: #ff88dd;
		}
	}
`;
function Followers(props) {
	// console.log(props);
	const followerData = props.gitFollowers;
	const listing = followerData.map((item) => {
		return (
			<Card key={item.id}>
				<Avatar src={item.avatar_url} alt={item.login} />
				<a href={item.html_url}>{item.login}</a>
			</Card>
		);
	});
	return (
		<div className="follower-cont">
			<h2>Followers</h2>
			<Listing>{listing}</Listing>
		</div>
	);
}

export default Followers;
