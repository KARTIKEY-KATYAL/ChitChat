import React from 'react'
import Button from "../../../components/shared/Button/Button";
function StepName({onNext}) {
  return (
    <div>
      StepName
      <Button onClick={onNext} text="Next" icon="arrow_forward.png" />
    </div>
  );
}

export default StepName
