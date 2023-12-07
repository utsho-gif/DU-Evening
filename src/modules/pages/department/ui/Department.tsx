import { Suspense, useEffect, useRef } from 'react';
import Sidebar from '../../../../components/Sidebar';
import DashboardNav from '../../../../components/DashboardNav';
import { useLocation } from 'react-router-dom';
import DepartmentProgressBar from '../../../../components/DepartmentProgressbar';
import { RotatingLines } from 'react-loader-spinner';

interface IDepartmentLayoutProps {
  children: React.ReactNode;
}

const DepartmentLayout: React.FC<IDepartmentLayoutProps> = ({ children }) => {
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
                    strokeColor="#EC008C"
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

export default DepartmentLayout;
