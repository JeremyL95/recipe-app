import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import BookmarkPage from './components/BookmarkPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
    </div>
  )
}

export default App
