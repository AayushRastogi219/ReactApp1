import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {addMessage} from '../Action/action';
import PropTypes from 'prop-types';
import Message from './Message';

class MessagesList extends Component {
  render() {
      return (
          <div className='container-fluid'>
            <ul>
              {this.props.messageReducer.map((message)=>{
                return (<Message key={message.payload} authorName={message.author} updateMessage={message.message} />);
                // return (<Message key={message.payload} {...message} />);
              })}
            </ul>
          </div>
      );
  }
}

function mapStateToProps(state){
  // return({messageReducer: state.rootMessageReducer.messageReducer});
  return({messageReducer: state.messageReducer});
}
//
// MessagesList.propTypes = {
//   messageList: PropTypes.string.isRequired,
//   dispatch: PropTypes.string
// }
MessagesList.propTypes = {
  // mapStateToProps: PropTypes.func.isRequired
}

export default connect(mapStateToProps, () => ({}))(MessagesList);
