// Header.js
import Icon, { RadarChartOutlined } from '@ant-design/icons';
import React from 'react';
const Header = ({ name }) => {
    return (
        <header className="header">
            <div className='d-flex'>
            <RadarChartOutlined />
            <h1 className="header-title ml-2">Workflow, {name}!</h1>
            </div>

        </header>
    );
};

export default Header;
