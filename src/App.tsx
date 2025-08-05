import { CheckForCompletedPrestigeAchievements, CheckForCompletedWheatAchievements, TickLoop } from './hooks/gameLogicHook';
import { routes } from './routes';
import { RouterProvider } from 'react-router';
import { SnackbarProvider } from 'notistack';

function App() {
  TickLoop(); // This will start the interval when App mounts
  CheckForCompletedWheatAchievements(); // This will start the achievement check interval
  CheckForCompletedPrestigeAchievements();
  return (
    <>
      <SnackbarProvider 
      maxSnack={3} 
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      >
        <RouterProvider router={routes} />
      </SnackbarProvider>
    </>
  )
}

export default App
