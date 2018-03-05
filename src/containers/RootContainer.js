import { connect } from 'react-redux';
import Root from '../components/Root';
import { openNavigation } from '../actions/UiActions';

const mapStateToProps = (state) => (

	{
		
	}

)

const mapDispatchToProps = (dispatch) => (

	{
		onNavOpen: (evt) => {

			evt.preventDefault();
			evt.stopPropagation();
			dispatch(openNavigation());

		}	
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(Root);