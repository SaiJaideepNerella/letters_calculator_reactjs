// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhase: '',
  }

  onChangeInput = event => {
    this.setState({
      inputPhase: event.target.value,
    })
  }

  render() {
    const {inputPhase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeInput}
              />
            </form>
            <p className="letters-count">No.of letters: {inputPhase.length}</p>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letters-calculator-image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
