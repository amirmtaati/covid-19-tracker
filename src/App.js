import React , { useEffect, useState } from 'react'
import Card                            from './components/Card'
import CovidMap                        from './components/Map'
import Table                           from './components/Table'
import LineChart                       from './components/LineChart'
import "leaflet/dist/leaflet.css";
import {sortData , prettyNumber}       from './modules/numberFuncs'
import fetchApi                        from './modules/fetchApi'

const App = () => {
  const [mapCountries, setMapCountries] = useState([])
  const [tableData   , setTableData   ] = useState([])
  const [dataType    , setDataType    ] = useState("all")   // All , Iran , USA , Turkey and ...
  const [caseType    , setCaseType    ] = useState("cases") // Cases , Deaths , Recovered
  const [infoCardData, setInfoCardData] = useState({})

  const allCountriesApiUrl = "https://disease.sh/v3/covid-19/countries"
  useEffect(() => {
    fetchApi(allCountriesApiUrl,(data) => {
      setMapCountries(data)
      setTableData(sortData(data))
    })
  }, [])

  useEffect(() => {
    let cardDataApiUrl = dataType == "all" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${dataType}`
    fetchApi(cardDataApiUrl,(data) => {
      setInfoCardData(data)
    })
  }, [dataType])

  console.log(infoCardData);
  return (
    <>
      <div className="sidebar">
        <select   onClick={(e) => { setCaseType(e.target.value) }}>
          <option value="cases" defaultChecked>Cases</option>
          <option value="deaths">Deaths</option>
          <option value="recovered">Recovered</option>
        </select>

        <div className="table-section">
          <h1>Countries</h1>
          <Table 
            data={tableData} 
            handler={setDataType} 
          />
        </div>

        <div className="chart-section">
          <h1>World Data Chart</h1>
          <LineChart caseType={caseType} />
        </div>

      </div>

      <main id="main-section">
        <Card 
          data={infoCardData} 
          country={dataType} 
        />

        <CovidMap 
          data={mapCountries} 
          caseType={caseType} 
          dataType={dataType} 
        />
      </main>
    </>
  )
}


export default App
