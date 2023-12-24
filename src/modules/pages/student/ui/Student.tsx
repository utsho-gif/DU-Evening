import { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import Sidebar from '../components/StudentSidebar/index';
import DashboardNav from '../../student/components/StudentDashboardNav';
import { useLocation } from 'react-router-dom';
import DepartmentProgressBar from '../../../../components/DepartmentProgressbar';
import { RotatingLines } from 'react-loader-spinner';

interface IStudentLayoutProps {
  children: React.ReactNode;
}

const StudentLayout: React.FC<IStudentLayoutProps> = ({ children }) => {
  const mainPanel = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainPanel.current) {
      mainPanel.current.scrollIntoView();
    }

    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      const element = document.getElementById('bodyClick');
      if (element) {
        element.parentNode?.removeChild(element);
      }
    }
  }, [location]);

  useLayoutEffect(() => {
    const link = document.createElement('link');
    link.href = '/css/adminnprogress.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" ref={mainPanel}>
        <DashboardNav />
        <div className="content">
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
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
