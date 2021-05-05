import React,{useEffect} from 'react'

const Table = ({data}) => {
    const clickHandler = e => {
        const display = document.querySelector(`.div${e.target.className}`).style.display;
        document.querySelector(`.div${e.target.className}`).style.display =  display == "none" ? 'block' : 'none';
    }
    return (
        <table class="styled-table">
          <thead>
              <tr>
                  <th>Country</th>
                  <th>Confirmed</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
              </tr>
          </thead>
          <tbody>

              {
                  Object.entries(data).map((country,i) => (
                    <>
                    <tr className={i} onClick={(e) => clickHandler(e)}>
                      <td className={i}>{country[0]}</td>
                      <td className={i}>{country[1].All.confirmed}</td>
                      <td className={i}>{country[1].All.deaths}</td>
                      <td className={i}>{country[1].All.recovered}</td>
                    </tr>
                    <div className={`div${i} info`} style={{display:'none'}}>
                        <h1>{country[0]}</h1>
                    </div>
                    </>
                  ))
              }
           </tbody>
        </table>
    )
}

export default Table
