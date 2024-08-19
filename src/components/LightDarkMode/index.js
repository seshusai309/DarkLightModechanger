import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true, value: 'card-container lightMode'}

  changeMode = () => {
    this.setState(st => {
      if (st.mode) {
        return {mode: false, value: 'card-container darkMode'}
      }
      return {mode: true, value: 'card-container lightMode'}
    })
  }

  render() {
    const {value} = this.state

    return (
      <div className="container">
        <div className={value}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} className="btn" type="button">
            Dark Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
