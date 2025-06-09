import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const HomeRoute = () => (
  <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default HomeRoute
