import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import DashboardNav from '../../components/DashboardNav';
import Sidebar from '../../components/Sidebar';

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
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
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel" ref={mainPanel}>
          <DashboardNav />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
