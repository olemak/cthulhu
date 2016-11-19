import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'


describe('Menu', ()=>{
	it('qualifies for react-dom rendering', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<Menu />, div)
	})

	it('fails this dummy fail-test', () => {
		expect(Menu).toBe(true)
	})
})