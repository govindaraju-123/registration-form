import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    emailIdInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailIdError: false,
    isFormSubmitted: false,
  }

  onBlurEmailId = () => {
    const isValidEmailId = this.validateEmailId()

    this.setState({showEmailIdError: !isValidEmailId})
  }

  onChangeEmailId = event => {
    const {target} = event
    const {value} = target

    this.setState({
      emailIdInput: value,
    })
  }

  renderEmailIdField = () => {
    const {emailIdInput, showEmailIdError} = this.state
    const className = showEmailIdError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email_id">
          EMAIL ID
        </label>
        <input
          type="email"
          id="email_id"
          className={className}
          value={emailIdInput}
          placeholder="Email id"
          onChange={this.onChangeEmailId}
          onBlur={this.onBlurEmailId}
        />
      </div>
    )
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validateEmailId = () => {
    const {emailIdInput} = this.state

    return emailIdInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidEmailId = this.validateEmailId()

    if (isValidFirstName && isValidLastName && isValidEmailId) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showEmailIdError: !isValidEmailId,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError, showEmailIdError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        {this.renderEmailIdField()}
        {showEmailIdError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
      emailIdInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
