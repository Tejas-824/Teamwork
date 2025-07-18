import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faBell, faMoon, faSun, faChalkboardTeacher, faVideo, faBookOpen, faFileAlt, faQuestionCircle, faComments, faUser, faCogs, faSignOutAlt, faChevronDown, faChevronUp, faGraduationCap, faBook, faSchool, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.jpg";

import ClassQuiz from "./Quiz/ClassQuiz";
import ClassSubject from "./Quiz/ClassSubject";
import ClassDoubt from './DoubtSession/Class'; 
import SubjectDoubt from './DoubtSession/Subject';
import ChatGptClass from './ChatGpt/Class';
import ChatGptSubject from './ChatGpt/Subject';

import "./Student.css";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [liveClassMenuOpen, setLiveClassMenuOpen] = useState(false);
  const [studyMaterialMenuOpen, setStudyMaterialMenuOpen] = useState(false);
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  const [doubtMenuOpen, setDoubtMenuOpen] = useState(false);
  const [chatgptMenuOpen, setChatgptMenuOpen] = useState(false);

  const sidebarRef = useRef(null);

   const closeSidebar = () => {
  setSidebarOpen(false);
  setQuizMenuOpen(false);
  setDoubtMenuOpen(false);
  setChatgptMenuOpen(false);
};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
      if (!event.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
      <header className={`dashboard-header ${darkMode ? "dark" : ""}`}>
        <button className="hamburger-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="logo-container">
          <img src={logoImg} alt="LGA Logo" />
          <span className="logo-title">
            <span className="black">Learning </span>
            <span className="blue">Guide </span>
            <span className="black">Academy</span>
          </span>
        </div>

        <div className="header-controls">
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
          <button className="notification-button">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge"></span>
          </button>
          <button className="toggle-theme-button" onClick={() => setDarkMode(!darkMode)}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <div className="profile-dropdown">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JFHKoXSA92jzBf-BYa933eKKpJcj2JxRLpb7O_3zWBT3Aeh5IQrzyjo3SaXiwYKaRxI&usqp=CAU"
              alt="User"
              className="profile-avatar"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><FontAwesomeIcon icon={faUser} /> Profile</li>
                <li><FontAwesomeIcon icon={faCogs} /> Settings</li>
                <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <div className="main-content">
        <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <h2 className="sidebar-subtitle">Student Dashboard</h2>

          {/* My Class */}
          <div className="nav-item" onClick={() => setSubmenuOpen(!submenuOpen)}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" /> My Class
            <FontAwesomeIcon icon={submenuOpen ? faChevronUp : faChevronDown} className="arrow" />
          </div>
          {submenuOpen && (
            <div className="submenu">
              <div className="submenu-item"><FontAwesomeIcon icon={faSchool} className="icon" /> ICSC</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faBuildingColumns} className="icon" /> CBSE</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faGraduationCap} className="icon" /> JAC</div>
            </div>
          )}

          {/* Live Class */}
          <div className="nav-item" onClick={() => setLiveClassMenuOpen(!liveClassMenuOpen)}>
            <FontAwesomeIcon icon={faVideo} className="icon" /> Live Class
            <FontAwesomeIcon icon={liveClassMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
          </div>
          {liveClassMenuOpen && (
            <div className="submenu">
              <div className="submenu-item"><FontAwesomeIcon icon={faSchool} className="icon" /> ICSC</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faBuildingColumns} className="icon" /> CBSE</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faGraduationCap} className="icon" /> JAC</div>
            </div>
          )}

          {/* Study Material */}
          <div className="nav-item" onClick={() => setStudyMaterialMenuOpen(!studyMaterialMenuOpen)}>
            <FontAwesomeIcon icon={faBookOpen} className="icon" /> Study Material
            <FontAwesomeIcon icon={studyMaterialMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
          </div>
          {studyMaterialMenuOpen && (
            <div className="submenu">
              <div className="submenu-item"><FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faBook} className="icon" /> Subject</div>
            </div>
          )}
        {/* Quiz/Test */}
