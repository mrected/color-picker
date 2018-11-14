import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      h: 0,
      s: 0,
      l: 0,
      a: 0
    }
  }

  slideH = event => {
    this.setState({
      h: event.target.value
    })
  }
  slideS = event => {
    this.setState({
      s: event.target.value
    })
  }
  slideL = event => {
    this.setState({
      l: event.target.value
    })
  }
  slideA = event => {
    this.setState({
      a: event.target.value
    })
  }

  randomizer = () => {
    this.setState({
      h: Math.round(Math.random() * 360),
      s: Math.round(Math.random() * 100),
      l: Math.round(Math.random() * 100),
      a: Math.round(Math.random() * 10) / 10
    })
  }

  render() {
    const color = `hsla(${this.state.h}, ${this.state.s}%, ${this.state.l}%, ${
      this.state.a
    })`
    return (
      <div id="container">
        <main>
          <p>{color}</p>
          <div id="color-box" style={{ background: color }} />
          <label>Hue: {this.state.h}</label>
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.h}
            onChange={this.slideH}
          />
          <label>Saturation: {this.state.s}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.s}
            onChange={this.slideS}
          />
          <label>Lightness: {this.state.l}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.l}
            onChange={this.slideL}
          />
          <label>Alpha: {this.state.a}</label>
          <input
            type="range"
            min="0"
            max="1"
            step=".1"
            value={this.state.a}
            onChange={this.slideA}
          />
          <button onClick={this.randomizer}>Randomize</button>
        </main>
      </div>
    )
  }
}

export default App
