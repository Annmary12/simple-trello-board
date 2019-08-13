import { useRoutes } from 'hookrouter';

import Routes from './route';

function App() {
  const routeResult = useRoutes(Routes);
  return (
    routeResult
  );
}

export default App;
