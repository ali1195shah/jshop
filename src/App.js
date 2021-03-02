import React, { Component } from 'react'
// import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Jewls from './components/Jewls'

export default class App extends Component {

  state = {
    jewls: []
  }

  componentDidMount = async() => {
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(jewls => {
      this.setState({
        jewls
      })
    })
  }
  render() {
    return (
      <div>
        <Jewls jewls={this.state.jewls}/>
      </div>
    )
  }
}
