import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/*" element={<StudentDashboard />} /> */}
        {/* <Route path="/*" element={<TeacherDashboard />} /> */}
        <Route path="/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
