import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import Members from './pages/Members';
import Playing from './pages/Playing';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/playing" element={<Playing />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
