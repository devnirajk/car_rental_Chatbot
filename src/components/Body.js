import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatBot from './ChatBot';

const Body = () => {
  const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <ChatBot />
        }
  ]);

  return (
    <div>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body
