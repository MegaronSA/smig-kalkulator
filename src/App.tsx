import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Adhesives } from 'components/Adhesives'
import { Finishes } from 'components/Finishes'

const App = () => {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/gladzie" element={<Finishes />} />
          <Route path="/kleje" element={<Adhesives />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
