import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; // Added import
import styles from "./Subject.module.css";

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

const subjectStats = [
  { subject: "Math", quizzes: 6, avgScore: 82, participation: 90 },
  { subject: "Science", quizzes: 5, avgScore: 78, participation: 85 },
  { subject: "English", quizzes: 4, avgScore: 72, participation: 80 },
  { subject: "Social", quizzes: 3, avgScore: 65, participation: 70 },
  { subject: "Computer", quizzes: 2, avgScore: 60, participation: 55 },
  { subject: "Hindi", quizzes: 3, avgScore: 68, participation: 60 },
];

const subjectLabels = subjectStats.map((s) => s.subject);
const quizCount = subjectStats.map((s) => s.quizzes);

const totalQuizzes = quizCount.reduce((a, b) => a + b, 0);
const topSubject = subjectStats.reduce((a, b) => (a.quizzes > b.quizzes ? a : b));
const leastSubject = subjectStats.reduce((a, b) => (a.quizzes < b.quizzes ? a : b));

const data = {
  labels: subjectLabels,
  datasets: [
    {
      label: "Quizzes Available",
      data: quizCount,
      backgroundColor: "#5D79D0",
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Subject-wise Quiz Distribution",
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
      ticks: { color: "#2E2E2E" },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1, color: "#2E2E2E" },
      grid: { color: "#E6ECF9" },
    },
  },
};

const QuizSubjectOverview = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.subjectContainer}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className={styles.heading}>Subject Quiz Overview</h2>

      {/* Summary Cards */}
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h4>Total Quizzes</h4>
          <p>{totalQuizzes}</p>
        </div>
        <div className={styles.card}>
          <h4>Top Subject</h4>
          <p>{topSubject.subject} ({topSubject.quizzes})</p>
        </div>
        <div className={styles.card}>
          <h4>Least Quizzes</h4>
          <p>{leastSubject.subject} ({leastSubject.quizzes})</p>
        </div>
      </div>

      {/* Chart */}
      <div className={styles.chartWrapper}>
        <Bar data={data} options={options} />
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        <h3 className={styles.tableTitle}>Quiz Stats by Subject</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Quizzes</th>
              <th>Avg Score</th>
              <th>Participation</th>
            </tr>
          </thead>
          <tbody>
            {subjectStats.map((subj) => (
              <tr key={subj.subject}>
                <td>{subj.subject}</td>
                <td>{subj.quizzes}</td>
                <td>{subj.avgScore}%</td>
                <td>{subj.participation}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizSubjectOverview;