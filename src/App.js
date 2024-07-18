import React from "react";
import ErrorUser from "./01_basic/ErrorUser";
import ErrorBoundary from "./01_basic/ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: 'velopert'
  };

  return (
      <ErrorBoundary>
        <ErrorUser />
      </ErrorBoundary>
  );
}

export default App;
