import React from "react";
import ErrorUser from "./01_basic/ErrorUser";
import ErrorBoundary from "./01_basic/ErrorBoundary";
import UsersUseAsync from "./04_api/UsersUseAsync";
import { UsersProvider } from "./04_api/UsersApiContext";
import UsersContext from './04_api/UsersContext';

function App() {
  // const user = {
  //   id: 1,
  //   username: 'velopert'
  // };

  return (
      // <ErrorBoundary>
      //   <ErrorUser />
      // </ErrorBoundary>
      <UsersProvider>
        <UsersContext />
      </UsersProvider>
  );
}

export default App;