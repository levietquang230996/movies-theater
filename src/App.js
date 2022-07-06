import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovie from './pages/detail';
import Home from './pages/home';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movie/:id" element={<DetailMovie />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
