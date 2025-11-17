import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Nav from './components/Nav'
import { Login, Register } from './components/Auth'
import { Dashboard, Markets, Chat, Indicators, Charts, Articles, Library, CalendarPage, Earnings, Support, Admin } from './components/Pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/indicators" element={<Indicators />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/library" element={<Library />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
