import { config } from 'mapbox-gl/dist/mapbox-gl-csp';
import React , {useEffect, useState} from 'react'
import Table from './components/Table';
import Card from './components/Card';
import Map from './map/Map';
const App = () => {
  const url = "https://covid-api.mmediagroup.fr/v1/cases";
  const [countryData, setCountryData] = useState({});
  const [globalData,setGlobalData]       = useState({})


  useEffect(async() => {
    const api_data = await fetch_data(url);
    //console.log(api_data.Global);
    setGlobalData({
      Confirmed : api_data.Global.All.confirmed,
      Deaths    : api_data.Global.All.deaths,
      Recovered : api_data.Global.All.recovered,
    });
    setCountryData(api_data);
  }, []);


  const fetch_data = async(api_url) => {
    const request  = await fetch(api_url);
    const response = await request.json();
    return response
  }

  return (
    <div>
      <div className="global">
        <h1>Global</h1>
        <div className="cards">
          {
            Object.entries(globalData).map(item => (
              <Card title={item[0]} number={item[1]} />
            ))
          }
        </div>
      </div>
      
      <div className="table-container">
        <h1>Countries</h1>
        <Table data={countryData} />
      </div>
    </div>
  )
}

export default App
