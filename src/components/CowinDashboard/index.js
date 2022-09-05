import {Component} from 'react'

import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

class CowinDashBoard extends Component {
  render() {
    return (
      <div className="container">
        <nav className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="logo-name">CO-WIN </h1>
        </nav>
        <h1 className="main-heading">CoWIN Vaccination in INDIA</h1>
        <div>
          <VaccinationCoverage />
        </div>
        <div>
          <VaccinationByAge />
        </div>
        <div>
          <VaccinationByGender />
        </div>
      </div>
    )
  }
}

export default CowinDashBoard
