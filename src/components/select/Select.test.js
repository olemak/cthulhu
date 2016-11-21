import React from 'react'
import ReactDOM from 'react-dom'

import Create from './Create'


describe('Create', ()=>{
	it('qualifies for react-dom rendering', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<Create />, div)
	})
})