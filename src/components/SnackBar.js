import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/snackbar/dist/mdc.snackbar.css';

class SnackBar extends Component {

	componentDidUpdate(prevProps){

		if(prevProps.active !== this.props.active && this.props.active){

			setTimeout(() => {
				this.props.onNotificationTimeout();
			}, 3000)

		}

	}

	render(){

		const { text, active } = this.props;

		let classNames = "mdc-snackbar";

		if(active){
			classNames = classNames += " mdc-snackbar--active";
		}

		return (

			<div className={classNames} aria-live="assertive" aria-atomic="true" aria-hidden="true">

				<div className="mdc-snackbar__text">{text}</div>

				<div className="mdc-snackbar__action-wrapper">

					<button type="button" className="mdc-snackbar__action-button"></button>

				</div>

			</div>

		)

	}

}

SnackBar.propTypes = {
	text: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
}

export default SnackBar;