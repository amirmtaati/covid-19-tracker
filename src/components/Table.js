import React from 'react'

const Table = () => {
    return (
        <table class="styled-table">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Points</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Dom</td>
                  <td>6000</td>
              </tr>
              <tr class="active-row">
                  <td>Melissa</td>
                  <td>5150</td>
              </tr>
            </tbody>
        </table>
    )
}

export default Table
