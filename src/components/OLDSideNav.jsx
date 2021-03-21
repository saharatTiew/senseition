import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "../styles/SideNav.css"

const path = "/faculty"

const navList = [
    { faculty: "MSME", facultyId: 1 },
    { faculty: "VMS", facultyId: 2 },
    { faculty: "CA", facultyId: 3 },
    { faculty: "VME", facultyId: 4 },
]


function NavItem(props) {
    return (
        <div>
            <NavLink to={path} activeClassName="active" className="nav-link text-danger">
                <p className="h5 text-danger">{props.faculty}</p>
            </NavLink>
        </div>
    );
}

function SideNav(props) {
    return (
        <div className="nav flex-column wrapper-side-nav">
            <h1 className="sidebar-header">SENSEITION</h1>
            <p className="h4">Faculty</p>
            {navList.map((navItem) =>
                <NavItem faculty={navItem.faculty} id={navItem.facultyId} />
            )}

            <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button type="button" id="sidebarCollapse" class="btn btn-info">
                            <i class="fas fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                </nav>
            </div>
            <div class="overlay"></div>
        </div>
    );
}

export default SideNav;