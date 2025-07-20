import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faBell, faChalkboardTeacher, faVideo, faBookOpen, faFileAlt, faQuestionCircle, faComments, faUser, faCogs, faSignOutAlt, faChevronDown, faChevronUp, faGraduationCap, faBook, faSchool, faBuildingColumns, faUserEdit, faFolderOpen, faChartLine, faUsers } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.jpg";

import ClassQuiz from "./Quiz/Class";
import SubjectQuiz from './Quiz/Subject';
import ClassDoubtSession from './DoubtSession/Class';
import SubjectDoubtSession from './DoubtSession/Subject';
import GroupChatClass from './GroupChat/Class';
import GroupChatSubject from './GroupChat/Subject';

import styles from "./Teacher.module.css";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [liveClassMenuOpen, setLiveClassMenuOpen] = useState(false);
  const [studyMaterialMenuOpen, setStudyMaterialMenuOpen] = useState(false);
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  const [doubtMenuOpen, setDoubtMenuOpen] = useState(false);
  const [chatgptMenuOpen, setChatgptMenuOpen] = useState(false);
  const [doubtSessionMenuOpen, setDoubtSessionMenuOpen] = useState(false);
  const [performanceMenuOpen, setPerformanceMenuOpen] = useState(false);

  const sidebarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const closeSidebar = () => {
    setSidebarOpen(false);
    setQuizMenuOpen(false);
    setDoubtMenuOpen(false);
    setChatgptMenuOpen(false);
    setSubmenuOpen(false);
    setLiveClassMenuOpen(false);
    setStudyMaterialMenuOpen(false);
    setDoubtSessionMenuOpen(false);
    setPerformanceMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
      if (!event.target.closest(".profileDropdown")) {
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
    <div className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <button className={styles.hamburgerButton} onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={styles.logoContainer}>
          <img src={logoImg} alt="LGA Logo" />
          <span className={styles.logoTitle}>
            <span className={styles.black}>Learning</span>
            <span className={styles.blue}>Guide</span>
            <span className={styles.black}> Academy</span>
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
        <aside ref={sidebarRef} className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
          <h2 className={styles.sidebarSubtitle}>Teacher Dashboard</h2>

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

          {/*Take Live Class */}
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
            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />Provide Study Material
            <FontAwesomeIcon icon={studyMaterialMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {studyMaterialMenuOpen && (
            <div className={styles.submenu}>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject</div>
              <div className={styles.submenuItem}><FontAwesomeIcon icon={faBook} className={styles.icon} /> Pdf</div>
            </div>
          )}

          {/* Doubt Session */}
          <div className={styles.navItem} onClick={() => setDoubtSessionMenuOpen(!doubtSessionMenuOpen)}>
            <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} />Conduct Doubt Session
            <FontAwesomeIcon icon={doubtSessionMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {doubtSessionMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/doubt/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/doubt/subject" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </Link>
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

          {/* Group Discussion */}
          <div className={styles.navItem} onClick={() => setChatgptMenuOpen(!chatgptMenuOpen)}>
            <FontAwesomeIcon icon={faComments} className={styles.icon} /> Group Chat
            <FontAwesomeIcon icon={chatgptMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {chatgptMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/groupchat/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/groupchat/subject" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </Link>
            </div>
          )}

          {/* Performance Check */}
          <div className={styles.navItem} onClick={() => setPerformanceMenuOpen(!performanceMenuOpen)}>
            <FontAwesomeIcon icon={faChartLine} className={styles.icon} /> Performance Check
            <FontAwesomeIcon icon={performanceMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {performanceMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/performance/student" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Student
              </Link>
              <Link to="/performance/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faUsers} className={styles.icon} /> Class
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
                      <h2>Welcome back, Teacher!</h2>
                      <p>Explore your classes, quizzes, and study resources to enhance your learning journey.</p>
                    </div>
                    <div className={styles.welcomeImage}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTxGlIoMtIT96G4dmbTMMP_3WmXYASo9YBw&s"
                        alt="Welcome Illustration"
                      />
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className={styles.statsSection}>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>📚</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>5</div>
                        <div className={styles.statLabel}>Subjects Enrolled</div>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>🏫</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>3</div>
                        <div className={styles.statLabel}>Classes Attended</div>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statIcon}>🗓️</span>
                      <div className={styles.statInfo}>
                        <div className={styles.statNumber}>12</div>
                        <div className={styles.statLabel}>Quizzes Completed</div>
                      </div>
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className={styles.bottomSection}>
                    <div className={`${styles.sectionBox} ${styles.attendance}`}>
                      <h3>My Attendance</h3>
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
                        <h3>Upcoming Activities</h3>
                        <button className={styles.viewAllButton}>View All</button>
                      </div>
                      <ul className={styles.activitiesList}>
                        <li>Science Fair (Classes 6–8)</li>
                        <li>Math Olympiad (Classes 9–10)</li>
                        <li>Art Competition (Classes 6–12)</li>
                        <li>Inter-school Sports Day</li>
                      </ul>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="quiz" element={<ClassQuiz />} />
            <Route path="subject" element={<SubjectQuiz />} />
            <Route path="/doubt/class" element={<ClassDoubtSession />} />
            <Route path="/doubt/subject" element={<SubjectDoubtSession />} />
            <Route path="/groupchat/class" element={<GroupChatClass />} />
            <Route path="/groupchat/subject" element={<GroupChatSubject />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;