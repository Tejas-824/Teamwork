import { useState } from "react";
import {
  faRobot,
  faLightbulb,
  faBrain,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Class.css";

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

  const filteredFeatures = chatFeatures.filter((f) => f.class === selectedClass);

  return (
    <div className="chatgpt-class-section">
      <h2>Select Your Class</h2>
      <div className="class-selector">
        {[6, 7, 8].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`class-btn ${selectedClass === cls ? "active" : ""}`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className="chatgpt-feature-grid">
        {filteredFeatures.map((feature, index) => (
          <div className="chatgpt-feature-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={feature.icon} className="chatgpt-icon" />
            </div>
            <div className="feature-info">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <div className="status-tag">{feature.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatgptClass;
