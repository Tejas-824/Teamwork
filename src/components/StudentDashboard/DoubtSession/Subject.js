import { useState } from "react";
import {
  faCalculator,
  faFlask,
  faBook,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Subject.css";

const subjectDoubts = {
  Math: [
    {
      title: "Algebra Confusion",
      question: "What is the difference between linear and quadratic equations?",
      icon: faCalculator,
      tag: "Unresolved",
    },
    {
      title: "Probability Doubt",
      question: "How to calculate probability in card games?",
      icon: faCalculator,
      tag: "Resolved",
    },
  ],
  Science: [
    {
      title: "Physics Law Doubt",
      question: "Can someone explain Newton's second law?",
      icon: faFlask,
      tag: "Unresolved",
    },
    {
      title: "Chemical Reactions",
      question: "What is a displacement reaction?",
      icon: faFlask,
      tag: "Resolved",
    },
  ],
  English: [
    {
      title: "Grammar Confusion",
      question: "When to use 'has' vs 'have'?",
      icon: faBook,
      tag: "Unresolved",
    },
    {
      title: "Essay Writing Help",
      question: "How to write a strong introduction?",
      icon: faBook,
      tag: "Resolved",
    },
  ],
};

const SubjectDoubt = () => {
  const [selectedSubject, setSelectedSubject] = useState("Math");

  const doubts = subjectDoubts[selectedSubject];

  return (
    <div className="subject-doubt-section">
      <h2>Choose a Subject</h2>
      <div className="subject-selector">
        {Object.keys(subjectDoubts).map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`subject-btn ${
              selectedSubject === subject ? "active" : ""
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className="doubt-grid">
        {doubts.map((doubt, index) => (
          <div className="doubt-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={doubt.icon} className="doubt-icon" />
            </div>
            <div className="doubt-info">
              <h4>{doubt.title}</h4>
              <p>{doubt.question}</p>
              <div className="status-tag">
                {doubt.tag === "Resolved" ? (
                  <span className="resolved">✔ Resolved</span>
                ) : (
                  <span className="unresolved">⚠ Unresolved</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectDoubt;
