import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { closeNavigation } from '../actions/UiActions';

const mapStateToProps = (state) => (

	{
		open: state.ui.navigationOpen
	}

)

const mapDispatchToProps = (dispatch) => (

	{
		onNavClose: () => {

			dispatch(closeNavigation());

		}	
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);