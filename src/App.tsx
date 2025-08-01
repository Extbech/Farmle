import { TickLoop } from './hooks/gameLogicHook';
import { SideBar } from './components/sidebar/sideBar';
import { routes } from './routes';
import { RouterProvider } from 'react-router';
function App() {
  TickLoop(); // This will start the interval when App mounts
  return (
    <>
      <SideBar />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
