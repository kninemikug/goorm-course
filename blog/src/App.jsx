import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import Contact from './components/Contact'
import DesignSystemTest from './components/DesignSystemTest'

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
  console.log("Current Basename:", basename);

  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-system" element={<DesignSystemTest />} />
          </Routes>
        </main>

        {/* Background decorative elements */}
        <div className="fixed -top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-secondary-glow/15 blur-3xl -z-10 pointer-events-none" />
        <div className="fixed -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary-glow/15 blur-3xl -z-10 pointer-events-none" />
      </div>
    </Router>
  )
}

export default App
