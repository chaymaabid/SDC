import { useState } from "react";

import "./shedule.css";
import Day2 from "./Day2";
import Day1 from "./Day1";
const  OurSchedule = () => {
  const [activeTab, setActiveTab] = useState("Day1");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            

            <nav className="d-flex justify-content-center">
              <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab" role="tablist">
                <button
                  className={`nav-link ${activeTab === "Day1" ? "active" : ""}`}
                  type="button"
                  role="tab"
                  aria-controls="nav-ContactForm"
                  aria-selected={activeTab === "Day1"}
                  onClick={() => handleTabClick("Day1")}
                >
                  <h5>Day 1</h5>
                </button>
                <button
                  className={`nav-link ${activeTab === "Day2" ? "active" : ""}`}
                  type="button"
                  role="tab"
                  aria-controls="nav-ContactMap"
                  aria-selected={activeTab === "Day2"}
                  onClick={() => handleTabClick("Day2")}
                >
                  <h5>Day 2</h5>
                </button>
              </div>
            </nav>

            <div className="tab-content shadow-lg mt-5">
              <div
                className={`tab-pane fade ${activeTab === "Day1" ? "show active" : ""}`}
                role="tabpanel"
                aria-labelledby="nav-ContactForm-tab"
              >
                <Day1/>
              </div>

              <div
                className={`tab-pane fade ${activeTab === "Day2" ? "show active" : ""}`}
                role="tabpanel"
                aria-labelledby="nav-ContactMap-tab"
              >
                  <Day2/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  OurSchedule;
