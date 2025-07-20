import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faQuestion, faBookOpen, faComments, faChalkboardTeacher,faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  "./Class.module.css";

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
  {
    class: 10,
    title: "Biology Doubt",
    question: "Difference between arteries and veins?",
    icon: faLightbulb,
    tag: "Resolved",
  },
  {
    class: 12,
    title: "Chemistry Doubt",
    question: "Why does ionic bonding occur?",
    icon: faLightbulb,
    tag: "Unresolved",
  },
];

const ClassDoubtSession = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const navigate = useNavigate();

  const filteredDoubts = doubtData.filter(
    (item) => item.class === selectedClass
  );

  return (
    <div className={styles.dashboardSection}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2>Class-wise Doubt Sessions</h2>

      <div className={styles.classSelector}>
        {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`${styles.classBtn} ${selectedClass === cls ? styles.active : ""}`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className={styles.quizGrid}>
        {filteredDoubts.length > 0 ? (
          filteredDoubts.map((doubt, index) => (
            <div className={styles.quizCard} key={index}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={doubt.icon} />
              </div>
              <div className={styles.quizInfo}>
                <h4>{doubt.title}</h4>
                <p>Q: {doubt.question}</p>
                <div className={styles.statusTag}>
                  {doubt.tag === "Resolved" ? (
                    <span className={styles.activeStatus}>✔ Resolved</span>
                  ) : (
                    <span className={styles.inactiveStatus}>⚠ Unresolved</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noQuiz}>No doubts found for Class {selectedClass}</p>
        )}
      </div>
    </div>
  );
};

export default ClassDoubtSession;