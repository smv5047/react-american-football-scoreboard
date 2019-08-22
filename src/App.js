//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const[homeScore, updateHomeScore] = useState(0)
  const[awayScore, updateAwayScore] = useState(0)



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Eagles</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer"></div>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> updateHomeScore(homeScore+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> updateHomeScore(homeScore+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> updateAwayScore(awayScore+7)} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=> updateAwayScore(awayScore+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

window.onload = function() {
  let hour = 14;
  let sec = 59;
  setInterval(function() {
    document.querySelector(".timer").innerHTML = hour + " : " + sec;
    sec--;
    if (sec === 0) {
      hour--;
      sec = 60;
      if (hour === 0) {
        hour = 15;
      }
    }
  }, 1000);
}

export default App;
