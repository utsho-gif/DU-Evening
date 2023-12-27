import { motion } from 'framer-motion';
import { BsFillEmojiWinkFill } from 'react-icons/bs';

import '../404/404.css';

const NotFound = () => {
  return (
    <div className="page">
      <div className="container ">
        <div className="row grid grid-cols-2 divide-x">
          <div className="col-lg-6 my-5">
            <div className="mt-5">
              <motion.h1
                animate={{ rotate: -45 }}
                transition={{ ease: 'easeOut', duration: 0.7 }}
                className=""
              >
                Opps!
              </motion.h1>
            </div>
            <div>
              <h2>We can't seem to find the page you're looking for.</h2>
            </div>
            <div>
              <h4 className="mt-5">
                PS: This page is under construction. Give us some time. Untill
                then make a trip elsewhere.{' '}
                <BsFillEmojiWinkFill className="text-success"></BsFillEmojiWinkFill>
              </h4>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img
              className="img-fluid"
              src={'https://i.ibb.co/Kx8zvPQ/404.jpg'}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
