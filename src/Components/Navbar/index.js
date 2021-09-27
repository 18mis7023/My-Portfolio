import React from 'react';
import { Nav,NavLink,Bars,NavMenu,NavImage } from './NavBarElements';
const Navbar = () => {
return (
	<>
	{/* <div className="Navbar">
		<h1>navbar</h1>
	</div> */}
	<Nav>
		<NavLink to="/" activeStyle>
			{/* <h1>Logo</h1> */}
		</NavLink>
		<Bars />
		<NavMenu>
			<NavLink to="/" activeStyle>
				Home
			</NavLink>
			<NavLink to="/about" activeStyle>
				About
			</NavLink>
			<NavLink to="/experience" activeStyle>
				Experiences
			</NavLink>
			<NavLink to="/projects" activeStyle>
				Projects
			</NavLink>
			<NavLink to="/contact-us" activeStyle>
				ContactUs
			</NavLink>
		</NavMenu>
		<NavImage>
			{/* <img src={NavTopRightImg}/> */}
			
		</NavImage>
		
	</Nav>
	</>
);
};

export default Navbar;
