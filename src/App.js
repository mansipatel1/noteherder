import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  state = {
      vid: null, 
  }

  handleAuth = () => {
      this.setSate({vid: 'mansipatel1'})
  }

  signOut = ()=> {
    this.setState({vid: null})
  }

  signedIn = () => {
    return this.state.vid
  }

  render() {
    return (
      <div className="App">
      {this.signedIn() 
      ? <Main signOut={this.signOut}/> 
      : <SignIn handleAuth={this.handleAuth} />
      }
      
      </div>
    )
  }
}

export default App;
