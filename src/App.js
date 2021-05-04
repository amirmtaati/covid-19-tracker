import { config } from 'mapbox-gl/dist/mapbox-gl-csp';
import React , {useEffect, useState} from 'react'
import Table from './components/Table';
import Card from './components/Card';
import Map from './map/Map';
const App = () => {
  const url = "https://covid-api.mmediagroup.fr/v1/cases";
  const [country_data, set_country_data] = useState({});
  const [global_data, set_global_data]   = useState({});
  useEffect(async() => {
    const api_data = await fetch_data(url);
    let confirmed = 0 , deaths = 0 , recovered = 0;
    Object.entries(api_data).forEach(country => {
      set_country_data(prev => {
        return {
          ...prev,
          [country[1].All.confirmed] : country[0]
        }
      });
      confirmed += country[1].All.confirmed;
      deaths     += country[1].All.deaths;
      recovered += country[1].All.recovered;
    });
    set_global_data({
      confirmed,
      deaths,
      recovered
    });
  }, []);

  const fetch_data = async(api_url) => {
    const request  = await fetch(api_url);
    const response = await request.json();
    return response
  }
  return (
    <div>
      <div className="global">
        {
          Object.entries(global_data).map(item => {
            const [title,number] = item;
            return (
              <Card title={title} number={number} />
            )
          })
        }
      </div>
      <Table />
    </div>
  )
}

export default App
