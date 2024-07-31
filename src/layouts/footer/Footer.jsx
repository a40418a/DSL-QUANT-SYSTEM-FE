//상단 타이틀 박스
import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLeft">
                <div>DSL QUANT</div>
                <div>Contact Us</div>
                <div>M | winnaba61@gmail.com</div>
                <div>T | 010-7110-0441</div>
            </div>
            <div className="footerRight">
                <div>개인정보약관</div>
                <div>이용약관</div>
            </div>
        </div>
    );
};
