import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

// Components
import App from './App'
import Menu from './components/menu/Menu'
import Text from './components/text/Text'
import Create from './components/create/Create'
import ChooseOccupation from './components/ChooseOccupation/ChooseOccupation'
import Character from './components/character/Character'
import SelectCharacter from './components/select/Select'


const Routes = () => {
	return(
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="menu" component={Menu} />
			<Route path="about" component={Text} />
			<Route path="character" >
				<Route path="details"	component={Character} />
				<Route path="create" 	component={Create} />
				<Route path="select" 	component={SelectCharacter} />
			</Route>
			<Route path="occupation" component={ChooseOccupation} />
		</Router>
	)
}

export default Routes;