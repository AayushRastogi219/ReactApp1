import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addMessage} from '../Action/action';
import '../CSS/AddMessage.css'

class AddMessage extends Component {
  constructor(props){
    super(props)
    this.state= {message:''};

    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleAddMessage(event){
      this.setState({message:event.target.value})
  }
  handleKeyPress(event){
      if(event.key === 'Enter'){
        this.props.changeStateInReducer(this.state.message, 'Me');;
        this.setState({message:''});
      }
  }

  render() {
      return (
          <div className='addMessage'>
            <input type='text' className='form-control form-control-lg' onChange={this.handleAddMessage} placeholder='Type a message here then hit enter' value={this.state.message} onKeyPress={this.handleKeyPress}></input>
          </div>
      );
  }
}

function mapDispatchToProps(dispatch){
  return({
    changeStateInReducer:(updatedMessage,author)=>{
      dispatch(addMessage(updatedMessage,author))
    }
  });
}

AddMessage.propTypes = {
  // mapDispatchToProps: PropTypes.func.isRequired
}

export default connect(() => ({}), mapDispatchToProps)(AddMessage);
