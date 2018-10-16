import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../CSS/Message.css'

class Message extends Component{
  render(){
    return(
      <div className='alert alert-info'>
        <i className='text-muted'>{this.props.authorName}:</i><br />
        <p style={{margin:0, padding:0}}><strong>{this.props.updateMessage}</strong></p>
      </div>
    );
  }
}

// const Message = ({message, author}) => (
// 	<p>
// 		<i>{author}</i>: {message}
// 	</p>
// 	)

Message.propTypes = {
  // author: PropTypes.string.isRequired,
  updateMessage: PropTypes.string.isRequired
}

export default Message;
