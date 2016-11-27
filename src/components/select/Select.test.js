import React from 'react'
import ReactDOM from 'react-dom'

import SelectCharacter from './Select'


describe('SelectCharacter', ()=>{
	it('qualifies for react-dom rendering', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<Create />, div)
	})
})