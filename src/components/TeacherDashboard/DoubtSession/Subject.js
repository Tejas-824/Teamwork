import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faBook,
  faQuestionCircle,
  faFlask,
  faGlobe,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  "./Subject.module.css"; 

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
  const navigate = useNavigate(); 

  const filtered = subjectDoubts.filter(
    (item) => item.subject === selectedSubject
  );

  const subjects = [...new Set(subjectDoubts.map((d) => d.subject))];

  return (
     <div className={styles.dashboardContainer}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className={styles.heading}>Subject-wise Doubt Sessions</h2>

      <div className={styles.selectors}>
        <div className={styles.btnGroup}>
          {subjects.map((subj) => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`${styles.selectorBtn} ${selectedSubject === subj ? styles.active : ""}`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.quizGrid}>
        {filtered.length > 0 ? (
          filtered.map((doubt, index) => (
            <div className={styles.quizCard} key={index}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={doubt.icon} className={styles.quizIcon} />
              </div>
              <div className={styles.quizInfo}>
                <h4>{doubt.topic}</h4>
                <p>Subject: {doubt.subject}</p>
                <div className={styles.statusTag}>
                  {doubt.status === "Resolved" ? (
                    <span className={styles.resolved}>✔ Resolved</span>
                  ) : (
                    <span className={styles.unresolved}>⚠ Unresolved</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noQuiz}>No doubts found for {selectedSubject}</p>
        )}
      </div>
    </div>
  );
};

export default SubjectDoubtSession;