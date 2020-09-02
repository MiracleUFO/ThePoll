import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
render() { 
		return (
			<header>
			   <h1>ThePoll</h1>
			   <button><NavLink to='/'>Ask a question</NavLink></button>
		    </header>
		)	
	}
	
}

export default Header