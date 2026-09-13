import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Activities from './pages/Activities'
import Partners from './pages/Partners'
import References from './pages/References'
import ReferenceCategory from './pages/ReferenceCategory'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/quality-egypt">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="activities" element={<Activities />} />
          <Route path="partners" element={<Partners />} />
          <Route path="references" element={<References />} />
          <Route path="references/:slug" element={<ReferenceCategory />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsArticle />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}