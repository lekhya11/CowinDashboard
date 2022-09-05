import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  convertCoverage = covData => {
    console.log(covData)
  }

  getVaccinationData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(data)
    this.convertCoverage(data.last_7_days_vaccination)
  }

  renderMainPage = () => {
    const {isLoading} = this.state

    return isLoading ? (
      <Loader type="Audio" color="#00BFFF" height={50} width={50} />
    ) : (
      <div className="container">
        <h1 className="logo-name">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="co-win-logo"
          />
          CO-WIN
        </h1>
      </div>
    )
  }

  render() {
    return <div>{this.renderMainPage}</div>
  }
}

export default CowinDashboard
