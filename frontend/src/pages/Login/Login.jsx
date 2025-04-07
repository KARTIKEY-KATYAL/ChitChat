import React  from 'react'
import style from './Login.module.css'
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOTP from "../Steps/StepOTP/StepOTP";
import { useState } from 'react';

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

function Login() {
     const [step, setstep] = useState(1)
 
     const Step = steps[step]
 
     function onNext() {
       setstep(step + 1)
     }
   return (
     <div>
         <Step onNext={onNext}/>
     </div>
   )
}

export default Login
