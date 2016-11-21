import React from 'react'
import ReactDOM from 'react-dom'
import Character from './Character'


xdescribe('Menu', ()=>{
	xit('qualifies for react-dom rendering', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<Menu />, div)
	})

	xit('fails this dummy fail-test', () => {
		expect(Menu).toBe(true)
	})
})