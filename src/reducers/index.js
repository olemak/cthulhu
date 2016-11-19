const menu = (state = {}, action ) => {
	let defaultState = {
	  context: 'Menu',
	  title: 'Cthulhu Character Sheet',
	  character: {
	    name: '',
	    occupation: '',
	    stats: [],
	    skills: [],
	    weapons: []
	  }
	}


	switch (action.type) {
		case 'SET_CONTEXT': 
			return {
				context: action.context
			}
/*


		case 'SET_STAT':
		return {
			stats: {
				action.stat : action.value
			}
		}

*/

		default:
			return state
	}
}

export default menu