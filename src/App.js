import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./LoginPageFD/LoginPage";
import Myaccount from "./MainPageFD/Myaccount";
import Feed from "./MainPageFD/Feed";
import LostItemPage from "./MainPageFD/LostItemPage";
import FoundItemPage from "./MainPageFD/FoundItemPage";
import IndexPage from './MainPageFD/IndexPage';
import PageNotFound from './MainPageFD/PageNotFound';
import CreateAccount from './LoginPageFD/CreateAccount';
import FaqPage from './OtherPage/FaqPage';
import AboutPage from './OtherPage/AboutPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/about" element={<AboutPage/>} />

        <Route path="*" element={<PageNotFound/>} />

        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/account" element={<LoginPage />} />
        <Route path="/main" element={<Feed />} />
        {/* <Route path="/main/account" element={<Myaccount />} /> */}
        <Route path="/main/lost" element={<LostItemPage />} />
        <Route path="/main/found" element={<FoundItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;