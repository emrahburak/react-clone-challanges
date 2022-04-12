import { Routes, Route } from "react-router-dom";

import HomepageLayout from "../src/layouts/HomepageLayout";

import Homepage from "../src/pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
