import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/chart";
import "./home.css"
import {userData} from "../../dummyData"

export default function Home()
{
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart 
                data={userData}
                title="삼성전자 그래프 예시"
                grid
            />
        </div>
    )
}