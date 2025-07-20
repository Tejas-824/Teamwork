import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faQuestion, faBookOpen, faComments, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  "./Class.module.css";

const doubtData = [
  { class: 6, board: "CBSE", title: "Math Doubts - Class 6", question: "What is the difference between LCM and HCF?", icon: faQuestion, tag: "Unresolved" },
  { class: 6, board: "ICSE", title: "Science Doubts - Class 6", question: "Why does ice float on water?", icon: faBookOpen, tag: "Resolved" },
  { class: 6, board: "State", title: "English Doubts - Class 6", question: "What is a simile in a poem?", icon: faComments, tag: "Unresolved" },
  { class: 7, board: "CBSE", title: "Geography Doubts - Class 7", question: "What are landforms and how are they formed?", icon: faChalkboardTeacher, tag: "Resolved" },
  { class: 7, board: "ICSE", title: "History Doubts - Class 7", question: "Why was Ashoka called 'The Great'?", icon: faQuestion, tag: "Unresolved" },
  { class: 8, board: "State", title: "Civics Doubts - Class 8", question: "What is the role of Panchayati Raj in India?", icon: faBookOpen, tag: "Resolved" },
  { class: 9, board: "CBSE", title: "Physics Doubts - Class 9", question: "State Newton's Laws of Motion.", icon: faChalkboardTeacher, tag: "Unresolved" },
  { class: 10, board: "ICSE", title: "Biology Doubts - Class 10", question: "Explain photosynthesis with diagram.", icon: faComments, tag: "Resolved" },
  { class: 11, board: "State", title: "Chemistry Doubts - Class 11", question: "What are hybrid orbitals?", icon: faBookOpen, tag: "Unresolved" },
  { class: 12, board: "CBSE", title: "Economics Doubts - Class 12", question: "What is GDP? How is it calculated?", icon: faQuestion, tag: "Resolved" },
];

const GroupChatClass = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const [selectedBoard, setSelectedBoard] = useState("CBSE");
  const navigate = useNavigate();

  const filteredDoubts = doubtData.filter(
    (item) => item.class === selectedClass && item.board === selectedBoard
  );

  return (
    <div className="dashboardContainer">
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
      <h2 className="heading">Group Chat Doubts - Class {selectedClass} ({selectedBoard})</h2>

      <div className="selectors">
        <div className="btnGroup">
          {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`selectorBtn ${selectedClass === cls ? "active" : ""}`}
            >
              Class {cls}
            </button>
          ))}
        </div>

        <div className="btnGroup">
          {["CBSE", "ICSE", "State"].map((board) => (
            <button
              key={board}
              onClick={() => setSelectedBoard(board)}
              className={`selectorBtn ${selectedBoard === board ? "active" : ""}`}
            >
              {board}
            </button>
          ))}
        </div>
      </div>

      <div className="quizGrid">
        {filteredDoubts.length > 0 ? (
          filteredDoubts.map((doubt, index) => (
            <div className="quizCard" key={index}>
              <FontAwesomeIcon icon={doubt.icon} className="quizIcon" />
              <h4>{doubt.title}</h4>
              <p>{doubt.question}</p>
              <span className={`statusTag ${doubt.tag === "Resolved" ? "resolved" : "unresolved"}`}>
                {doubt.tag === "Resolved" ? "✔ Resolved" : "⚠ Unresolved"}
              </span>
            </div>
          ))
        ) : (
          <p className="noQuiz">No doubts for Class {selectedClass} ({selectedBoard})</p>
        )}
      </div>
    </div>
  );
};

export default GroupChatClass;