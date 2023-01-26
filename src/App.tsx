import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { Main } from './pages/main/Main';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { CreatePost } from './pages/creat-post/CreatePost';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
