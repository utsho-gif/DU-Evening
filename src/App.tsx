import { Suspense, lazy } from 'react';
import './App.css';
import Preloader from './components/Preloaders/Preloader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LoginPage = lazy(() => import('./modules/pages/auth/loginPage/index'));
const SignUpPage = lazy(() => import('./modules/pages/auth/signup/index'));
const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const ForgotPasswordPage = lazy(
  () => import('./modules/pages/auth/forgetPassword/index')
);
const FAQPage = lazy(() => import('./modules/pages/faq/index'));
// const ResultPage = lazy(() => import('./modules/pages/result/index'));

function App() {
  return (
    <>
      <div className="backgroundColor">
        <div className="container main-div">
          <Router>
            <Navbar />
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
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
              </Routes>
            </Suspense>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
