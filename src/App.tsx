import { Adhesives } from 'components/Adhesives'
import { Finishes } from 'components/Finishes'
import { TopBar } from 'components/TopBar'
import React from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full flex flex-col gap-4 text-center mt-20 text-lg font-bold">
                <Link to="/gladzie">Gladzie</Link>
                <Link to="/kleje">Kleje</Link>
              </div>
            }
          />
          <Route
            path="/gladzie"
            element={
              <>
                <TopBar currentTab="gladzie" />
                <Finishes />
              </>
            }
          />
          <Route
            path="/kleje"
            element={
              <>
                <TopBar currentTab="kleje" />
                <Adhesives />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
