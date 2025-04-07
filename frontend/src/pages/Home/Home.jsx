import React from 'react'
import style from "./Home.module.css"
import { Link, useNavigate } from "react-router-dom";
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

function Home() {
  const navigate = useNavigate();

  function startRegister() {
    navigate("/register")
    // alert("Registering you for Chit-Chat...")
  }
  return (
    <div className={style.container}>
      <Card title="Welcome to Chit-Chat !!!" icon="logo.png">
        <p className={style.text}>
          We’re working hard to get Chit-Chat ready for everyone! While we wrap
          up the finishing youches, we’re adding people gradually to make sure
          nothing breaks 😊
        </p>
        <div>
          <Button onClick={startRegister} text="Get Your Username" icon="arrow_forward.png" />
        </div>
        <div className={style.inviteText}>
          <span>Have an invite text? </span>
          <Link to="/login" className={style.link}>
            Sign in here.
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home
