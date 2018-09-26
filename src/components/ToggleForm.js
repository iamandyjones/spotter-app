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

		const {
			component: Component,
			trigger: Trigger,
			action,
			label,
			...rest
		} = this.props;

		return (

			<Fragment>

				{this.state.isOpen && (

						<Component
							onFormClose={this.handleFormClose}
							{...rest}
						/>

					)
				}

				<Trigger
					onClick={this.handleFormOpen}
					action={action}
					label={label}
				/>

			</Fragment>

		)

	}

}

ToggleForm.defaultProps = {
	trigger: ButtonFab
}

ToggleForm.propTypes = {
	component: PropTypes.func.isRequired,
	trigger: PropTypes.func.isRequired,
	action: PropTypes.string,
	label: PropTypes.string
}

export default ToggleForm;
