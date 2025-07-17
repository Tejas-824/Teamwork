import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faBars, faBell, faMoon, faSun, faChalkboardTeacher, faVideo, faBookOpen,
  faFileAlt, faQuestionCircle, faComments, faUser, faCogs, faSignOutAlt, faChevronDown,
  faChevronUp, faGraduationCap, faBook, faSchool, faBuildingColumns
} from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.jpg";

import ClassQuiz from "./Quiz/Class";
import SubjectQuiz from './Quiz/Subject';
// import ClassDoubtSession from './DoubtSession/Class';
// import SubjectDoubtSession from './DoubtSession/Student';

import "./Teacher.css";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [liveClassMenuOpen, setLiveClassMenuOpen] = useState(false);
  const [studyMaterialMenuOpen, setStudyMaterialMenuOpen] = useState(false);
  const [doubtSessionMenuOpen, setDoubtSessionMenuOpen] = useState(false); // NEW STATE
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
          <h2 className="sidebar-subtitle">Teacher Dashboard</h2>

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

          {/* Provide Study Material */}
          <div className="nav-item" onClick={() => setStudyMaterialMenuOpen(!studyMaterialMenuOpen)}>
            <FontAwesomeIcon icon={faBookOpen} className="icon" /> Provide Study Material
            <FontAwesomeIcon icon={studyMaterialMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
          </div>
          {studyMaterialMenuOpen && (
            <div className="submenu">
              <div className="submenu-item"><FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faBook} className="icon" /> Subject</div>
              <div className="submenu-item"><FontAwesomeIcon icon={faBook} className="icon" /> Pdf</div>
            </div>
          )}

          {/* Conduct Doubt Session */}
         <div className="nav-item" onClick={() => setDoubtSessionMenuOpen(!doubtSessionMenuOpen)}>
  <FontAwesomeIcon icon={faBookOpen} className="icon" /> Conduct Doubt Session
  <FontAwesomeIcon icon={doubtSessionMenuOpen ? faChevronUp : faChevronDown} className="arrow" />
</div>

{doubtSessionMenuOpen && (
  <div className="submenu">
    <Link to="/doubt/class" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Class
    </Link>
    <Link to="/doubt/subject" className="submenu-item" onClick={closeSidebar}>
      <FontAwesomeIcon icon={faBook} className="icon" /> Subject
    </Link>
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

          {/* Performance Check */}
          <div className="nav-item" onClick={() => setDoubtMenuOpen(!doubtMenuOpen)}>
            <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Performance Check
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

          {/* Group Chat */}
          <div className="nav-item" onClick={() => setChatgptMenuOpen(!chatgptMenuOpen)}>
  <FontAwesomeIcon icon={faComments} className="icon" /> Group Chat
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
                <div className="dashboard-welcome">
                  <div>
                    <h2>Welcome back, Teacher!</h2>
                    <p>Start exploring your subjects and lessons to continue your journey of learning.</p>
                    <button className="learn-more">Learn more</button>
                    <div className="buy-lesson">
                      <button className="primary-button">Buy Lesson</button>
                    </div>
                  </div>
                  <div className="illustration" style={{ maxWidth: 400 }}>
        <img src="/illustration-dashboard.svg" alt="Dashboard Illustration" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  }
/>
    <Route path="quiz" element={<ClassQuiz />} />
    <Route path="subject" element={<SubjectQuiz />} />
    {/* <Route path="doubt/class" element={<ClassDoubtSession />} />
    <Route path="doubt/subject" element={<SubjectDoubtSession />} /> */}

 
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
