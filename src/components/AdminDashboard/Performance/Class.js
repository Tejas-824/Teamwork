import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Class.module.css";
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy data for class-wise performance
const performanceData = {
  labels: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
  datasets: [
    {
      label: "Average Performance (%)",
      data: [75, 82, 78, 69, 85, 72, 90],
      backgroundColor: "#5D79D0",
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#3E5BA9",
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: "Class-wise Performance Overview",
      color: "#3E5BA9",
      font: {
        size: 20,
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#2E2E2E",
        font: {
          size: 13,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#2E2E2E",
        font: {
          size: 13,
        },
        callback: function (value) {
          return value + "%";
        },
      },
      grid: {
        color: "#E6ECF9",
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const ClassPerformance = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.performanceContainer}>
    <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <Bar data={performanceData} options={options} />
    </div>
  );
};

export default ClassPerformance;