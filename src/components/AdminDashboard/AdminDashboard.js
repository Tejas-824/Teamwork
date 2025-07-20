import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faBars, faBell, faChalkboardTeacher,
  faVideo, faFileAlt, faQuestionCircle, faUser, faCogs, faSignOutAlt,
  faChevronDown, faChevronUp, faGraduationCap, faBook, faSchool,
  faBuildingColumns, faUserEdit, faFolderOpen, faChartLine, faUsers
} from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.jpg";

import QuizClassOverview from './Quiz/Class';
import QuizSubjectOverview from './Quiz/Subject';
import ClassDoubtSession from './DoubtSession/Class';
import SubjectDoubtSession from './DoubtSession/Subject';
import ClassPerformance from './Performance/Class';
import SubjectPerformance from './Performance/Subject';

import styles from "./Admin.module.css";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [liveClassMenuOpen, setLiveClassMenuOpen] = useState(false);
  const [studyMaterialMenuOpen, setStudyMaterialMenuOpen] = useState(false);
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  const [doubtMenuOpen, setDoubtMenuOpen] = useState(false);
  const [performanceMenuOpen, setPerformanceMenuOpen] = useState(false);
  const [ChatgptMenuOpen, setChatgptMenuOpen] = useState(false);

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
    <div className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <div className={styles.leftHeaderSection}>
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
        </div>

        <div className={styles.headerControls}>
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>

          <button className={styles.notificationButton}>
            <FontAwesomeIcon icon={faBell} />
            <span className={styles.badge}></span>
          </button>

          <div className={`${styles.profileDropdown} profile-dropdown`}>
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
        <aside ref={sidebarRef} className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
          <h2 className={styles.sidebarSubtitle}>Admin Dashboard</h2>

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
            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} /> Study Material
            <FontAwesomeIcon icon={studyMaterialMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {studyMaterialMenuOpen && (
            <div className={styles.submenu}>
              <div className={styles.submenuItem}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </div>
              <div className={styles.submenuItem}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Subject
              </div>
              <div className={styles.submenuItem}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} /> Pdf
              </div>
            </div>
          )}

          {/* Quiz/Test */}
          <div className={styles.navItem} onClick={() => setQuizMenuOpen(!quizMenuOpen)}>
            <FontAwesomeIcon icon={faFileAlt} className={styles.icon} /> Quiz/Test
            <FontAwesomeIcon icon={quizMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {quizMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/quiz/class" className={styles.submenuItem} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Class
              </Link>
              <Link to="/quiz/subject" className={styles.submenuItem} onClick={closeSidebar}>
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

          {/* Performance check */}
          <div className={styles.navItem} onClick={() => setPerformanceMenuOpen(!performanceMenuOpen)}>
            <FontAwesomeIcon icon={faChartLine} className={styles.icon} /> Performance Check
            <FontAwesomeIcon icon={performanceMenuOpen ? faChevronUp : faChevronDown} className={styles.arrow} />
          </div>
          {performanceMenuOpen && (
            <div className={styles.submenu}>
              <Link to="/performance/subject" className={styles.submenuItem} onClick={closeSidebar}>
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
                      <h2>Welcome back, Admin!</h2>
                      <p>Start exploring your subjects and lessons to continue your journey of learning.</p>
                    </div>
                    <div className={styles.welcomeImage}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2G61LLE3MWiaLwlzdyq2L-6m9Vc2tkAcR_A&s"
                        alt="Admin image"
                      />
                    </div>
                  </div>

                  <div className={styles.dashboardContainer}>
                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                      <div className={styles.statCard}>
                        <h3>Active Users</h3>
                        <p>1,245</p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Scores Created</h3>
                        <p>320</p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Avg. Session</h3>
                        <p>38 mins</p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Assignments Submitted</h3>
                        <p>1,024</p>
                      </div>
                    </div>

                    {/* Assignments & Performance Section */}
                    <div className={styles.mainContentRow}>
                      <div className={styles.assignmentContainer}>
                        <div className={styles.assignmentHeader}>
                          <h3>New Assignments</h3>
                          <p>Last 7 Days</p>
                        </div>
                        <div className={styles.progressBarSection}>
                          <div className={styles.progressItem}>
                            <p>Worksheets</p>
                            <div className={styles.progressBar}><div className={styles.fill} style={{ width: "70%" }} /></div>
                          </div>
                          <div className={styles.progressItem}>
                            <p>Performance</p>
                            <div className={styles.progressBar}><div className={styles.fill} style={{ width: "85%" }} /></div>
                          </div>
                        </div>
                      </div>

                      {/* Circular Progress */}
                      <div className={styles.circularProgressContainer}>
                        <h3>Assignment Success</h3>
                        <p>Last 7 Days</p>
                        <div className={styles.circleWrapper}>
                          <div className={styles.circleOuter}>
                            <div className={styles.circleInner}>90%</div>
                          </div>
                        </div>
                        <p className={styles.positiveGradeLabel}>Positive Grades</p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className={styles.quickActions}>
                      <button className={styles.actionButton}>Add Teacher</button>
                      <button className={styles.actionButton}>Remove Student</button>
                      <button className={styles.actionButton}>Send Notification</button>
                      <button className={styles.actionButton}>Create Assignment</button>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/quiz/class" element={<QuizClassOverview />} />
            <Route path="/quiz/subject" element={<QuizSubjectOverview />} />
            <Route path="/doubt/class" element={<ClassDoubtSession />} />
            <Route path="/doubt/subject" element={<SubjectDoubtSession />} />
            <Route path="/performance/class" element={<ClassPerformance />} />
            <Route path="/performance/subject" element={<SubjectPerformance />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;