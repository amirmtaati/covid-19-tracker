import React from 'react'
import {prettyNumber} from '../modules/numberFuncs'

const Card = ({ data, country }) => {
    const numberFormat             = "0,0"
    const {cases,deaths,recovered} = data;
    const dataObj                  = {cases,deaths,recovered}

    return (
        <>
            <h1>{country}</h1>
            <div className="cards-section">
                {
                    Object.entries(dataObj).map(item => (
                        <div className={`card ${item[0]}`}>
                            <h1>{item[0]}</h1>
                            <p>
                                {
                                    prettyNumber(item[1],numberFormat)
                                }
                            </p>
                        </div>
                    ))
                }
 
            </div>
        </>
    )
}

export default Card
