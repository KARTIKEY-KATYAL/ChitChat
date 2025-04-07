import React from 'react'
import Button from "../../../components/shared/Button/Button";
function StepPhoneEmail({onNext}) {

  return (
    <div>
      StepPhoneEmail
      <Button onClick={onNext} text="Next" icon="arrow_forward.png" />
    </div>
  );
}

export default StepPhoneEmail