<div className="nav-item" onClick={() => setQuizMenuOpen(!quizMenuOpen)}>
  <FontAwesomeIcon icon={faFileAlt} className="icon" /> Quiz/Test
  <FontAwesomeIcon icon={quizMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
</div>

{quizMenuOpen && (
  <div className="submenu">
    <Link to="/quiz" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class
    </Link>
    <Link to="/subject" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faBook} className="icon" /> Subject
    </Link>
  </div>
)}

{/* Doubt Session */}
<div className="nav-item" onClick={() => setDoubtMenuOpen(!doubtMenuOpen)}>
  <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Doubt Session
  <FontAwesomeIcon icon={doubtMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
</div>

{doubtMenuOpen && (
  <div className="submenu">
    <Link to="/doubt/class" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class
    </Link>
    <Link to="/doubt/subject" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faBook} className="icon" /> Subject
    </Link>
  </div>
)}

{/* ChatGPT */}
<div className="nav-item" onClick={() => setChatgptMenuOpen(!chatgptMenuOpen)}>
  <FontAwesomeIcon icon={faComments} className="icon" /> ChatGPT
  <FontAwesomeIcon icon={chatgptMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
</div>

{chatgptMenuOpen && (
  <div className="submenu">
    <Link to="/chatgpt/class" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class
    </Link>
    <Link to="/chatgpt/subject" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faBook} className="icon" /> Subject
    </Link>
  </div>
)}
   </aside>

        <main className="dashboard-main">
          <Routes>
<Route
  path=""
  element={
    <div className="dashboard-main">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome back, Student!</h2>
          <p>Start exploring your subjects and lessons to continue your journey of learning.</p>
        </div>
        <div className="welcome-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMSC_DJJGrA8-Ju_9xsl_p43MsCWFF6hVGQ&s"
            alt="Welcome Illustration"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-box">
          <span className="stat-icon">🏫</span>
          <div className="stat-info">
            <div className="stat-number">35</div>
            <div className="stat-label">Schools</div>
          </div>
        </div>
        <div className="stat-box">
          <span className="stat-icon">👩‍🏫</span>
          <div className="stat-info">
            <div className="stat-number">200</div>
            <div className="stat-label">Teachers</div>
          </div>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🎓</span>
          <div className="stat-info">
            <div className="stat-number">1000</div>
            <div className="stat-label">Students</div>
          </div>
        </div>
      </div>

      {/* Attendance & Activities Section */}
      <div className="bottom-section">
        <div className="attendance">
          <h3>Attendance</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMSC_DJJGrA8-Ju_9xsl_p43MsCWFF6hVGQ&s"
            alt="Calendar"
          />
        </div>

        <div className="activities-section">
          <div className="activities-header">
            <h3>Activities and Events</h3>
            <button className="view-all-button">View All</button>
          </div>
          <ul className="activities-list">
            <li>Science Fair for Classes 6-8</li>
            <li>Math Olympiad for Classes 9-10</li>
            <li>Art Competition for Classes 6-12</li>
            <li>Sports Day - Inter-school</li>
          </ul>
        </div>
      </div>

      {/* Optional Illustration */}
      <div className="illustration" style={{ maxWidth: 400, marginTop: "2rem" }}>
        <img src="/illustration-dashboard.svg" alt="Dashboard Illustration" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  }
/>

            <Route path="quiz" element={<ClassQuiz />} />
            <Route path="subject" element={<ClassSubject />} />
            <Route path="/doubt/class" element={<ClassDoubt />} />
            <Route path="/doubt/subject" element={<SubjectDoubt />} />
            <Route path="/chatgpt/class" element={<ChatGptClass />} />
            <Route path="/chatgpt/subject" element={<ChatGptSubject />} />

          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
