import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './app.css';
import burl from './utils/burl.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userStore from './store/userStore.js';

const Register = lazy(() => import('./pages/Register/Register.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

const ProtectedRoute = ({ element }) => {
  const { user, loading } = userStore();

  if (loading) {
    return <h1 className='loading'>Loading...</h1>;
  }

  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  const { setUser, setLoading } = userStore();

  useEffect(() => {
    const loadData = async () => {
      const promise = axios.get(burl, { withCredentials: true });

      toast.promise(promise, {
        pending: 'Loading...',
        error: 'Try again later',
        success: 'Loaded successfully'
      });

      try {
        const res = await promise;
        setUser(res?.data || null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setUser, setLoading]);




  return (
    <BrowserRouter>
      <Suspense fallback={<h1 className='loading'>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<ProtectedRoute element={<Home />} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<ProtectedRoute element={<Profile />} />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
