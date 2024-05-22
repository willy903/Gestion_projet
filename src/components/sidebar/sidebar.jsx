import React from "react";
import "./sidebar.css";
import logoPrincipal from "./../../assets/logoGest.png";
import home from "./../../assets/home.png";
import team from "./../../assets/team.png";
import calendar from "./../../assets/calendar.png";
import project from "./../../assets/project.png";
import logout from "./../../assets/logout.png";


const sidebar = () => {
  return (
    <>
      <div className="asideContainer">
        <div className="logo">
          <img src={logoPrincipal} alt="logo"/>
        </div>
        <div className="item2">
          <div className="boxIcon active">
            <div className="content">
              <img src={home} alt="icon dashboard"/>
              <span className="txtLink">Dashboard</span>
            </div>
          </div>
          <div className="boxIcon">
            <div className="content">
              <img src={team} alt="icon équipe"/>
              <span className="txtLink">Equipe</span>
            </div>
          </div>
          <div className="boxIcon">
            <div className="content">
              <img src={calendar} alt="icon calendrier" />
              <span className="txtLink">Callendrier</span>
            </div>
          </div>
          <div className="boxIcon">
            <div className="content">
              <img src={project} alt="icon projet" />
              <span className="txtLink">Projet</span>
            </div>
          </div>
        </div>
        <div className="item3 item3botom">
          <div className="boxIcon">
            <div className="content">
              <img src={logout} alt="icon deconnexion" />
              <span className="txtLink">Déconnexion</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
