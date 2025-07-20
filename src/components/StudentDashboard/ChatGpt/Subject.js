import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faCalculator, faFlask, faGlobe, faBook, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Subject.module.css"; 
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
  const navigate = useNavigate();

  const subjects = ["Math", "Science", "Geography", "English"];
  const filteredItems = subjectData.filter((item) => item.subject === selectedSubject);

  return (
    <div className={styles.subjectSection}>
       <div className={styles.topBar}>
          <button className={styles.backBtn} onClick={() => navigate("/")}>
            ← Back
          </button>
        </div>
      <h2>Select a Subject</h2>

      <div className={styles.subjectSelector}>
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`${styles.subjectBtn} ${
              selectedSubject === subj ? styles.active : ""
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      <div className={styles.subjectGrid}>
        {filteredItems.map((item, index) => (
          <div className={styles.subjectCard} key={index}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={item.icon} className={styles.subjectIcon} />
            </div>
            <div className={styles.subjectInfo}>
              <h4>{item.title}</h4>
              <p>{item.question}</p>
              <div className={styles.statusTag}>🧠 {item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatgptSubject;
