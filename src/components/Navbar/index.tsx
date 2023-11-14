import DUlogo from '../../assets/ducmc.png';
import NavItems from './components/navbar';

const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <img src={DUlogo} className="item-center" alt="" />
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
