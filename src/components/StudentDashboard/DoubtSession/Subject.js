import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faCalculator,
  faFlask,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Subject.module.css";

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
  const navigate = useNavigate();
  const doubts = subjectDoubts[selectedSubject];

  return (
    <div className={styles.subjectDoubtSection}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className={styles.heading}>Choose a Subject</h2>

      <div className={styles.subjectSelector}>
        {Object.keys(subjectDoubts).map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`${styles.subjectBtn} ${
              selectedSubject === subject ? styles.active : ""
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className={styles.doubtGrid}>
        {doubts.map((doubt, index) => (
          <div className={styles.doubtCard} key={index}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={doubt.icon} className={styles.doubtIcon} />
            </div>
            <div className={styles.doubtInfo}>
              <h4>{doubt.title}</h4>
              <p>{doubt.question}</p>
              <div className={styles.statusTag}>
                {doubt.tag === "Resolved" ? (
                  <span className={styles.resolved}>✔ Resolved</span>
                ) : (
                  <span className={styles.unresolved}>⚠ Unresolved</span>
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
