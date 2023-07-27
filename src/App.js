import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import Members from './pages/members/Members';
import Playing from './pages/playing/Playing';
import MyProfile from './pages/myProfile/MyProfile';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import EditProfile from './pages/myProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/playing" element={<Playing />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
