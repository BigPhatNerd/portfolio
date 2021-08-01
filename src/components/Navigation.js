import React from 'react';
import { menuItems } from '../utils/helpers';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} 1`;
const Navigation = () =>{
	
	return(
		<nav className="sticky">
		<Bounce>
			<ul className="flex-row">
			{ menuItems.map((item) =>(
				<li className="mx-2"
				key={item.class}
				>
			<a href={`${item.href}`}>
			{item.description}
			</a>
			</li>
			))
			}
			</ul>
			</Bounce>
		</nav>
		)
}

export default Navigation