import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'


xdescribe('Menu', ()=>{
	xit('qualifies for react-dom rendering', () => {
	  const div = document.createElement('div')
	  function test_clickhandler(){return "Was tested"} 
	  ReactDOM.render(<Menu clickHandler={test_clickhandler} />, div)
	})
})