import React from 'react';

import HomePage from './pages/Home';
import Project from './pages/Project';

const Routes = {
  "/": () => <HomePage />,
  "/:id": ({id}) => <Project projectId={id} />
}

export default Routes;
