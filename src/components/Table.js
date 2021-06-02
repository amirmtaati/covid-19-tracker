import React from 'react'
import {prettyNumber} from '../modules/numberFuncs'

const Table = ({data,handler}) => {
    const format = "0,0a"
    return (
        <table className="table">
            <tr className="head">
                <th className="index">#</th>
                <th>flag</th>
                <th>country</th>
                <th>cases</th>
                <th>deaths</th>
                <th>recovered</th>
            </tr>
            {
            data.map((country,index) => (
                <tr onClick={() => {handler(country.country)}}>
                    <td className="index">{index+1}</td>
                    <td>
                       <img className="flag" src={country.countryInfo.flag} />
                    </td>
                    <td>{country.country}</td>
                    <td>{prettyNumber(country.cases,format)}</td>
                    <td>{prettyNumber(country.deaths,format)}</td>
                    <td>{prettyNumber(country.recovered,format)}</td>
                </tr>
            ))
            }
        </table>
    )
}

export default Table
