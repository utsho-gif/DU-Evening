import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

interface IDefaultLayout {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <div className="backgroundColor">
      <div className="container main-div">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
