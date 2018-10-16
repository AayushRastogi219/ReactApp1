import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import '../CSS/Sidebar.css'

class Sidebar extends Component {
  render() {
      return (
          <div className='sideBar'>
            <ul>
              {this.props.userReducer.map((user)=>{
                return (<li key={user.payload}>{user.name}</li>)
              })}
            </ul>
          </div>
      );
  }
}
function mapStateToProps(state){
  // return({userReducer: state.rootMessageReducer.userReducer});
  return({userReducer: state.userReducer});
}

Sidebar.propTypes = {
  // mapStateToProps: PropTypes.func.isRequired,
  // payload: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired
}

export default connect(mapStateToProps, () => ({}))(Sidebar);
