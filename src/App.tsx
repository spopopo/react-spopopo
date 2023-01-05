import './App.css';
import UserInfo from './pages/userInfo/index';
import UserAccess from './pages/userAccess';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserAccess />} />
          <Route path='info' element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
