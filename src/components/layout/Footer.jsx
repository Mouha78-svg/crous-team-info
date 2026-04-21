import React from "react";
import { RiTeamFill } from "react-icons/ri";
import Navbar from "./Navbar";
const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-context footer-center">
      <div>
        <RiTeamFill className="inline pr-2 text-3xl" />
        <h2>Crous Team Info</h2>

        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
