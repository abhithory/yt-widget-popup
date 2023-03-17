import { useEffect, useState } from "react";

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [userApiKey, setUserApiKey] = useState(null);
  const [brandApiKey, setBrandApiKey] = useState(null);
  function changePopupState() {
    setIsPopupOpen(!isPopupOpen);
  }


  function getApiKeys() {
    const scriptObject = document.querySelector("#yt-widget-div script");

    console.log('==================in widget==================');
    console.log(scriptObject?.dataset?.userApi);
    console.log(scriptObject?.dataset?.brandApi);
    console.log('====================================');

    setUserApiKey(scriptObject?.dataset?.userApi)
    setBrandApiKey(scriptObject?.dataset?.brandApi)
  }
  useEffect(() => {
    applyCss();
    getApiKeys();
  }, []);





  return (
    <div>
      <div className="yt001-widget-btn-container" >
        <div onClick={changePopupState} className="yt001-widget-btn">
          <h3>Click Here</h3>
        </div>
      </div>
      {isPopupOpen &&
        <div className="yt001-iframe-container">
          <div className="yt001-iframe-close-btn-container" onClick={changePopupState}><svg
            stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" className="yt001-widget-close-btn-icon" height="1em" width="1em">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          </div>
          {/* <iframe
            src="https://websdk.nector.io/nector?murl=https%3A%2F%2Fplatform.nector.io&amp;mkey=671f7f01a6ffcf7c3fecdbc077f5bdc997a51dd07cdc62aa09479616604da9a8&amp;mi=shopify&amp;customer_id=6587853996230"
            width="100%" height="100%" >
          </iframe> */}
          <iframe
          title="yt001-iframe-rewards"
            src="https://www.yourtoken.io/"
            width="100%" height="100%" >
          </iframe>
        </div>
      }
    </div>
  );
}


function applyCss() {
  const styles = `

 .yt001-widget-btn-container {
    position: fixed;
    z-index: 999999999;
    bottom: 10px;
    left: 0px;
    background: rgb(108, 38, 38);
}

 .yt001-widget-btn {
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px; 
    min-width: 50px;
    padding: 5px;
}

 .yt001-widget-close-btn-icon {
    min-width: 30px;
    height: 25px;
    color: #000000;
    fill: none !important;
    color: rgb(255, 255, 255);
}

 .yt001-iframe-container {
    z-index: 2147483645;
    position: fixed;
    width: 375px;
    height: 75vh;
    max-height: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    -webkit-animation-name: yt001-fadein-keyframe;
    animation-name: yt001-fadein-keyframe;
    -webkit-animation-duration: 0.1s;
    animation-duration: 0.1s;
    bottom: 88.7875px;
    left: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
    -webkit-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
}

.yt001-iframe-container iframe{
    border: none;
}

 .yt001-iframe-container .yt001-iframe-close-btn-container {
    padding: 8px 12px;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(to right, rgb(123, 53, 53), rgb(108, 38, 38));
}

 .yt001-iframe-container .yt001-iframe-close-btn-container>.yt001-widget-close-btn-icon {
    min-width: 22px;
    height: 22px;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 3px;
    fill: none !important;
}

/* Mobile Styles */
@media (max-width: 575px) {

     .yt001-iframe-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: auto;
        height: auto;
        max-height: unset;
        border: 0px solid rgba(0, 0, 0, 0.1);
        border-radius: 0px;
        overflow: hidden;
        -webkit-animation-duration: 0.1s;
        animation-duration: 0.1s;
        box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
        -webkit-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
        -moz-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);
    }

}
  `
  const styleSheet = document.createElement("style")
  // styleSheet.type = 'text/css';
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

export default App;
