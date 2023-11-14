import { useEffect, useState } from 'react';
import DUlogo from '../../assets/du.png';
import NavItems from './components/navbar';

const Navbar = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  const updateDimensions = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div
            className={`d-flex ${
              size < 560 ? 'flex-column' : ''
            } align-items-center justify-content-center p-4`}
          >
            <img width="150px" src={DUlogo} className="item-center" alt="" />
            <h1 className="du-name">Dhaka University</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
