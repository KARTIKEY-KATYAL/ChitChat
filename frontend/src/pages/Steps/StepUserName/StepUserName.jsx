import React from "react";
import Button from "../../../components/shared/Button/Button";

function StepUserName({ onNext }) {
  return (
    <div>
      StepUserName
      <Button onClick={onNext} text="Next" icon="arrow_forward.png" />
    </div>
  );
}

export default StepUserName;
