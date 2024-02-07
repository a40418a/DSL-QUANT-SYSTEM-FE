import React from "react";
import "./featuredInfo.css";
import { ArrowDown, ArrowUp } from "../emoticon/arrow/Arrow";
import { FeaturedInfoBox } from "../box/featuredInfoBox/FeaturedInfoBox";
import { MaxClose, MinClose } from "../chart/Chart";

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      <FeaturedInfoBox
        title="최고점"
        currency="₩"
        price={<MaxClose />}
        rate="88%"
        arrow={<ArrowDown />}
        sub="Compared to last month"
      />
      <FeaturedInfoBox
        title="최저점"
        currency="₩"
        price={<MinClose />}
        rate="88%"
        arrow={<ArrowUp />}
        sub="Compared to last month"
      />
    </div>
  );
};
