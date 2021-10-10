import React from 'react';

import HARevenueTrackerGroup from './haRevenueTracker/HARevenueTrackerGroup';
import './haRevenueTrackerDashboard.css';

const haRevenueTrackerData = require('./data/haRevenueTrackerData.json');

const HARevenueTracker = () => {
  return (
    <div className="dashboard">
      {haRevenueTrackerData.map((group, index) => {
        const vertical = group.vertical || false,
          themeName = group.theme || null,
          title = group.title || null,
          charts = group.charts,
          cls = group.class;
        return (
          <HARevenueTrackerGroup
            title={title}
            vertical={vertical}
            charts={charts}
            themeName={themeName}
            class={cls}
            key={index}
          ></HARevenueTrackerGroup>
        );
      })}
    </div>
  );
};

export default HARevenueTracker;
