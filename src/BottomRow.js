import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {
  const[quarter, updateQuarter] = useState(1)
  const[down, updateDown] = useState(1)
  const[yard, updateYard] = useState(10)
  const[ballOn, updateBallOn] = useState(10)

  return (
    
    <div className="bottomRow">
      {down === 4 && (<p className="lastChance"> Last Chance!</p>)}
      {down === 4 & yard === 26 && (window.location.replace("https://youtu.be/2usY3hJk_tc?t=20"))}
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yard}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <section className ="newButtons">
        <button className="Down__Update" onClick={()=> down === 4 ? updateDown(down-3) : updateDown(down+1)}>Next Down</button>
        <button className="Yard__Update" onClick={() => updateYard(yard+1)}>More To Go</button>
        <button className="BallOn__Update" onClick ={()=> ballOn <50 ? updateBallOn(ballOn+1) : updateBallOn(ballOn-49)}>Update Ball On</button>
        <button className="Quarter__Update" onClick={()=> quarter === 4 ? updateQuarter(quarter-3) : updateQuarter(quarter+1)}>Next Quarter</button>
        
      </section>
    </div>
    
  );
};
// <button className="homeButtons__touchdown" onClick={()=> updateHomeScore(homeScore+7)}>Home Touchdown</button>
export default BottomRow;
