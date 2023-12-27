import { RotatingLines } from 'react-loader-spinner';
import { Suspense, lazy } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import DepartmentProgressBar from './components/DepartmentProgressbar';
import NotFound from './modules/pages/404';

import DepartmentRoutes from './routes/department';
import StudentRoutes from './routes/student';
import AdminRoutes from './routes/admin';

import DepartmentPrivateRoutes from './private-routes/DepartmentPrivateRoute';
import StudentPrivateRoute from './private-routes/StudentPrivateRoute';
import AdminPrivateRoute from './private-routes/AdminPrivateRoute';

const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));
// const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
// const Dashboard = lazy(() => import('./modules/pages/auth/Dashboard/overview'));
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
        <Suspense
          fallback={
            <>
              <DepartmentProgressBar />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '80vh',
                }}
              >
                <RotatingLines
                  strokeColor="#2F1B72"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible
                />
              </div>
            </>
          }
        >
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
            {DepartmentRoutes.map((department) => (
              <Route
                path="/department"
                key={department.id}
                element={
                  <DepartmentPrivateRoutes
                    permission={null}
                    loginStateData={undefined}
                    permissions={undefined}
                  />
                }
              >
                <Route
                  path={department.path}
                  element={<department.component />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            ))}
            {StudentRoutes.map((student) => (
              <Route
                path="/student"
                key={student.id}
                element={
                  <StudentPrivateRoute
                    permission={null}
                    loginStateData={undefined}
                    permissions={undefined}
                  />
                }
              >
                <Route path={student.path} element={<student.component />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            ))}
            {AdminRoutes.map((admin) => (
              <Route
                path="/admin"
                key={admin.id}
                element={
                  <AdminPrivateRoute
                    permission={null}
                    loginStateData={undefined}
                    permissions={undefined}
                  />
                }
              >
                <Route path={admin.path} element={<admin.component />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
