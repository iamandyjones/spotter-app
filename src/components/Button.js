import React from 'react';

import '@material/button/dist/mdc.button.css';

function Button(props){ 

	const cssClass = "mdc-button " + props.cssClass;

	return (

		<button type="button" className={cssClass}>{props.label}</button>

	)

}

export default Button;
