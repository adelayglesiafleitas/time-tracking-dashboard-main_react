import Ellipsis from "../assets/images/icon-ellipsis.svg";
import "../styles/SectionData.css";
import { useEffect, useState } from "react";

const SectionData = ({ color, selectTime, title, Data }) => {
  const [currentData, setCurrentData] = useState(0);
  const [previousData, setPreviousData] = useState(0);
  let type = 0;
  useEffect(() => {
    if (title === "Work") {
      type = 0;
    } else if (title === "Play") {
      type = 1;
    } else if (title === "Study") {
      type = 2;
    } else if (title === "Exercise") {
      type = 3;
    } else if (title === "Social") {
      type = 4;
    } else {
      type = 5;
    }

    //console.log(type);

    setCurrentData((previous) => Data[type].timeframes[selectTime].current);
    setPreviousData((previous) => Data[type].timeframes[selectTime].previous);
  }, [selectTime]);

  return (
    <>
      <article className="cont__data">
        <div
          className="cont__data_color"
          style={{
            backgroundColor: `var(${color})` /*backgroundImage: `url("../assets/images/icon-${work}.svg")`*/,
          }}
        ></div>
        <div className="cont__data_datas">
          <div>
            <p className="rubik300">{title}</p>
            <img src={Ellipsis} alt="icon" />
          </div>
          <h2 className="rubik300">{currentData}Hrs</h2>
          <p className="rubik300 p_time p__movile">
            Last-week-{previousData}hrs
          </p>
        </div>
      </article>
    </>
  );
};

export default SectionData;
