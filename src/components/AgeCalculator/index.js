// Write your code here.
import {Component} from 'react'

import './index.css'

class AgeCalculator extends Component {
  state = {
    yearOfBirth: '',
    showError: false,
    showResult: false,
  }

  setIsResultVisible = value => {
    this.setState({showResult: value})
  }

  setIsError = value => {
    this.setState({showError: value})
  }

  getCalculatedAge = () => {
    const {yearOfBirth} = this.state
    const dateOfBirth = new Date(yearOfBirth)
    const dateOfBirthYear = dateOfBirth.getFullYear()

    const date = new Date()
    const dateYear = date.getFullYear()

    return dateYear - dateOfBirthYear
  }

  onClickCalculate = () => {
    const {yearOfBirth} = this.state
    const age = this.getCalculatedAge()

    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.setIsError(false)
      this.setIsResultVisible(true)
    } else {
      this.setIsError(true)
    }
  }

  renderCalculateButton = () => (
    <div className="button-container">
      <button
        type="button"
        className="calculate-btn"
        onClick={this.onClickCalculate}
      >
        Calculate
      </button>
    </div>
  )

  getCalculatedAgeText = () => {
    const calculatedAge = this.getCalculatedAge()

    if (calculatedAge === 1) {
      return `You are ${calculatedAge} year old by the end of 2021`
    }
    return `You are ${calculatedAge} years old by the end of 2021`
  }

  renderCalculatedAge = () => {
    const {showResult} = this.state
    if (showResult) {
      return (
        <p className="calculated-age-text">{this.getCalculatedAgeText()}</p>
      )
    }
    return null
  }

  renderErrorMessage = () => {
    const {showError} = this.state
    if (showError) {
      return <p className="error-message">Enter the year that you are Born</p>
    }
    return null
  }

  onChangeYearOfBirth = event => {
    const {value} = event.target

    this.setState({yearOfBirth: value})
    this.setIsResultVisible(false)
    this.setIsError(false)
  }

  renderInputField = () => {
    const {yearOfBirth} = this.state

    return (
      <input
        className="input-field"
        onChange={this.onChangeYearOfBirth}
        placeholder="Enter the year that you are born"
        type="text"
        value={yearOfBirth}
      />
    )
  }

  renderAgeCalculatorCard = () => (
    <div className="age-calculator-card">
      <h1 className="heading">Age Calculator</h1>
      <div className="form-container">
        <div className="input-with-error-container">
          {this.renderInputField()}
          {this.renderErrorMessage()}
        </div>
        {this.renderCalculatedAge()}
        {this.renderCalculateButton()}
      </div>
    </div>
  )

  render() {
    return (
      <div className="age-calculator-container">
        {this.renderAgeCalculatorCard()}
        <div className="image-container">
          <img
            alt="human stages"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          />
        </div>
      </div>
    )
  }
}

export default AgeCalculator
