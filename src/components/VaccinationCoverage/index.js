import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {VaccinationCoverageDetails} = props

  return (
    <div className="mini-container">
      <h1 className="main-heading">Vaccination Coverage </h1>

      <BarChart
        width={900}
        height={400}
        data={VaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
