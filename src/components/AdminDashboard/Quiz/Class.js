import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Class.module.css";
import { useNavigate } from "react-router-dom";

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

// Sample data (replace with actual API call later)
const classData = [
  { name: "Class 6", quizzes: 3, avgScore: 72, participants: 80 },
  { name: "Class 7", quizzes: 4, avgScore: 65, participants: 70 },
  { name: "Class 8", quizzes: 5, avgScore: 78, participants: 85 },
  { name: "Class 9", quizzes: 2, avgScore: 60, participants: 55 },
  { name: "Class 10", quizzes: 6, avgScore: 82, participants: 90 },
  { name: "Class 11", quizzes: 4, avgScore: 70, participants: 75 },
  { name: "Class 12", quizzes: 5, avgScore: 76, participants: 80 },
];

// Chart data
const data = {
  labels: classData.map((item) => item.name),
  datasets: [
    {
      label: "Quizzes Conducted",
      data: classData.map((item) => item.quizzes),
      backgroundColor: "#5D79D0",
      borderRadius: 10,
      barThickness: 30,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Quizzes Conducted per Class",
      color: "#3E5BA9",
      font: {
        size: 20,
        weight: "bold",
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#2E2E2E",
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        color: "#2E2E2E",
      },
      grid: {
        color: "#E6ECF9",
      },
    },
  },
};

const QuizClassOverview = () => {
  const navigate = useNavigate();
  const handleViewClick = (className) => {
    alert(`Show detailed results for ${className}`);
  };

  return (
    <div className={styles.classContainer}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2>Class-wise Quiz Overview</h2>

      {/* Chart Section */}
      <div className={styles.chartSection}>
        <Bar data={data} options={options} />
      </div>

      {/* Class Cards */}
      <div className={styles.cardGrid}>
        {classData.map((cls) => (
          <div key={cls.name} className={styles.card}>
            <h3>{cls.name}</h3>
            <p><strong>Quizzes:</strong> {cls.quizzes}</p>
            <p><strong>Average Score:</strong> {cls.avgScore}%</p>
            <p><strong>Participation:</strong> {cls.participants}%</p>
            <button
              onClick={() => handleViewClick(cls.name)}
              className={styles.viewButton}
            >
              View Results
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizClassOverview;
