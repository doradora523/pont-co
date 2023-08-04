import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/App.scss';
import kakaoInitialize from './kakaoInitialize';
import Members from './pages/members/Members';
import Playing from './pages/playing/Playing';
import PlayingGame from './pages/playing/PlayingGame';
import MyProfile from './pages/myProfile/MyProfile';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import EditProfile from './pages/myProfile/EditProfile';
import DoneGame from './pages/playing/DoneGame';
import Splash from './pages/onBoarding/Splash';
import OnBoarding from './pages/onBoarding/OnBoarding';
import AuthProvider from './components/auth/AuthProvider';

function App() {
  useEffect(() => {
    kakaoInitialize();
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <div className="page-wrapper">
          <Routes>
            <Route path="/splash" element={<Splash />} />
            <Route path="/on-boarding" element={<OnBoarding />} />
            <Route path="/" element={<Members />} />
            <Route path="/playing" element={<Playing />} />
            <Route path="/playing-game" element={<PlayingGame />} />
            <Route path="/done-game" element={<DoneGame />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
