import { useState } from 'react';

import PageTitle from '../../../../components/PageTitle';
import FirstStep from './components/step1';
import SecondStep from './components/step2';

export interface IFirstInfo {
  faculty: string;
  department: string;
  regno: string;
  session: string;
  program: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp: React.FC<IFirstInfo> = () => {
  const [firstInfo, setFirstInfo] = useState<IFirstInfo>({
    faculty: '',
    department: '',
    regno: '',
    session: '',
    program: '',
    password: '',
    confirmPassword: '',
  });

  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <PageTitle title={'Sign Up'} />
      {step === 1 && (
        <FirstStep
          nextStep={nextStep}
          setFirstInfo={setFirstInfo}
          firstInfo={firstInfo}
        />
      )}
      {step === 2 && (
        <SecondStep firstInfo={firstInfo} setFirstInfo={setFirstInfo} />
      )}
    </>
  );
};

export default SignUp;
