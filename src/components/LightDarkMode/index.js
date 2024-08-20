import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true, value: 'card-container lightMode', btnText: 'Dark Mode'}

  changeMode = () => {
    this.setState(st => {
      if (st.mode) {
        return {
          mode: false,
          value: 'card-container darkMode',
          btnText: 'Light Mode',
        }
      }
      return {
        mode: true,
        value: 'card-container lightMode',
        btnText: 'Dark Mode',
      }
    })
  }

  render() {
    const {value, btnText} = this.state

    return (
      <div className="container">
        <div className={value}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} className="btn" type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
