import React from 'react';
import { renderRoutes } from 'react-router-config';

import Navbar from 'components/Navbar/Navbar';

import routes from 'constants/routes';

const App = () => (
  <>
    <Navbar />
    {renderRoutes(routes)}
  </>
);

export default App;
