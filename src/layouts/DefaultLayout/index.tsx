import React from 'react';

interface IDefaultLayout {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <div className="backgroundColor">
      <div className="container main-div">{children}</div>
    </div>
  );
};

export default DefaultLayout;
