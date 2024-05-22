import React from "react";
import './card.css'
const Card = ({ title, count, percentage, completedColor }) => {
  const data = [
    {
      id: "completed",
      label: "Completed",
      value: percentage,
      color: completedColor, // Use the completedColor prop
    },
    {
      id: "remaining",
      label: "Remaining",
      value: 100 - percentage,
      color: "#D3D3D3", // Hexadecimal color for the remaining part
    },
  ];

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.title}>{title}</p>
          <span style={styles.count}>{count}</span>
        </div>
        <div className="wrapper">
          <div className="circular-bar">
            <div className="percent">{0} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin:"0 12px" ,
    width: "260px",
    height: "120px",
    backgroundColor: "#4A5568",
    borderRadius: "10px",
    padding: "0 40px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    margin: 0,
    fontSize: "14px",
    color: "#CBD5E0",
  },
  count: {
    marginTop: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  chart: {
    width: "880px", // Adjust the width
    height: "80px", // Adjust the height
  },
};

export default Card;
