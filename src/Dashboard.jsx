import React from 'react';

import BulletGroup from './charts/BulletGroup';
import './dashboard.css';
const groups = require('./data/bullets.json');

const Dashboard = () => {
  return (
    <div className="dashboard">
      {groups.map((group, index) => {
        const vertical = group.vertical || false,
          themeName = group.theme || null,
          title = group.title || null,
          charts = group.charts,
          cls = group.class;
        return (
          <BulletGroup
            title={title}
            vertical={vertical}
            charts={charts}
            themeName={themeName}
            class={cls}
            key={index}
          ></BulletGroup>
        );
      })}
    </div>
  );
};

export default Dashboard;
