import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./tache.css";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
const Tache = ({ taskName, members, progress }) => {
  return (
    <div style={styles.taskItem}>
      <div style={styles.taskInfo}>
        <p style={styles.taskName}>{taskName}</p>
        <div style={styles.members}>
          <AvatarGroup>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              size="large"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
              size="large"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
              size="large"
              shape="circle"
            />
          </AvatarGroup>
        </div>
      </div>
      <div>
        <div style={styles.progressText}>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <div>
          {progress}%
          </div>
        </div>
      </div>
      <button style={styles.detailsButton}>Détails</button>
    </div>
  );
};

const styles = {
  taskItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#333",
    borderRadius: "5px",
    margin: "10px 0",
    color: "#fff",
  },
  taskInfo: {
    display: "flex",
    alignItems: "center",
  },
  taskName: {
    marginRight: "20px",
  },
  members: {
    display: "flex",
    alignItems: "center",
  },
  memberCount: {
    marginLeft: "10px",
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    width: "100px",
  },
  progressText: {
    display: "flex",
    alignItems: "center",
gap:"5px",
  },
  detailsButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  progressbart: {
    with: "50%",
  },
};

export default Tache;
