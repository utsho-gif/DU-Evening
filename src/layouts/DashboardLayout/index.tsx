import { useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  const mainPanel = useRef(null);

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
