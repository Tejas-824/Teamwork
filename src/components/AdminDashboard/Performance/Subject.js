import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import styles from "./Subject.module.css"; // Ensure this path is correct
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample data for subject-wise performance (replace with actual API call later)
const performanceData = {
  labels: ["Math", "Science", "English", "History", "Geography"],
  datasets: [
    {
      label: "Average Performance (%)",
      data: [78, 82, 65, 70, 75],
      backgroundColor: "#5D79D0",
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

// Chart options
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
      text: "Subject-wise Performance Overview",
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

const SubjectPerformance = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.subjectContainer}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <Bar data={performanceData} options={options} />
    </div>
  );
};

export default SubjectPerformance;