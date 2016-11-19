import {setContext, addPoint, subtractPoint} from './index.js'

let store = {
	context: '',
	points: {
		health: 15,
		sanity: 50
	}
}

describe('Actions', ()=>{

	setContext('Menu')
	it('changed store.context to "Menu"', () => {
		expect(store.context).toBe("Menu")
	})

	addPoint('health')
	it('increased health to 16', () => {
		expect(store.health).toBe(16)
	})

	subtractPoint('sanity')
	it('decreased satnity to 49', () => {
		expect(store.sanity).toBe(49)
	})

})




/*
export function setContext(context){
	return{
		type: 'SET_CONTEXT',
		context: context
	}
}
*/