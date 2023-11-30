import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./LoginPageFD/LoginPage";
import Myaccount from "./MainPageFD/Myaccount";
import Feed from "./MainPageFD/Feed";
import MainPage from './MainPageFD/MainPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Feed />} />
        <Route path="/main/account" element={<Myaccount />} />
      </Routes>
    </Router>
  );
}

export default App;
