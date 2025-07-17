import { useState } from "react";
import {
  faClipboardList,
  faBook,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Class.css';

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

  const filteredQuizzes = quizData.filter(
    (quiz) => quiz.class === selectedClass
  );

  return (
    <div className="dashboard-section">
      <h2>Teacher Quiz Dashboard</h2>
      <div className="class-selector">
        {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`class-btn ${selectedClass === cls ? "active" : ""}`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className="quiz-grid">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={quiz.icon} className="quiz-icon" />
              </div>
              <div className="quiz-info">
                <h4>{quiz.title}</h4>
                <p>Subject: {quiz.subject}</p>
                <div className="status-tag">
                  {quiz.status === "Active" ? (
                    <span className="active-status">🟢 Active</span>
                  ) : (
                    <span className="inactive-status">🔴 Inactive</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-quiz">No quizzes found for Class {selectedClass}</p>
        )}
      </div>
    </div>
  );
};

export default ClassQuiz;
