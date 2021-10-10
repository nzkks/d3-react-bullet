import React, { useEffect, useState } from 'react';

import './haRevenueTrackerTooltip.css';

const HARevenueTrackerTooltip = ({ chartData, top: y, left: x }) => {
  const [chartDetails, setChartDetails] = useState({
    title: '',
    subtitle: '',
    measures: null,
    ranges: null,
    markers: null
  });

  const [measurements, setMeasurements] = useState({
    width: 266,
    height: 144,
    translate: '',
    arrowWidth: 20,
    arrowHeight: 10,
    transformArrow: ''
  });

  const [tooltipStyle, setTooltipStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    transform: ''
  });

  useEffect(() => {
    if (chartData) {
      setChartDetails({
        title: chartData.title,
        subtitle: chartData.subtitle,
        measures: chartData.measures.join(' '),
        ranges: chartData.ranges.join(' '),
        markers: chartData.markers.join(' ')
      });
    }
  }, [chartData]);

  useEffect(() => {
    let updatedMeasurements = { ...measurements };

    if (x && y) {
      if (y >= measurements.height) {
        updatedMeasurements.arrowHeight = -10;
        updatedMeasurements.translate =
          'translate(' + -updatedMeasurements.width / 2 + 'px,' + -updatedMeasurements.height + 'px)';
        updatedMeasurements.transformArrow =
          'translate(' +
          (updatedMeasurements.width / 2 - updatedMeasurements.arrowWidth) +
          ',' +
          (updatedMeasurements.height + updatedMeasurements.arrowHeight) +
          ')';
      } else if (y < measurements.height) {
        updatedMeasurements.translate = 'translate(' + -updatedMeasurements.width / 2 + 'px,' + 0 + 'px)';
        updatedMeasurements.transformArrow =
          'translate(' +
          (updatedMeasurements.width / 2 - updatedMeasurements.arrowWidth) +
          ',' +
          updatedMeasurements.arrowHeight +
          ') rotate(180,20,0)';
      }

      setTooltipStyle({
        top: y + measurements.arrowHeight * 2,
        left: x,
        width: measurements.width,
        transform: measurements.translate
      });
    }

    setMeasurements(updatedMeasurements);
  }, [y, x]);

  return (
    <>
      {chartData ? (
        <div className="cover-tooltip">
          <div className="tooltip" style={tooltipStyle}>
            <svg width={measurements.width} height={measurements.height}>
              <polygon
                points="10,0  30,0  20,10"
                transform={measurements.transformArrow}
                fill="rgba(0, 0, 0, 0.5)"
              ></polygon>
            </svg>
            <div className="tooltip-content" style={{ height: measurements.height - 20 }}>
              <div className="tooltip-row">Title: {chartDetails.title}</div>
              <div className="tooltip-row">SubTitle: {chartDetails.subtitle}</div>
              <div className="tooltip-row">Measures: {chartDetails.measures}</div>
              <div className="tooltip-row">Ranges: {chartDetails.ranges}</div>
              <div className="tooltip-row">Markers: {chartDetails.markers}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HARevenueTrackerTooltip;
