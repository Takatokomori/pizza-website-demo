import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <PinterestIcon />
            <TwitterIcon />
        </div>
        <p> &copy; 2022 pizzamiracle.com </p>
    </footer>
  )
}
