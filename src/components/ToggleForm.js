import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonFab from './ButtonFab';

class ToggleForm extends Component {

	constructor(props){

		super(props);
		this.state = { isOpen: false }

	}

	handleFormOpen = () => {

		this.setState({ isOpen: true });

	}

	handleFormClose = () => {

		this.setState({ isOpen: false });

	}

	render(){

		const { component: Component, ...rest } = this.props;

		return (

			<Fragment>

				{this.state.isOpen && (
						
						<Component 
							onFormClose={this.handleFormClose}	
							{...rest}
						/>

					)
				}

				<ButtonFab
					onClick={this.handleFormOpen}
				/>

			</Fragment>

		)

	}

}

ToggleForm.propTypes = {
	component: PropTypes.func.isRequired
}

export default ToggleForm;