import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx"
import Discover from "./pages/Discover.jsx"
import Favorites from "./pages/Favorites.jsx"
import Create from "./pages/Create.jsx"
import Profile from "./pages/Profile.jsx"
import NoPage from "./pages/NoPage.jsx"


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="create" element={<Create />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
