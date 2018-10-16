import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import MessagesList from './Components/MessagesList';
import AddMessage from './Components/AddMessage';
import store from './Store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My Chat App</h1>
          </header>
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div id='container' className='container-fluid'>
            <aside id='sidebar'>Users
              <Sidebar />
            </aside>
            <section id='main'>
              <section id='messages-list'>Message List
                <MessagesList />
              </section>
              <section id='new-message'>
                <AddMessage />
              </section>
            </section>
          </div>
        </div>

      </Provider>
    );
  }
}

export default App;
