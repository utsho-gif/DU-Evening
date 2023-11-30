import { ThreeDots } from 'react-loader-spinner';

function SpinnerLoader() {
  return (
    <ThreeDots
      height="35"
      width="80"
      radius="9"
      color="#EB008C"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible
      wrapperClass="d-flex align-items-center my_loading"
    />
  );
}

export default SpinnerLoader;
