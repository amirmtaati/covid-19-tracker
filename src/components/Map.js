// import { FeatureGroup } from 'leaflet'
import React, { useState } from 'react'
import { Circle, Tooltip, MapContainer as LeafletMap, TileLayer, LayerGroup } from "react-leaflet"

const CovidMap = ({ data, caseType }) => {
    const casesTypeInfo = {
        cases: {
            hex: "blue",
            multiplier: 200
        },

        deaths: {
            hex: '#fb4443',
            multiplier: 2000
        },
        recovered: {
            hex: '#7dd71d',
            multiplier: 200
        }
    }
    return (
        <div className="map">
            <LeafletMap center={[34.80746, -40.4796]} zoom={4}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='$copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <LayerGroup>
                    {
                        data.map(country => {
                            return (
                                <Circle
                                    center={[country.countryInfo.lat, country.countryInfo.long]}
                                    radius={Math.sqrt(country[caseType]) * casesTypeInfo[caseType].multiplier}
                                    pathOptions={{ color: casesTypeInfo[caseType].hex, }}
                                >
                                    <Tooltip sticky>
                                        <div className="country-info">
                                            <h1>{country.country}</h1>
                                            <img src={country.countryInfo.flag} />
                                        </div>
                                        <h2>
                                            {caseType}
                                        :
                                        {country[caseType]}
                                        </h2>
                                    </Tooltip>
                                </Circle>
                            )
                        })
                    }
                </LayerGroup>
            </LeafletMap>
        </div>
    )
}


export default CovidMap
