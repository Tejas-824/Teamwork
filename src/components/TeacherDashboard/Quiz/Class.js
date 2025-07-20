import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faClipboardList,
  faBook,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Class.module.css';

const quizData = [
  {
    class: 6,
    title: "Fractions & Decimals",
    subject: "Mathematics",
    icon: faClipboardList,
    status: "Active",
  },
  {
    class: 6,
    title: "Water and Air",
    subject: "Science",
    icon: faBook,
    status: "Inactive",
  },
  {
    class: 7,
    title: "Grammar Basics",
    subject: "English",
    icon: faClipboardList,
    status: "Active",
  },
  {
    class: 8,
    title: "Freedom Struggle",
    subject: "History",
    icon: faClock,
    status: "Inactive",
  },
  {
    class: 9,
    title: "Motion and Laws",
    subject: "Physics",
    icon: faCheckCircle,
    status: "Active",
  },
];

const ClassQuiz = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const navigate = useNavigate();

  const filteredQuizzes = quizData.filter(
    (quiz) => quiz.class === selectedClass
  );

  return (
    <div className={styles.dashboardSection}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className={styles.heading}>Teacher Quiz Dashboard</h2>

      <div className={styles.classSelector}>
        {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`${styles.classBtn} ${
              selectedClass === cls ? styles.classBtnActive : ""
            }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className={styles.quizGrid}>
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
            <div className={styles.quizCard} key={index}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={quiz.icon} className={styles.quizIcon} />
              </div>
              <div className={styles.quizInfo}>
                <h4>{quiz.title}</h4>
                <p>Subject: {quiz.subject}</p>
                <div className={styles.statusTag}>
                  {quiz.status === "Active" ? (
                    <span className={styles.activeStatus}>🟢 Active</span>
                  ) : (
                    <span className={styles.inactiveStatus}>🔴 Inactive</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noQuiz}>
            No quizzes found for Class {selectedClass}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClassQuiz;