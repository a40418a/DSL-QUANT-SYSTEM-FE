import React from "react";
import "./topbar.css"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function Topbar()
{
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">주가그래프</span>
                </div>
                <div className="topRight">
                    <AutoGraphIcon></AutoGraphIcon>
                </div>
            </div>
        </div>
    )
}