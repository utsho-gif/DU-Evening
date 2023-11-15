import { useState } from 'react';
import PageTitle from '../../../../components/PageTitle';
import FirstStep from './components/step1';
import SecondStep from './components/step2';

const SignUp = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  return (
    <>
      <PageTitle title={'Sign Up'} />
      {step === 1 && <FirstStep nextStep={nextStep} />}
      {step === 2 && <SecondStep />}
    </>
  );
};

export default SignUp;
