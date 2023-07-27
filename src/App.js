import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import Members from './pages/Members';
import Playing from './pages/Playing';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/playing" element={<Playing />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
