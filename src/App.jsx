import Homepage from './components/Homepage';
import BookmarkPage from './components/BookmarkPage';
import DetailCard from './components/DetailCard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/bookmarks",
    element: <BookmarkPage />
  },
  {
    path: "/detailCard",
    element: <DetailCard />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
