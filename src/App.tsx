import { Adhesives } from 'components/Adhesives'
import { Finishes } from 'components/Finishes'
import React from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Link to="/gladzie">Gladzie</Link>} />
          <Route path="/gladzie" element={<Finishes />} />
          <Route path="/kleje" element={<Adhesives />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
