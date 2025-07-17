import { useState } from "react";
import {
  faChalkboardTeacher,
  faQuestion,
  faComments,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Class.css'; 

const doubtData = [
  {
    class: 6,
    title: "Math Doubts - Class 6",
    question: "How to solve LCM and HCF problems?",
    icon: faQuestion,
    tag: "Unresolved",
  },
  {
    class: 6,
    title: "Science Doubts - Class 6",
    question: "Why do objects float in water?",
    icon: faBookOpen,
    tag: "Resolved",
  },
  {
    class: 7,
    title: "English Doubts - Class 7",
    question: "Difference between active and passive voice?",
    icon: faComments,
    tag: "Unresolved",
  },
  {
    class: 8,
    title: "History Doubts - Class 8",
    question: "What caused the Revolt of 1857?",
    icon: faChalkboardTeacher,
    tag: "Resolved",
  },
  {
    class: 9,
    title: "Physics Doubts - Class 9",
    question: "What is Newton's third law?",
    icon: faBookOpen,
    tag: "Unresolved",
  },
];

const ClassDoubt = () => {
  const [selectedClass, setSelectedClass] = useState(6);

  const filteredDoubts = doubtData.filter((item) => item.class === selectedClass);

  return (
    <div className="doubt-section">
      <h2>Select Your Class</h2>
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

      <div className="doubt-grid">
        {filteredDoubts.length > 0 ? (
          filteredDoubts.map((doubt, index) => (
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
          ))
        ) : (
          <p className="no-doubt">No doubts found for Class {selectedClass}</p>
        )}
      </div>
    </div>
  );
};

export default ClassDoubt;
