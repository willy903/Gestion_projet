import React from "react";
import "./center.css";
import searchbar from "./../../assets/search.png";
import Card from "./../card/Card";
import Tache from "../TacheComponents/tache";

const Center = () => {
  return (
    <div className="center">
      <div className="searchbar">
        <div className="search-container">
          <input type="text" placeholder="Rechercher" />
          <button type="submit">
            <img src={searchbar} alt="Rechercher" />
          </button>
        </div>
      </div>
      <div className="Task">
        <div className="item item1">
          <span>Tâches</span>
          <button className="btnVoirTout">Voir tout</button>
        </div>
        <div className="item item2">
          <Card
            title="À faire"
            count={80}
            percentage={30}
            completedColor="#1E90FF"
          />
          {/* You can use different colors for different cards */}
          <Card
            title="En cours"
            count={200}
            percentage={60}
            completedColor="#28A745"
          />
          <Card
            title="Complète"
            count={20}
            percentage={100}
            completedColor="#FF5733"
          />
        </div>
        <div className="taskadd">
        <Tache
                    taskName={"nana"}
                    members={"rakoto"}
                    progress={80}
                />
        </div>
      </div>
    </div>
  );
};

export default Center;
