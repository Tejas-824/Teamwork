import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<StudentDashboard />} />
        {/* <Route path="/*" element={<TeacherDashboard />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
