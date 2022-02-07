import { Adhesives } from "components/Adhesives";
import { Finishes } from "components/Finishes";
import { GKs } from "components/GKs";
import { Tabs } from "components/shared/Tabs";
import { TopBar } from "components/TopBar";
import React from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-roboto overflow-x-hidden  overflow-y-auto scroll-smooth h-full flex flex-col">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full flex flex-col gap-4 text-center mt-20 text-lg font-bold">
                <Link to="/gladzie">Gladzie</Link>
                <Link to="/kleje">Kleje</Link>
                <Link to="/gk">Łączenie płyt g-k</Link>
              </div>
            }
          />
          <Route
            path="/gladzie"
            element={
              <>
                <TopBar />
                <Tabs currentTab="gladzie" />
                <Finishes />
              </>
            }
          />
          <Route
            path="/kleje"
            element={
              <>
                <TopBar />
                <Tabs currentTab="kleje" />
                <Adhesives />
              </>
            }
          />
          <Route
            path="/gk"
            element={
              <>
                <TopBar />
                <Tabs currentTab="gk" />
                <GKs />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
