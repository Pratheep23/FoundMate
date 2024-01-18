import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./LoginPageFD/LoginPage";
import Myaccount from "./MainPageFD/Myaccount";
import Feed from "./MainPageFD/Feed";
import LostItemPage from "./MainPageFD/LostItemPage";
import FoundItemPage from "./MainPageFD/FoundItemPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Feed />} />
        <Route path="/main/account" element={<Myaccount />} />
        <Route path="/main/lost" element={<LostItemPage />} />
        <Route path="/main/found" element={<FoundItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
