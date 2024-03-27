import React from "react";
import { Link } from 'react-router-dom';
import'./utmaningSec.css'
function UtamningSec() {
  return (
    <div className="p-0 position-relative">
      <div className="svg-container" style={{ maxWidth: '100%', height: 'auto' }}>
        <svg viewBox="0 0 1440 560" preserveAspectRatio="none">
          <defs>
            <mask id="SvgjsMask1120">
              <rect width="1440" height="560" fill="#ffffff" />
            </mask>
          </defs>
          <g mask="url(#SvgjsMask1120)" fill="none">
            <path d="M 0,11 C 96,37.6 288,118.6 480,144 C 672,169.4 768,138.2 960,138 C 1152,137.8 1344,142 1440,143L1440 560L0 560z" fill="rgba(76, 175, 131, 1)" />
            <path d="M 0,495 C 72,476.4 216,399.6 360,402 C 504,404.4 576,508.6 720,507 C 864,505.4 936,390.4 1080,394 C 1224,397.6 1368,498.8 1440,525L1440 560L0 560z" fill="rgba(194, 237, 206, 1)" />
          </g>
        </svg>
      </div>
      
      <div className="row justify-content-center align-items-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div  style={{ paddingTop: '100px' }}>

          <h2 className="text-center SecHeading"  style={{ fontSize: 30, marginBottom: "20px", color: 'white' }}>Dags att ta en ny utmaningen i ditt liv!</h2>
          <p className="text-center SecBody" style={{  color: 'white' }}>Ta KlimatKolls utmaningar för att förändra ditt liv och minska klimatpåverkan. Gör skillnad nu!</p>

          <div className="text-center">
            <Link to="/Utmaningar">
              <button className="btn btn-secondary btn-lg fa-lg gradient-custom-2 mb-1 Button"
                style={{ backgroundColor: '#F6F6F2', color: '#4CAF83', borderRadius: '20px', fontSize: 'clamp(0.6rem, 2vw, 1rem)', border: 'none', padding: '10px 20px' }}>
                Utmaningar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtamningSec;


