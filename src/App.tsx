import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './screen/Main'
import Records from './screen/Records';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/records",
    element: <Records />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
