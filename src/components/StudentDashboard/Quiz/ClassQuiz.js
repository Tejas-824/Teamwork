import { useState } from "react";
import {
  faClipboardCheck,
  faBrain,
  faFileAlt,
  faStopwatch,
  faCheckCircle,
  faFlask,
  faCalculator,
  faGlobe,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import './ClassQuiz.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quizzesData = [
  // === Class 6 ===
  {
    class: 6,
    title: "General Knowledge Quiz",
    description: "Fun GK quiz for Class 6 students.",
    icon: faClipboardCheck,
    rating: 4.8,
    tag: "Free",
  },
  {
    class: 6,
    title: "Math Concepts Quiz",
    description: "Basic arithmetic & logic practice.",
    icon: faCalculator,
    rating: 4.7,
    tag: "Available",
  },
  {
    class: 6,
    title: "Science Starter Test",
    description: "Beginner quiz in biology and physics.",
    icon: faFlask,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 6,
    title: "English Grammar Quiz",
    description: "Parts of speech & comprehension test.",
    icon: faFileAlt,
    rating: 5.0,
    tag: "Free",
  },
  {
    class: 6,
    title: "Speed Challenge",
    description: "Timed test to improve solving speed.",
    icon: faStopwatch,
    rating: 4.6,
    tag: "Available",
  },
  {
    class: 6,
    title: "World Around Us",
    description: "Quiz about geography and environment.",
    icon: faGlobe,
    rating: 4.8,
    tag: "Free",
  },

  // === Class 7 ===
  {
    class: 7,
    title: "Maths Practice Test",
    description: "Algebra & Geometry concepts quiz.",
    icon: faBrain,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 7,
    title: "English Comprehension",
    description: "Reading & writing skills test.",
    icon: faFileAlt,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 7,
    title: "History & Civics Quiz",
    description: "Basics of Indian History and Civics.",
    icon: faGlobe,
    rating: 4.7,
    tag: "Free",
  },
  {
    class: 7,
    title: "Science Challenge",
    description: "Mix of bio, physics & chemistry MCQs.",
    icon: faFlask,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 7,
    title: "Quick Solve Test",
    description: "Solve 20 questions in 10 mins!",
    icon: faStopwatch,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 7,
    title: "Smart Thinker Quiz",
    description: "Logical reasoning and puzzles.",
    icon: faLightbulb,
    rating: 4.8,
    tag: "Available",
  },

  // === Class 8 ===
  {
    class: 8,
    title: "Science MCQ Test",
    description: "Physics, Chemistry, and Biology quiz.",
    icon: faFileAlt,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 8,
    title: "Algebra Mastery",
    description: "Algebra fundamentals & problem solving.",
    icon: faCalculator,
    rating: 4.8,
    tag: "Available",
  },
  {
    class: 8,
    title: "Geography Test",
    description: "Map skills and global awareness.",
    icon: faGlobe,
    rating: 4.7,
    tag: "Free",
  },
  {
    class: 8,
    title: "Grammar Booster",
    description: "Advanced grammar and writing test.",
    icon: faFileAlt,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 8,
    title: "Logical Thinking",
    description: "Puzzles and pattern recognition.",
    icon: faLightbulb,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 8,
    title: "Quick Timed Test",
    description: "Fast-paced quiz challenge.",
    icon: faStopwatch,
    rating: 4.8,
    tag: "Available",
  },

  // === Class 9 ===
  {
    class: 9,
    title: "Speed Quiz Challenge",
    description: "Timed test to boost problem solving.",
    icon: faStopwatch,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 9,
    title: "Physics Quick Test",
    description: "Motion, Force & Energy quiz.",
    icon: faFlask,
    rating: 4.8,
    tag: "Free",
  },
  {
    class: 9,
    title: "Algebra & Linear Eq.",
    description: "Solving and simplifying equations.",
    icon: faCalculator,
    rating: 4.9,
    tag: "Available",
  },
  {
    class: 9,
    title: "Global Awareness",
    description: "Geography & Current affairs test.",
    icon: faGlobe,
    rating: 4.7,
    tag: "Free",
  },
  {
    class: 9,
    title: "Grammar Test",
    description: "Advanced grammar application quiz.",
    icon: faFileAlt,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 9,
    title: "Science Application",
    description: "Chemistry + Bio concepts mixed test.",
    icon: faBrain,
    rating: 5.0,
    tag: "Available",
  },

  // === Class 10 ===
  {
    class: 10,
    title: "Full Syllabus Mock Test",
    description: "Mock test covering all subjects.",
    icon: faCheckCircle,
    rating: 5.0,
    tag: "Free",
  },
  {
    class: 10,
    title: "Board Pattern Test",
    description: "Class 10 board exam-style test.",
    icon: faClipboardCheck,
    rating: 4.8,
    tag: "Available",
  },
  {
    class: 10,
    title: "Physics Numerical Quiz",
    description: "Work, Power, and Energy.",
    icon: faFlask,
    rating: 4.7,
    tag: "Free",
  },
  {
    class: 10,
    title: "Geography MCQs",
    description: "Resources & Map work.",
    icon: faGlobe,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 10,
    title: "Grammar & Composition",
    description: "Essay writing & sentence correction.",
    icon: faFileAlt,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 10,
    title: "Math Speed Test",
    description: "Algebra + Trigonometry timed quiz.",
    icon: faStopwatch,
    rating: 5.0,
    tag: "Free",
  },

  // === Class 11 ===
  {
    class: 11,
    title: "PCM Weekly Test",
    description: "Test your Physics, Chemistry, Maths weekly.",
    icon: faBrain,
    rating: 4.8,
    tag: "Available",
  },
  {
    class: 11,
    title: "Organic Chemistry Quiz",
    description: "Identify reactions & products.",
    icon: faFlask,
    rating: 5.0,
    tag: "Free",
  },
  {
    class: 11,
    title: "Maths Concepts",
    description: "Functions, Sets, & Relations.",
    icon: faCalculator,
    rating: 4.9,
    tag: "Available",
  },
  {
    class: 11,
    title: "English Test",
    description: "Reading comprehension + analysis.",
    icon: faFileAlt,
    rating: 4.7,
    tag: "Free",
  },
  {
    class: 11,
    title: "General Aptitude",
    description: "Quantitative reasoning & logic.",
    icon: faLightbulb,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 11,
    title: "Geography & Econ",
    description: "World trade and geography mix quiz.",
    icon: faGlobe,
    rating: 4.6,
    tag: "Available",
  },

  // === Class 12 ===
  {
    class: 12,
    title: "Board Preparation Quiz",
    description: "Board-level MCQs and case-based questions.",
    icon: faClipboardCheck,
    rating: 5.0,
    tag: "Free",
  },
  {
    class: 12,
    title: "JEE Practice Test",
    description: "Engineering entrance style test.",
    icon: faBrain,
    rating: 5.0,
    tag: "Available",
  },
  {
    class: 12,
    title: "NEET Bio Test",
    description: "Biology MCQs with case study.",
    icon: faFlask,
    rating: 4.9,
    tag: "Free",
  },
  {
    class: 12,
    title: "Time Management Test",
    description: "Finish in under 20 minutes.",
    icon: faStopwatch,
    rating: 4.8,
    tag: "Free",
  },
  {
    class: 12,
    title: "Logical Skills",
    description: "Reasoning & critical thinking.",
    icon: faLightbulb,
    rating: 4.7,
    tag: "Available",
  },
  {
    class: 12,
    title: "Advanced Grammar",
    description: "Board-level grammar practice.",
    icon: faFileAlt,
    rating: 4.9,
    tag: "Free",
  },
];

const ClassQuiz = () => {
  const [selectedClass, setSelectedClass] = useState(6);

  const filteredQuizzes = quizzesData.filter((quiz) => quiz.class === selectedClass);

  return (
    <div className="quiz-section">
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

      <div className="feature-grid">
        {filteredQuizzes.map((quiz, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={quiz.icon} className="quiz-icon" />
            </div>
            <div className="feature-info">
              <h4>{quiz.title}</h4>
              <p>{quiz.description}</p>
              <div className="card-footer">
                <span className="rating">
                  <i className="fas fa-star"></i> {quiz.rating}
                </span>
                <span className="free-tag">{quiz.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassQuiz;
