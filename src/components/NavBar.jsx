import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">Datastats</div>
            <div className="navbar-links">
                <a href="#line-chart" className='active'>Home</a>
                <a href="#bar-chart" title="Access to this page is restricted to authenticated users." >Detailed Dashboards</a>
                <a href="#doughnut-chart" title="Access to this page is restricted to authenticated users.">Datasets</a>
            </div>
        </div>
    );
};

export default Navbar;