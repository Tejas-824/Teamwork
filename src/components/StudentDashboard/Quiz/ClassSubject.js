import { useState } from "react";
import "./ClassSubject.css";
import {
  faBook,
  faFlask,
  faCalculator,
  faGlobe,
  faPalette,
  faAtom,
  faMapMarkedAlt,
  faCode,
  faTheaterMasks,
  faLandmark,
  faLaptopCode,
  faPenNib,
  faRobot 
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const subjectsData = [
  { class: 6, title: "Mathematics", description: "Number systems, geometry, and basic algebra.", icon: faCalculator, rating: 4.8, tag: "Core" },
  { class: 6, title: "Science", description: "Introduction to physics, chemistry, biology.", icon: faFlask, rating: 4.9, tag: "Core" },
  { class: 6, title: "Social Science", description: "History, civics, and geography basics.", icon: faGlobe, rating: 4.7, tag: "Core" },
  { class: 6, title: "Art", description: "Creative expression with drawing and colors.", icon: faPalette, rating: 4.5, tag: "Optional" },
  { class: 6, title: "English", description: "Grammar, comprehension, and writing skills.", icon: faBook, rating: 4.9, tag: "Core" },
  { class: 6, title: "General Knowledge", description: "Current affairs and facts.", icon: faAtom, rating: 4.6, tag: "Optional" },

  { class: 7, title: "Mathematics", description: "Algebra, equations, and geometry.", icon: faCalculator, rating: 5.0, tag: "Core" },
  { class: 7, title: "Science", description: "Physics, chemistry & life sciences.", icon: faFlask, rating: 4.8, tag: "Core" },
  { class: 7, title: "Social Science", description: "History, polity & economics.", icon: faGlobe, rating: 4.7, tag: "Core" },
  { class: 7, title: "English", description: "Grammar and advanced writing.", icon: faBook, rating: 4.9, tag: "Core" },
  { class: 7, title: "Art", description: "Advanced sketching and color theory.", icon: faPalette, rating: 4.4, tag: "Optional" },
 
  { class: 7, title: "Computer", description: "Basics of coding and MS Office.", icon: faAtom, rating: 4.5, tag: "Optional" },
{ class: 8, title: "Science", description: "Intro to force, energy, and life processes.", icon: faFlask, rating: 4.8, tag: "Core" },
{ class: 8, title: "Mathematics", description: "Algebra, exponents, and data handling.", icon: faCalculator, rating: 4.7, tag: "Core" },
{ class: 8, title: "English", description: "Grammar, creative writing, and literature.", icon: faBook, rating: 4.9, tag: "Core" },
{ class: 8, title: "History & Civics", description: "Modern history and citizenship.", icon: faGlobe, rating: 4.6, tag: "Core" },
{ class: 8, title: "Artificial Intelligence", description: "AI basics & machine thinking.", icon: faRobot, rating: 4.5, tag: "Optional" },
{ class: 8, title: "Visual Arts", description: "Perspective, color mixing, and collage.", icon: faPalette, rating: 4.4, tag: "Optional" },
  
{ class: 9, title: "Science", description: "Matter, atoms, laws of motion, and tissues.", icon: faFlask, rating: 4.8, tag: "Core" },
{ class: 9, title: "Mathematics", description: "Linear equations, geometry, and stats.", icon: faCalculator, rating: 4.7, tag: "Core" },
{ class: 9, title: "English", description: "Literary devices and analysis.", icon: faBook, rating: 4.9, tag: "Core" },
{ class: 9, title: "Geography & Economics", description: "Climate, population, resources.", icon: faMapMarkedAlt, rating: 4.6, tag: "Core" },
{ class: 9, title: "Python Basics", description: "First step to real-world programming.", icon: faCode, rating: 4.5, tag: "Optional" },
{ class: 9, title: "Music & Drama", description: "Performance skills & storytelling.", icon: faTheaterMasks, rating: 4.3, tag: "Optional" },

 { class: 10, title: "Science", description: "Light, electricity, reactions, and control.", icon: faFlask, rating: 4.8, tag: "Core" },
{ class: 10, title: "Mathematics", description: "Quadratics, trigonometry, and statistics.", icon: faCalculator, rating: 4.9, tag: "Core" },
{ class: 10, title: "English", description: "Comprehension & advanced grammar.", icon: faBook, rating: 4.9, tag: "Core" },
{ class: 10, title: "Civics & History", description: "Democracy and modern India.", icon: faLandmark, rating: 4.7, tag: "Core" },
{ class: 10, title: "Web Development", description: "HTML, CSS, and website building.", icon: faLaptopCode, rating: 4.6, tag: "Optional" },
{ class: 10, title: "Design & Animation", description: "Canva, drawing tablets, and basics of animation.", icon: faPenNib, rating: 4.5, tag: "Optional" },
   
{ class: 11, title: "Physics", description: "Mechanics, thermodynamics, and waves.", icon: faFlask, rating: 4.9, tag: "Core" },
{ class: 11, title: "Chemistry", description: "Atomic structure, bonding, and states of matter.", icon: faFlask, rating: 4.8, tag: "Core" },
{ class: 11, title: "Mathematics", description: "Sets, relations, functions, and calculus basics.", icon: faCalculator, rating: 4.7, tag: "Core" },
{ class: 11, title: "Biology", description: "Plant physiology and human anatomy.", icon: faAtom, rating: 4.8, tag: "Optional" },
{ class: 11, title: "English", description: "Advanced grammar and writing skills.", icon: faBook, rating: 4.6, tag: "Core" },
{ class: 11, title: "Computer Science", description: "Programming basics and problem-solving.", icon: faAtom, rating: 4.7, tag: "Optional" },

{ class: 12, title: "Physics", description: "Electrostatics, magnetism, optics, and modern physics.", icon: faFlask, rating: 5.0, tag: "Core" },
{ class: 12, title: "Chemistry", description: "Organic chemistry, kinetics, and coordination compounds.", icon: faFlask, rating: 4.9, tag: "Core" },
{ class: 12, title: "Mathematics", description: "Integrals, probability, vectors, and 3D geometry.", icon: faCalculator, rating: 4.8, tag: "Core" },
{ class: 12, title: "Biology", description: "Genetics, evolution, human health, and disease.", icon: faAtom, rating: 4.9, tag: "Optional" },
{ class: 12, title: "English", description: "Literature, unseen passages, and writing skills.", icon: faBook, rating: 4.7, tag: "Core" },
{ class: 12, title: "Computer Science", description: "Python, data structures, and file handling.", icon: faAtom, rating: 4.8, tag: "Optional" },

];

const ClassSubject = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const filteredSubjects = subjectsData.filter((subject) => subject.class === selectedClass);

  return (
    <div className="subject-section">
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

      <div className="subject-grid">
        {filteredSubjects.map((subject, index) => (
          <div className="subject-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={subject.icon} className="subject-icon" />
            </div>
            <div className="subject-info">
              <h4>{subject.title}</h4>
              <p>{subject.description}</p>
              <div className="card-footer">
                <span className="rating">
                  <i className="fas fa-star"></i> {subject.rating}
                </span>
                <span className="tag">{subject.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSubject;
