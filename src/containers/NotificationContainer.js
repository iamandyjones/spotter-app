import { connect } from 'react-redux';
import SnackBar from '../components/SnackBar';

const mapStateToProps = (state) => (

	{
		text: state.notification.text,
		active: state.notification.active
	}

)

export default connect(mapStateToProps)(SnackBar);