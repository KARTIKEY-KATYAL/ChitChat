import React from 'react'
import Button from "../../../components/shared/Button/Button";
function StepOTP({onNext}) {
  return (
    <div>
      StepOTP
      <Button onClick={onNext} text="Next" icon="arrow_forward.png" />
    </div>
  );
}

export default StepOTP
