import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faRobot,
  faLightbulb,
  faBrain,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Class.module.css";

const chatFeatures = [
  {
    class: 6,
    title: "Science Assistant",
    description: "Get quick science explanations from ChatGPT.",
    icon: faBrain,
    tag: "Active",
  },
  {
    class: 6,
    title: "Homework Helper",
    description: "ChatGPT helps solve math and grammar queries.",
    icon: faRobot,
    tag: "Beta",
  },
  {
    class: 7,
    title: "Reasoning Trainer",
    description: "Practice logic & puzzles with ChatGPT.",
    icon: faLightbulb,
    tag: "Active",
  },
  {
    class: 7,
    title: "Doubt Solver",
    description: "Ask subject-specific questions in chat.",
    icon: faComments,
    tag: "Active",
  },
  {
    class: 8,
    title: "Concept Booster",
    description: "Chat-based explanation of tough concepts.",
    icon: faBrain,
    tag: "Active",
  },
];

const ChatgptClass = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const navigate = useNavigate();
  const filteredFeatures = chatFeatures.filter((f) => f.class === selectedClass);

  return (
   <div className={styles.chatgptClassSection}>
  <div className={styles.topBar}>
    <button className={styles.backBtn} onClick={() => navigate("/")}>
      ← Back
    </button>
  </div>

  <h2>Select Your Class</h2>
  <div className={styles.classSelector}>
    {[6, 7, 8].map((cls) => (
      <button
        key={cls}
        onClick={() => setSelectedClass(cls)}
        className={`${styles.classBtn} ${selectedClass === cls ? styles.active : ""}`}
      >
        Class {cls}
      </button>
    ))}
  </div>

  <div className={styles.chatgptFeatureGrid}>
    {filteredFeatures.map((feature, index) => (
      <div className={styles.chatgptFeatureCard} key={index}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={feature.icon} className={styles.chatgptIcon} />
        </div>
        <div className={styles.featureInfo}>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
          <div className={styles.statusTag}>{feature.tag}</div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default ChatgptClass;
