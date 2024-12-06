import * as React from 'react';
import Button from '@mui/material/Button';
import {Outlet} from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {

  return (
    <>
    <div id='dashboard' style={{"display":"flex", 
      "justifyContent": "end", 
      position:"absolute", 
      zIndex:"100",
      right:"2%",
      marginTop:"1.5%"
      }}>
      <Button variant="text" id="basic-button"
        onClick={() => {
          const element = document.querySelector("#home");
          element.scrollIntoView({
            behavior: "smooth"
          })}}>
          <img src="/images/camera_logo.webp" alt="company logo" id='logo' 
          style={{height: "6em", width: "6em"}}/>
      </Button>
    </div>
      <Outlet />
    </>
  );
  
}
