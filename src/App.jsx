import Footer from "./Components/Footer.jsx";
import SectionData from "./Components/SectionData.jsx";
import User from "./Components/User.jsx";
import Data from "./assets/data.json";
import "./styles/App.css";
import { useState } from "react";
const App = () => {
  const [selectTime, setSelectTime] = useState("daily");

  return (
    <>
      <main className="container__main">
        <User selectTime={selectTime} setSelectTime={setSelectTime} />
        <section className="container__main_grid">
          <SectionData
            color="--Lightred"
            selectTime={selectTime}
            title="Work"
            Data={Data}
          />
          <SectionData
            color="--Softblue"
            selectTime={selectTime}
            title="Play"
            Data={Data}
          />
          <SectionData
            color="--Lightreed"
            selectTime={selectTime}
            title="Study"
            Data={Data}
          />
          <SectionData
            color="--Limegreen"
            selectTime={selectTime}
            title="Exercise"
            Data={Data}
          />
          <SectionData
            color="--Violet"
            selectTime={selectTime}
            title="Social"
            Data={Data}
          />
          <SectionData
            color="--Softorange"
            selectTime={selectTime}
            title="Self Care"
            Data={Data}
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
