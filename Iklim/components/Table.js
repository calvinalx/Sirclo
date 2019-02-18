import React, { Component } from 'react'
import formatDate from '../libs/formatDate'

class Table extends Component {
  
  render() {
    const { data } = this.props
    let tempAvg = 0
    let varianceAvg = 0

    if(!data) {
      return(
        <div>
          <p>Please choose a city from the dropdown first.</p>
        </div>
      )
    } else {

      data.list.map((data, index) => {
        return (
          tempAvg += data.main.temp,
          varianceAvg += data.main.temp_max - data.main.temp_min
        )
      })

      tempAvg = (tempAvg/5).toFixed(2)
      varianceAvg = (varianceAvg/5).toFixed(2)

      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>{data.city.name}</th>
                <th>Suhu</th>
                <th>Perbedaan</th>
              </tr>
            </thead>
            <tbody>
                {data.list.map((data, index) => {
                  return(
                    <tr key={data.dt}>
                      <td>{formatDate(data.dt)}</td>
                      <td>{data.main.temp}</td>
                      <td>{(data.main.temp_max - data.main.temp_min).toFixed(2)}</td>
                    </tr>
                  )
                })}
              <tr>
                <td><strong>Rata-Rata</strong></td>
                <td><strong>{tempAvg}</strong></td>
                <td><strong>{varianceAvg}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }


}

export default Table