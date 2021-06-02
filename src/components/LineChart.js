import React, { useEffect, useState } from 'react'
import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

//"https://disease.sh/v3/covid-19/historical/all?lastdays=120"
const LineChart = ({ caseType }) => {
    //state for storing chart data
    const [chartData, setChartData] = useState({})
    //Fetching data and setting state
    useEffect(() => {
        async function fetchApi(url) {
            const res = await (await fetch(url)).json()
            return prepareChartData(res, caseType)
        }
        (async function drawChart() {
            const req = await fetchApi("https://disease.sh/v3/covid-19/historical/all?lastdays=14")
            setChartData(req)
        }
        )()
    }, [caseType])

    return (
        <div className="chart">
            {/* <canvas id="line-chart" width="460px" height="380px" /> */}
            <Line
                data={{
                    labels:chartData.dates,
                    datasets: [
                        {
                            label : caseType,
                            backgroundColor: chartData.bgColor,
                            data: chartData.caseTypeInfo,
                        },
                    ],
                }}
            />
        </div>
    )
}

const prepareChartData = (object, caseType) => {
    let dates = [], caseTypeInfo = [], bgColor;
    switch (caseType) {
        case "cases":
            bgColor = "blue"
            break;
        case "deaths":
            bgColor = "red"
            break;
        case "recovered":
            bgColor = "green"
            break
    }

    Object.keys(object.cases).forEach(date => {
        dates.push(date)
    })
    Object.entries(object).forEach(item => {
        if (item[0] == caseType) {
            Object.values(item[1]).forEach(value => {
                caseTypeInfo.push(value)
            })
        }

    })
    return {
        dates,
        bgColor,
        caseTypeInfo
    }
}


export default LineChart

