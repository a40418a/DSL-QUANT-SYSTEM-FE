import React from 'react';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import './explain.css';

export const Explain = () => {
    return (
        <div className="explain">
            <div className="explain-title">
                <div>DSL</div>
                <div>QUANT</div>
            </div>
            <div className="explain-content-wrapper">
                <div className="explain-content">
                    <div>김호성, 김효석, 나상연, 이민혁, 최승아 5인으로 구성된 광운대학교 DSL QUANT 팀입니다.</div>
                    <div>이 웹사이트는 주식전략을 시뮬레이션 해볼 수 있는 웹사이트입니다.</div>
                    <div>참여하고 싶다면 시작하기 버튼을 눌러주세요.</div>
                </div>
                <div className="explain-content-btn">
                    <ColorBtn text="시작하기" link="/login" />
                </div>
            </div>
        </div>
    );
};
