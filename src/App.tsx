import { Suspense, lazy, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloaders/Preloader';
import Dashboard from './modules/pages/dashboard';
import DefaultLayout from './layouts/DefaultLayout';
const LoginPage = lazy(() => import('./modules/pages/auth/loginPage/index'));
const SignUpPage = lazy(() => import('./modules/pages/auth/signup/index'));
const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const ForgotPasswordPage = lazy(
  () => import('./modules/pages/auth/forgetPassword/index')
);
const FAQPage = lazy(() => import('./modules/pages/faq/index'));
// const ResultPage = lazy(() => import('./modules/pages/result/index'));

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentRoute, setCurrentRoute] = useState<string>('');
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setCurrentRoute(window.location.pathname);

    return () => setCurrentRoute('');
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Navbar />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Navigate to="/login" />
                </DefaultLayout>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/sign_up"
              element={
                <SignUpPage
                  faculty={''}
                  department={''}
                  regno={''}
                  session={''}
                  program={''}
                  password={''}
                />
              }
            />
            <Route path="/notice" element={<NoticePage />} />
            <Route
              path="/forgot_password"
              element={<ForgotPasswordPage result={false} />}
            />
            <Route
              path="/result"
              element={<ForgotPasswordPage result={true} />}
            />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
