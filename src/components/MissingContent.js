import React, { Component} from 'react';

export default function MissingContent(){
	return (
		<div className="Missing__Content">
			<h3>Oh, the horror...!</h3>
			<p>Something feels terryibly... wrong, for lack of a better word.</p>
			<p>Something that should have been here, must have been carried off by some slithering thing.</p>
			<p>It left behind only this horrendous husk: {location.pathname}</p>
		</div>
		)
}