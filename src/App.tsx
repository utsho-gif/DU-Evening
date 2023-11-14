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

const LoginPage = lazy(() => import('./modules/pages/loginPage/index'));
const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const ForgotPasswordPage = lazy(
  () => import('./modules/pages/forgetPassword/index')
);
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
                <Route path="/notice" element={<NoticePage />} />
                <Route
                  path="/forgot_password"
                  element={<ForgotPasswordPage result={false} />}
                />
                <Route
                  path="/result"
                  element={<ForgotPasswordPage result={true} />}
                />
              </Routes>
            </Suspense>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
