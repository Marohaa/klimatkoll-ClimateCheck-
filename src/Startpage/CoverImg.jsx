import {  Outlet } from "react-router-dom";
import Jobs from "./jobs";
import HomeBar from "./HomeBar";
import Utbildning from "./Utbildning";
import ChallangeSec from "./challangeSec";
import "./CoverImg.css";
function CoverImg() {
  return (
    <>
      {/* image cover with text */}
      <div className="container-fluid p-0 position-relative">
        <img src="/bilder/change.png" alt="Cover" className="img-fluid" />
        <div className="row align-items-center position-absolute top-0 start-0 w-100 ">
          <div className=" col-md-8  p-4">
            <h1
              className="Rubrik"
              style={{
                fontSize: "calc(4vw + 12px)", // Responsiv fontstorlek
                fontWeight: "bold",
                color: "#4CAF83",
                position: "absolute",
                top: "150px",
                left: "5%",
              }}
            >
              Välkommen till Klimatkoll!
            </h1>
            <p
              className="Body"
              style={{
                fontSize: "calc(2vw + 11px)", // Responsiv fontstorlek
                position: "absolute",
                top: "250px",
                left: "5%",
              }}
            >
              Ta del av en spännande resa in i klimatfrågornas värld
            </p>

        
          </div>
        </div>
      </div>

      {/* 4 Images with text */}
      <HomeBar />

      {/* utblidning section */}
      <Utbildning />
      
      {/* the 4 section on startsida */}
      <hr
        style={{ margin: "30px auto", width: "80%", borderColor: "#4CAF83" }}
      />
      <ChallangeSec />
     
      <hr
        style={{ margin: "30px auto", width: "80%", borderColor: "#4CAF83" }}
      />
      <Jobs />
      <hr
        style={{ margin: "30px auto", width: "80%", borderColor: "#4CAF83" }}
      />
      <Outlet />
    </>
  );
}

export default CoverImg;
