import React from "react";
import "./WhatComp.css"
import { Feature } from "../../components";
import { WhatfeatureData } from "../../data/FeaturesData";

const WhatComp = () => {
  return (
    <div className="signlang__whatsignlang section__margin" id="whatsignlang">
      <div className="signlang__whatsignlang-feature">
        <Feature
          title="在搜索signlang__whatsignlang-feature地方求改"
          text=""
        />
      </div>

      <div className="signlang__whatsignlang-container">
        {
          WhatfeatureData.map((data,i)=>(
            <Feature title={data.title} text={data.text} key={i*201}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default WhatComp;
