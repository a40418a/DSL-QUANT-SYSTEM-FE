import React from "react";
import "./sidebar.css"

export default function sidebar()
{
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="disbarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Menu-01</li>
                        <li className="sidebarListItem">Menu-02</li>
                    </ul>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">Menu-01</li>
                        <li className="sidebarListItem">Menu-02</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}