import React from 'react'
import Button from "../../../components/shared/Button/Button";
function StepAvatar({onNext}) {
  return (
    <div>
      Avatar Component
      <Button onClick={onNext} text="Next" icon="arrow_forward.png" />
    </div>
  );
}

export default StepAvatar
