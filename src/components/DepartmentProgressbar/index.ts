import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

const DepartmentProgressBar: any = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });

  return '';
};

export default DepartmentProgressBar;
