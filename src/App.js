import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
// component
import Layout from './component/Layout/Layout'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import SignIn from './pages/signIn/SignIn'
import PrivateRoute from './Private/PrivateRoute'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <Layout >
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route path="/about"
          element={
            <Layout >
              <PrivateRoute>
                <About />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route path="/signin"
          element={
            <Layout >
              <SignIn />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App