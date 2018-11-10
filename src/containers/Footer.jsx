import {connect} from 'react-redux'
import Footer from '../components/Footer'
import {setVisibilityFilter} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  filterValue: state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (v) => dispatch(setVisibilityFilter(v))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)