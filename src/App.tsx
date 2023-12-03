import { Suspense, lazy } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Preloader from './components/Preloaders/Preloader';
import DefaultLayout from './layouts/DefaultLayout';
const LoginPage = lazy(() => import('./modules/pages/auth/loginPage/index'));
const SignUpPage = lazy(() => import('./modules/pages/auth/signup/index'));
const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const ForgotPasswordPage = lazy(
  () => import('./modules/pages/auth/forgetPassword/index')
);
const FAQPage = lazy(() => import('./modules/pages/faq/index'));

function App() {
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
            <Route
              path="/login"
              element={
                <DefaultLayout>
                  <LoginPage />
                </DefaultLayout>
              }
            />
            <Route
              path="/sign_up"
              element={
                <DefaultLayout>
                  <SignUpPage
                    faculty={''}
                    department={''}
                    regno={''}
                    session={''}
                    program={''}
                    password={''}
                  />
                </DefaultLayout>
              }
            />
            <Route
              path="/notice"
              element={
                <DefaultLayout>
                  <NoticePage />
                </DefaultLayout>
              }
            />
            <Route
              path="/forgot_password"
              element={
                <DefaultLayout>
                  <ForgotPasswordPage result={false} />
                </DefaultLayout>
              }
            />
            <Route
              path="/result"
              element={
                <DefaultLayout>
                  <ForgotPasswordPage result={true} />
                </DefaultLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <DefaultLayout>
                  <FAQPage />
                </DefaultLayout>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
