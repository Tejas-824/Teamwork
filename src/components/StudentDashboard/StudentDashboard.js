import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faBell,
  faChalkboardTeacher,
  faVideo,
  faBookOpen,
  faFileAlt,
  faQuestionCircle,
  faComments,
  faUser,
  faCogs,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
  faGraduationCap,
  faBook,
  faSchool,
  faBuildingColumns,
  faUserEdit
} from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.jpg";

import ClassQuiz from "./Quiz/ClassQuiz";
import ClassSubject from "./Quiz/ClassSubject";
import ClassDoubt from './DoubtSession/Class'; 
import SubjectDoubt from './DoubtSession/Subject';
import ChatGptClass from './ChatGpt/Class';
import ChatGptSubject from './ChatGpt/Subject';

import styles from "./Dashboard.module.css";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [liveClassMenuOpen, setLiveClassMenuOpen] = useState(false);
  const [studyMaterialMenuOpen, setStudyMaterialMenuOpen] = useState(false);
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  const [doubtMenuOpen, setDoubtMenuOpen] = useState(false);
  const [chatgptMenuOpen, setChatgptMenuOpen] = useState(false);

  const sidebarRef = useRef(null);
  const [date, setDate] = useState(new Date());

  const closeSidebar = () => {
    setSidebarOpen(false);
    setQuizMenuOpen(false);
    setDoubtMenuOpen(false);
    setChatgptMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
      if (!event.target.closest(`.${styles.profileDropdown}`)) {
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

  const handleHamburgerTouch = (event) => {
    event.stopPropagation(); // Prevent touchstart from closing sidebar immediately
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <button
          className={styles.hamburgerButton}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          onTouchStart={handleHamburgerTouch}
          aria-label="Toggle Sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={styles.logoContainer}>
          <img src={logoImg} alt="LGA Logo" />
          <span className={styles.logoTitle}>
            <span className={styles.black}>Learning</span>
            <span className={styles.blue}>Guide</span>
            <span className={styles.black}> { 'Academy'}</span>
          </span>
        </div>

        <div className={styles.headerControls}>
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
          <button className={styles.notificationButton}>
            <FontAwesomeIcon icon={faBell} />
            <span className={styles.badge}></span>
          </button>
          <div className={styles.profileDropdown}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JFHKoXSA92jzBf-BYa933eKKpJcj2JxRLpb7O_3zWBT3Aeh5IQrzyjo3SaXiwYKaRxI&usqp=CAU"
              alt="User"
              className={styles.profileAvatar}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><FontAwesomeIcon icon={faUser} /> View Profile</li>
                <li><FontAwesomeIcon icon={faUserEdit} /> Edit Profile</li>
                <li><FontAwesomeIcon icon={faCogs} /> Settings</li>
                <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        <aside
          ref={sidebarRef}
          className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        >
          <h2 className={styles.sidebarSubtitle}>Student Dashboard</h2>

          {/* My Class */}
          <div className={styles.navItem} onClick={() => setSubmenuOpen(!submenuOpen)}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className={styles.icon} /> My Class
            <FontAwesomeIcon icon={submenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {submenuOpen && (
            <div className={styles.submenu}>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faSchool} className={styles.icon} /> ICSC</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faBuildingColumns} className={styles.icon} /> CBSE</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> JAC</div>
            </div>
          )}

          {/* Live Class */}
          <div className={styles.navItem} onClick={() => setLiveClassMenuOpen(!liveClassMenuOpen)}>
            <FontAwesomeIcon icon={faVideo} className={styles.icon} /> Live Class
            <FontAwesomeIcon icon={liveClassMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {liveClassMenuOpen && (
            <div className={styles.submenu}>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faSchool} className={styles.icon} /> ICSC</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faBuildingColumns} className={styles.icon} /> CBSE</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> JAC</div>
            </div>
          )}

          {/* Study Material */}
          <div className={styles.navItem} onClick={() => setStudyMaterialMenuOpen(!studyMaterialMenuOpen)}>
            <FontAwesomeIcon icon={faBookOpen} className={styles.icon} /> Study Material
            <FontAwesomeIcon icon={studyMaterialMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {studyMaterialMenuOpen && (
            <div className={styles.submenu}>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject</div>
            </div>
          )}

          {/* Quiz/Test */}
          <div className={styles.navItem} onClick={() => setQuizMenuOpen(!quizMenuOpen)}>
            <FontAwesomeIcon icon={faFileAlt} className={styles.icon} /> Quiz/Test
            <FontAwesomeIcon icon={quizMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {quizMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/quiz" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/subject" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </Link>
            </div>
          )}

          {/* Doubt Session */}
          <div className={styles.navItem} onClick={() => setDoubtMenuOpen(!doubtMenuOpen)}>
            <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} /> Doubt Session
            <FontAwesomeIcon icon={doubtMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {doubtMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/doubt/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/doubt/subject" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </Link>
            </div>
          )}

          {/* ChatGPT */}
          <div className={styles.navItem} onClick={() => setChatgptMenuOpen(!chatgptMenuOpen)}>
            <FontAwesomeIcon icon={faComments} className={styles.icon} /> ChatGPT
            <FontAwesomeIcon icon={chatgptMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {chatgptMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/chatgpt/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/chatgpt/subject" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </Link>
            </div>
          )}
        </aside>

        <main className={styles.dashboardMain}>
          <Routes>
            <Route
              path=""
              element={
                <div className={styles.dashboardMain}>
                  <div className={styles.welcomeSection}>
                    <div className={styles.welcomeText}>
                      <h2>Welcome back, Student!</h2>
                      <p>Start exploring your subjects and lessons to continue your journey of learning.</p>
                    </div>
                    <div className={styles.welcomeImage}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_85t0H4sD9dihzdpaaKtezIpBhE16Mjhipg&s"
                        alt="Welcome Illustration"
                      />
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className={styles.statsSection}>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>🏫</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>35</div>
                        <div className={styles.statLabel}>Schools</div>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>👩‍🏫</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>200</div>
                        <div className={styles.statLabel}>Teachers</div>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>🎓</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>1000</div>
                        <div className={styles.statLabel}>Students</div>
                      </div>
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className={styles.bottomSection}>
                    <div className={`${styles.sectionBox} ${styles.attendance}`}>
                      <h3>Attendance</h3>
                      <Calendar
                        onChange={setDate}
                        value={date}
                        className={styles.customCalendar}
                      />
                      <p className={styles.selectedDate}>Selected Date: {date.toDateString()}</p>
                    </div>

                    {/* Activities */}
                    <div className={`${styles.sectionBox} ${styles.activitiesSection}`}>
                      <div className={styles.activitiesHeader}>
                        <h3>Activities and Events</h3>
                        <button className={styles.viewAllButton}>View All</button>
                      </div>
                      <ul className={styles.activitiesList}>
                        <li>Science Fair for Classes 6-8</li>
                        <li>Math Olympiad for Classes 9-10</li>
                        <li>Art Competition for Classes 6-12</li>
                        <li>Sports Day - Inter-school</li>
                      </ul>
                    </div>
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