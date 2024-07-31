//주식 참고 자료 박스
import React from 'react';
import './chartBox.css';

export const ChartBox = (props) => {
    return (
        <div className="featuredinfo">
            <div className="featuredinfo-text">
                <div className="featuredinfo-title">{props.title}</div>
                <div className="featuredinfo-money">
                    <div className="featuredinfo-money-content">
                        {props.currency} {props.price} {props.arrow} {props.rate}
                    </div>
                </div>
            </div>
            <div className="featuredinfo-chart">{props.chart}</div>
            <span className="featuredinfo-sub">{props.sub}</span>
        </div>
    );
};
