import React from 'react';

const Footer = () => {
  return (
    <div className="container footer-style text-center py-1">
      <p>
        &copy; {new Date().getFullYear()} University of Dhaka. All Rights
        Reserved. Developed and maintained by Office of the Controller of
        Examinations
      </p>
    </div>
  );
};

export default Footer;
