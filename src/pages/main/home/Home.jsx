import React from 'react';
import { FeaturedInfo } from '../../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { HorizonTableTop20 } from '../../../components/table/horizonTable/HorizonTable';
import { ArrowDown, ArrowUp } from '../../../components/emoticon/Arrow';
import { ChartBox } from '../../../components/box/chartBox/ChartBox';
import { LineChart } from '../../../components/chart/lineChart';
import { userData01 } from '../../../data/dummyData01';

export const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo className="container-featuredinfo" />
            <div className="info">
                <div className="back-tested">
                    <div className="back-tested-title">백테스팅 결과</div>
                    <div className="back-tested-chart">
                        <ChartBox
                            title="최근 주식 종목"
                            currency="₩"
                            price="73,700"
                            arrow={<ArrowDown />}
                            rate="-1"
                            chart={<LineChart data={userData01} dataKey="lowest" />}
                            sub="Compared to last month"
                        />
                    </div>
                </div>
                <div className="top20">
                    <HorizonTableTop20 title={'TOP 20 종목'} />
                </div>
            </div>
        </div>
    );
};
