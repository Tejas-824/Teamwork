import React from 'react';
import './Courses.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import careerImg from '../../assets/career.jpg';
import communicationImg from '../../assets/communication.jpg';
import computerImg from '../../assets/computer.jpg';
import courseImg from '../../assets/course.jpg';
import interactiveImg from '../../assets/interactive.jpg';
import learningImg from '../../assets/learning.jpg';
import paperImg from '../../assets/paper.jpg';
import practiceImg from '../../assets/practice.jpg';
import recordedImg from '../../assets/recorded.jpg';
import testImg from '../../assets/test.jpg';

const Courses = () => {
  return (
    <section className="course-overview">
      <h2>Courses We Offer</h2>
      <p className="course-subtext">
        Empowering students with the right knowledge, skills, and confidence to succeed in school and beyond.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <img src={careerImg} alt="Board Syllabus" />
          <div className="feature-info">
            <h4>School Academics (Class 6–12)</h4>
            <p>CBSE, ICSE & State Board Syllabus</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={interactiveImg} alt="Interactive Lectures" />
          <div className="feature-info">
            <h4>Interactive Lectures</h4>
            <p>Engaging recorded + live video classes</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={learningImg} alt="Concept-Based Learning" />
          <div className="feature-info">
            <h4>Concept-Based Learning</h4>
            <p>Understand, don’t memorize!</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={practiceImg} alt="Doubt Clearing" />
          <div className="feature-info">
            <h4>Practice & Doubt Clearing</h4>
            <p>Daily questions + expert help</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={recordedImg} alt="Live Classes" />
          <div className="feature-info">
            <h4>Live + Recorded Classes</h4>
            <p>Flexible access to all sessions</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={testImg} alt="Test Series" />
          <div className="feature-info">
            <h4>Full-length Test Series</h4>
            <p>Practice with real exam papers</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={paperImg} alt="Past Paper Analysis" />
          <div className="feature-info">
            <h4>Past Paper Analysis</h4>
            <p>Boost score with smart strategies</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={communicationImg} alt="Spoken English" />
          <div className="feature-info">
            <h4>Spoken English</h4>
            <p>Improve communication skills</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={computerImg} alt="Computer Basics" />
          <div className="feature-info">
            <h4>Computer Basics</h4>
            <p>Essential tech skills for all</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <img src={courseImg} alt="Career Counseling" />
          <div className="feature-info">
            <h4>Career Counseling</h4>
            <p>Guidance for a brighter future</p>
            <div className="card-footer">
              <span className="rating"><i className="fas fa-star"></i> 5.0</span>
              <span className="free-tag">Free Trial</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
