import { useState } from "react";
import {
  faBook,
  faQuestionCircle,
  faFlask,
  faGlobe,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Class.css"; // Reusing the same CSS for layout & responsiveness

const subjectDoubts = [
  {
    subject: "Mathematics",
    topic: "Understanding Algebra",
    icon: faQuestionCircle,
    status: "Unresolved",
  },
  {
    subject: "Science",
    topic: "States of Matter",
    icon: faFlask,
    status: "Resolved",
  },
  {
    subject: "Geography",
    topic: "Volcano Formation",
    icon: faGlobe,
    status: "Unresolved",
  },
  {
    subject: "English",
    topic: "Difference between 'will' and 'shall'",
    icon: faBook,
    status: "Resolved",
  },
  {
    subject: "General Knowledge",
    topic: "Latest Inventions",
    icon: faLightbulb,
    status: "Unresolved",
  },
];

const SubjectDoubtSession = () => {
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");

  const filtered = subjectDoubts.filter(
    (item) => item.subject === selectedSubject
  );

  const subjects = [...new Set(subjectDoubts.map((d) => d.subject))];

  return (
    <div className="dashboard-section">
      <h2>Subject-wise Doubt Sessions</h2>

      <div className="class-selector">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`class-btn ${selectedSubject === subj ? "active" : ""}`}
          >
            {subj}
          </button>
        ))}
      </div>

      <div className="quiz-grid">
        {filtered.length > 0 ? (
          filtered.map((doubt, index) => (
            <div className="quiz-card" key={index}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={doubt.icon} className="quiz-icon" />
              </div>
              <div className="quiz-info">
                <h4>{doubt.topic}</h4>
                <p>Subject: {doubt.subject}</p>
                <div className="status-tag">
                  {doubt.status === "Resolved" ? (
                    <span className="active-status">✔ Resolved</span>
                  ) : (
                    <span className="inactive-status">⚠ Unresolved</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-quiz">No doubts found for {selectedSubject}</p>
        )}
      </div>
    </div>
  );
};

export default SubjectDoubtSession;
