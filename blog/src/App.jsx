import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>

        {/* Background decorative elements */}
        <div style={{
          position: 'fixed',
          top: '-10%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'fixed',
          bottom: '-10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
      </div>
    </Router>
  )
}

export default App
