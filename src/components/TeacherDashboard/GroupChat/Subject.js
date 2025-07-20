import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faQuestion, faBookOpen, faComments, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./subject.module.css"; 
const doubtData = [
  { subject: "Math", class: 6, board: "CBSE", question: "What is the difference between LCM and HCF?", icon: faQuestion, tag: "Unresolved" },
  { subject: "Science", class: 6, board: "ICSE", question: "Why does ice float on water?", icon: faBookOpen, tag: "Resolved" },
  { subject: "English", class: 6, board: "State", question: "What is a simile in a poem?", icon: faComments, tag: "Unresolved" },
  { subject: "Geography", class: 7, board: "CBSE", question: "What are landforms and how are they formed?", icon: faChalkboardTeacher, tag: "Resolved" },
  { subject: "History", class: 7, board: "ICSE", question: "Why was Ashoka called 'The Great'?", icon: faQuestion, tag: "Unresolved" },
  { subject: "Civics", class: 8, board: "State", question: "What is the role of Panchayati Raj in India?", icon: faBookOpen, tag: "Resolved" },
  { subject: "Physics", class: 9, board: "CBSE", question: "State Newton's Laws of Motion.", icon: faChalkboardTeacher, tag: "Unresolved" },
  { subject: "Biology", class: 10, board: "ICSE", question: "Explain photosynthesis with diagram.", icon: faComments, tag: "Resolved" },
  { subject: "Chemistry", class: 11, board: "State", question: "What are hybrid orbitals?", icon: faBookOpen, tag: "Unresolved" },
  { subject: "Economics", class: 12, board: "CBSE", question: "What is GDP? How is it calculated?", icon: faQuestion, tag: "Resolved" },
];

const subjects = [
  "Math", "Science", "English", "Geography", "History",
  "Civics", "Physics", "Biology", "Chemistry", "Economics"
];

const GroupChatSubject = () => {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const navigate = useNavigate();

  const filteredDoubts = doubtData.filter(
    (item) => item.subject === selectedSubject
  );

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className={styles.heading}>Group Chat Doubts - {selectedSubject}</h2>

      <div className={styles.selectors}>
        <div className={styles.btnGroup}>
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`${styles.selectorBtn} ${selectedSubject === subject ? styles.active : ""}`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.quizGrid}>
        {filteredDoubts.length > 0 ? (
          filteredDoubts.map((doubt, index) => (
            <div className={styles.quizCard} key={index}>
              <FontAwesomeIcon icon={doubt.icon} className={styles.quizIcon} />
              <h4>{doubt.subject} - Class {doubt.class} ({doubt.board})</h4>
              <p>{doubt.question}</p>
              <span
                className={`${styles.statusTag} ${doubt.tag === "Resolved" ? styles.resolved : styles.unresolved}`}
              >
                {doubt.tag === "Resolved" ? "✔ Resolved" : "⚠ Unresolved"}
              </span>
            </div>
          ))
        ) : (
          <p className={styles.noQuiz}>No doubts available for {selectedSubject}</p>
        )}
      </div>
    </div>
  );
};

export default GroupChatSubject;
