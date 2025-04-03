import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
    const brandstyle = {
        color : '#ffffff',
        textDecoration : 'none',
        fontWeight : 'bold',
        fontSize : '22px',
        display : 'flex',
        alignItems : 'center',
    }

    const logotext = {
        marginLeft : '10px',
    }
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link style={brandstyle} to="/">
        <img src="/logo.png" alt="Logo" />
        <span style={logotext}>Chit Chat</span>
      </Link>
    </nav>
  );
}

export default Navigation
