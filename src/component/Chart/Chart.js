import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'

const Chatrt = (props)=> {
    const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value)
    const totalMaximum = Math.max(...dataPointsValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoints => (
                <ChartBar
                  key={dataPoints.label}
                  value={dataPoints.value}
                  maxValue={totalMaximum}
                  label={dataPoints.label}
                />
            ))}
        </div>
    )
}

export default Chatrt