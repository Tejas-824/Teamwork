import { useState } from "react";
import {
  faCalculator,
  faFlask,
  faGlobe,
  faBook,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Subject.css";

const subjectData = [
  {
    subject: "Math",
    title: "Algebra Simplification",
    question: "How do I simplify complex algebraic expressions?",
    icon: faCalculator,
    tag: "Answered by GPT",
  },
  {
    subject: "Math",
    title: "Trigonometry Concept",
    question: "What is the sine rule in triangles?",
    icon: faLightbulb,
    tag: "Answered by GPT",
  },
  {
    subject: "Science",
    title: "Chemical Reaction Help",
    question: "Explain the difference between exothermic and endothermic reactions.",
    icon: faFlask,
    tag: "Answered by GPT",
  },
  {
    subject: "Science",
    title: "Laws of Motion",
    question: "What are Newton’s three laws of motion?",
    icon: faFlask,
    tag: "Answered by GPT",
  },
  {
    subject: "Geography",
    title: "Map Skills",
    question: "How do contour lines work on a map?",
    icon: faGlobe,
    tag: "Answered by GPT",
  },
  {
    subject: "English",
    title: "Essay Writing Guide",
    question: "How to write a compelling essay introduction?",
    icon: faBook,
    tag: "Answered by GPT",
  },
];

const ChatgptSubject = () => {
  const [selectedSubject, setSelectedSubject] = useState("Math");

  const subjects = ["Math", "Science", "Geography", "English"];
  const filteredItems = subjectData.filter((item) => item.subject === selectedSubject);

  return (
    <div className="subject-section">
      <h2>Select a Subject</h2>
      <div className="subject-selector">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`subject-btn ${selectedSubject === subj ? "active" : ""}`}
          >
            {subj}
          </button>
        ))}
      </div>

      <div className="subject-grid">
        {filteredItems.map((item, index) => (
          <div className="subject-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={item.icon} className="subject-icon" />
            </div>
            <div className="subject-info">
              <h4>{item.title}</h4>
              <p>{item.question}</p>
              <div className="status-tag">🧠 {item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatgptSubject;
