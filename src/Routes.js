import React from 'react';
import { Router, Route , Miss, hashHistory } from 'react-router';

// Components
import App from './App'
import Menu from './components/menu/Menu'
import Create from './components/create/Create'
import SelectCharacter from './components/select/Select'
import MissingContent from './components/MissingContent'
/*
import SheetHeader from './components/SheetHeader'
import Text from './components/text/Text'
import ChooseOccupation from './components/ChooseOccupation/ChooseOccupation'
import Character from './components/character/Character'
*/

const Routes = () => (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
        		<Route path="/menu" component={Menu} />
        		<Route path="/character/create" component={Create} />
          		<Route path="/character/select" component={SelectCharacter} />
          		<Route path="*" component={MissingContent} />
	      	</Route>
	      {/*
          		<Match pattern="/about" component={Text} />
          		<Match pattern="/character/display" component={Character} />
          		<Match pattern="/character/occupation" component={ChooseOccupation} />
          		
          		<Miss component={MissingContent} />
			*/}

	      
	    </Router>
	)

export default Routes